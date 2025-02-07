#!/bin/bash

# Deployment script for AWS Lightsail Node.js application

# Variables
APP_NAME="by1"
APP_DIR="/opt/$APP_NAME"
SERVICE_NAME="$APP_NAME.service"
DOMAIN="by1.net"
USER=$(whoami)

# Create application directory
sudo mkdir -p $APP_DIR
sudo chown $USER:$USER $APP_DIR

# Copy application files
sudo rsync -av --delete ./ $APP_DIR/ --exclude node_modules

# Install Node.js and dependencies
sudo apt-get install -y nodejs npm
cd $APP_DIR
sudo -u $USER npm install --production

# Build application
sudo -u $USER npm run build

# Create systemd service
sudo bash -c "cat > /etc/systemd/system/$SERVICE_NAME" <<EOF
[Unit]
Description=BY1 Production Node.js Application
After=network.target

[Service]
User=$USER
WorkingDirectory=$APP_DIR
ExecStart=/usr/bin/node $APP_DIR/.next/standalone/server.js
Restart=always
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=HOST=0.0.0.0
Environment=NEXT_PUBLIC_BASE_URL=https://$DOMAIN
EnvironmentFile=$APP_DIR/.env

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable $SERVICE_NAME
sudo systemctl restart $SERVICE_NAME

# Install and configure firewall
sudo apt-get install -y ufw
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

# Configure Nginx
sudo apt-get install -y nginx
sudo bash -c "cat > /etc/nginx/sites-available/$APP_NAME" <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Create certbot webroot directory
sudo mkdir -p /var/www/certbot
sudo chown -R $USER:$USER /var/www/certbot

# Enable Nginx configuration
sudo ln -s /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Configure SSL with improved error handling
MAX_RETRIES=3
RETRY_DELAY=30

for i in $(seq 1 $MAX_RETRIES); do
    sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m admin@by1.net --debug && break
    if [ $i -eq $MAX_RETRIES ]; then
        echo "SSL configuration failed after $MAX_RETRIES attempts. Check these:"
        echo "1. DNS propagation is complete (may take up to 24 hours)"
        echo "2. Port 80 is open and accessible"
        echo "3. Nginx is running and serving /.well-known/acme-challenge/"
        echo "Full logs available at /var/log/letsencrypt/letsencrypt.log"
        exit 1
    fi
    echo "SSL configuration attempt $i failed, retrying in $RETRY_DELAY seconds..."
    sleep $RETRY_DELAY
done

# Final Nginx configuration
sudo bash -c "cat > /etc/nginx/sites-available/$APP_NAME" <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name $DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

sudo nginx -t && sudo systemctl reload nginx

echo "Deployment complete! Application running at https://by1.net"

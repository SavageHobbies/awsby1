"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let animationFrame: number;
    const gridSize = 64;
    const baseColor = 'rgba(79, 79, 79, 0.18)';

    const drawGrid = () => {
      if (!ctx || !canvas) {
        console.error('Canvas context not available');
        return;
      }

      const time = performance.now();
      console.log('Drawing grid at:', time);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log('Canvas size:', canvas.width, canvas.height);
      
      // Animate grid line opacity
      const opacity = 0.18 + Math.sin(time * 0.001) * 0.05;
      ctx.strokeStyle = `rgba(79, 79, 79, ${opacity})`;
      ctx.lineWidth = 1;

      // Draw grid with parallax effect
      const scrollProgress = scrollYProgress.get();
      console.log('Scroll progress:', scrollProgress);
      const offsetX = (scrollProgress * 50) % gridSize;
      const offsetY = (scrollProgress * 50) % gridSize;

      // Vertical lines
      for (let x = -gridSize; x <= canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -gridSize; y <= canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }

      // Add subtle gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.03)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.03)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(drawGrid);
    };

    resizeCanvas();
    drawGrid();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, rotate }}
      className="fixed inset-0 overflow-hidden z-0"
    >
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
}

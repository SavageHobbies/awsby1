import { Metadata } from 'next';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


/**
 * Obfuscates email addresses to prevent spam harvesting
 * @param email - The email address to obfuscate
 * @returns Obfuscated email string
 */
export function obfuscateEmail(email: string): string {
  const [name, domain] = email.split('@');
  const obfuscatedName = name
    .split('')
    .map((char, i) => (i % 2 === 0 ? char : `&#x${char.charCodeAt(0).toString(16)};`))
    .join('');
  return `${obfuscatedName}@${domain}`;
}

/**
 * Decodes obfuscated email addresses
 * @param obfuscatedEmail - The obfuscated email string
 * @returns Original email address
 */
export function decodeEmail(obfuscatedEmail: string): string {
  const [name, domain] = obfuscatedEmail.split('@');
  const decodedName = name.replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
    String.fromCharCode(Number.parseInt(hex, 16))
  );
  return `${decodedName}@${domain}`;
}

// Rest of existing utility functions...

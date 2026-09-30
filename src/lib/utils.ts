import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WA_NUMBER = "917801078864";
export const WA_DISPLAY = "+91 78010 78864";
export const PHONE_DISPLAY = "+91 78010 78864";
export const ADDRESS_LINES = [
  "1-11-151/1/3B, Begumpet,",
  "Shamlal Building Area,",
  "Near to RBI Quarters,",
  "Hyderabad, Telangana 500016",
];

export function waLink(message?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

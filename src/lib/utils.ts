import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function absoluteUrl(
  path: string,
  base: string = "http://dissertationwriterhelp.co.uk/"
): string {
  try {
    const url = new URL(path, base)
    return url.toString()
  } catch (error) {
    console.error("Invalid URL:", error)
    return path // Fallback to the path if URL creation fails
  }
}

/**
 * Custom Image Loader for premium asset delivery.
 * Supports WebP/AVIF transformations and fallback logic.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // If external URL, pass through (assuming Next.js Image optimization handles it)
  if (src.startsWith('http')) return src;
  
  // Local assets with optimization parameters
  return `${src}?w=${width}&q=${quality || 75}`;
}

/**
 * Generates a consistent blur placeholder for Glassmorphism depth.
 */
export const getBlurPlaceholder = () => {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8AKpT999XwAAAABJRU5ErkJggg==";
};

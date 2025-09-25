// Simple image types - alt and description are required
export interface ImageWithAlt {
  src: string;
  alt: string;
  description: string;
}

export type ImageInput = ImageWithAlt;

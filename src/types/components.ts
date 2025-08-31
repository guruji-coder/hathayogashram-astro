// Common UI component types
export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  };
}

// Section Header component props
export interface SectionHeaderProps {
  title: string;
  titleClass?: string;
  svgWidth?: number;
  svgHeight?: number;
  svgColor?: string;
  containerClass?: string;
}

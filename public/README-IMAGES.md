# Hero Carousel Images

The HeroCarousel component expects the following images to be placed in the `/static` folder:

## Required Images:

- `hero-bg-1.jpg` - Main hero image (similar to the group photo with certificates)
- `hero-bg-2.jpg` - Second slide image (yoga practice or training scene)
- `hero-bg-3.jpg` - Third slide image (ashram or meditation scene)

## Image Specifications:

- **Dimensions**: 1920x1080 or larger (16:9 aspect ratio recommended)
- **Format**: JPG, WebP, or PNG
- **Quality**: High resolution for sharp display on all devices
- **Content**: Should show yoga training, student groups, or ashram scenes
- **Lighting**: Images should be bright enough to support text overlay

## Image Optimization:

- Compress images to keep file sizes manageable (aim for under 500KB each)
- Consider using WebP format for better compression
- Ensure images look good with the dark overlay applied

## Accessibility:

- Images should have good contrast with white text overlay
- The dark overlay (bg-opacity-40) will be applied automatically
- Text content is defined in `/src/lib/constants/carousel.ts`

## Updating Images:

To change or add more slides, update the `carouselSlides` array in:
`/src/lib/constants/carousel.ts`

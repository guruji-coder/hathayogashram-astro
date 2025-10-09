# ScrollableCurriculumSection Component

A production-ready, accessible, and performant scrollable curriculum section component for yoga teacher training courses.

## 🚀 Quick Start

```astro
---
import ScrollableCurriculumSection from '@/components/sections/TTC/ScrollableCurriculumSection.astro';

const curriculumData = {
  title: 'Yoga Teacher Training Curriculum',
  items: [
    {
      id: 'yoga-asanas',
      title: 'Yoga Asanas',
      sections: [
        {
          title: 'Standing Poses',
          description: 'Foundation poses for strength and balance',
          items: [
            'Tadasana (Mountain Pose)',
            'Vrikshasana (Tree Pose)',
            'Virabhadrasana I (Warrior I)',
            'Virabhadrasana II (Warrior II)',
          ],
        },
      ],
    },
  ],
};
---

<ScrollableCurriculumSection curriculumData={curriculumData} />
```

## 📋 Props

| Prop             | Type             | Required | Description                       |
| ---------------- | ---------------- | -------- | --------------------------------- |
| `curriculumData` | `CurriculumData` | Yes      | The curriculum content to display |

### CurriculumData Interface

```typescript
interface CurriculumData {
  title: string;
  items: Array<{
    id: string; // Unique identifier
    title: string; // Main section title
    sections: Array<{
      title: string; // Subsection title
      description?: string; // Optional description
      items: string[]; // List of curriculum items
    }>;
  }>;
}
```

## ✨ Features

### 🎨 Smart Image Selection

The component automatically selects appropriate background images based on content keywords:

- **Asana**: Standing, sitting, twisting poses
- **Pranayama**: Breathing techniques
- **Meditation**: Dhyana, concentration practices
- **Philosophy**: Patanjali sutras, yamas, niyamas
- **Anatomy**: Skeletal, muscular systems
- **Mudras**: Hand gestures, healing practices
- **Bandhas**: Energy locks
- **Teaching**: Methodology, adjustments
- **Cleansing**: Shatkarma techniques

### ♿ Accessibility Features

- **Keyboard Navigation**:
  - `↓` / `PageDown`: Next slide
  - `↑` / `PageUp`: Previous slide
  - `Home`: First slide
  - `End`: Last slide
- **Screen Reader Support**: Full ARIA labels and semantic HTML
- **Skip Navigation**: Jump to end of section
- **Reduced Motion**: Respects system preferences
- **Focus Indicators**: Visible keyboard focus states

### 📱 Responsive Design

- **Mobile**: Single column, single background image
- **Desktop**: Two column grid, split background images
- **Smooth Scrolling**: Snap-to-slide behavior
- **Touch-Friendly**: Optimized for swipe gestures

### ⚡ Performance

- **Image Preloading**: First 3 slides preloaded
- **Lazy Loading**: Progressive image loading
- **GPU Acceleration**: Hardware-accelerated animations
- **Optimized Animations**: Staggered entrance effects

## 🎨 Customization

### Change Colors

Modify the `textColor` property in `contentImageMap`:

```typescript
const contentImageMap = {
  asana: {
    textColor: 'text-orange-300', // Your brand color
  },
};
```

### Adjust Grid Layout

Edit the CSS in the `<style>` section:

```css
.two-row-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 columns */
  gap: 1rem; /* Larger gap */
}
```

### Animation Speed

Change transition durations:

```astro
class="transition-all duration-500" <!-- Faster animation -->
```

## 🔧 Advanced Configuration

### Custom Background Images

Add your own image categories:

```typescript
const contentImageMap = {
  myCustomCategory: {
    keywords: ['custom', 'keywords'],
    images: ['/path/to/image1.jpg', '/path/to/image2.jpg'],
    textColor: 'text-blue-300',
  },
};
```

### Intersection Observer Options

Modify the observer threshold:

```typescript
const observer = new IntersectionObserver(
  entries => {
    // ...
  },
  {
    threshold: 0.5, // 50% visible to trigger
    rootMargin: '0px 0px -20% 0px', // Adjust trigger zone
  }
);
```

## 🐛 Troubleshooting

### Images Not Loading

1. Check image paths are correct
2. Verify images exist in `/public/images/` directory
3. Check browser console for 404 errors

### Animations Not Working

1. Check if `prefers-reduced-motion` is enabled
2. Verify Tailwind CSS is properly configured
3. Check browser DevTools for CSS errors

### Keyboard Navigation Not Working

1. Ensure section has focus (click or tab to it)
2. Check browser console for JavaScript errors
3. Verify `tabindex="0"` is present on section

## 📊 Performance Tips

1. **Optimize Images**: Convert to WebP format
2. **Use CDN**: Host images on fast CDN
3. **Limit Slides**: Keep under 20 slides for best performance
4. **Monitor Metrics**: Use Lighthouse to track performance

## 🔒 Security

- No inline event handlers
- Safe string interpolation
- CSP-compatible
- XSS-protected

## 📚 Related Components

- `TTC/HeroSection.astro` - Hero section for course pages
- `TTC/PricingSection.astro` - Course pricing
- `TTC/TestimonialSection.astro` - Student testimonials

## 📞 Support

For issues or questions about this component:

1. Check the `PRODUCTION_READY.md` file for detailed documentation
2. Review browser console for error messages
3. Verify prop structure matches the interface

## 📄 License

This component is part of the Hatha Yoga Ashram project.

---

**Version**: 2.0.0  
**Last Updated**: October 9, 2025  
**Status**: ✅ Production Ready

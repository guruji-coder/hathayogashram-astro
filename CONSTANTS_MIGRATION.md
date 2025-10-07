# Constants Structure Migration - Complete ✅

## 📦 New Directory Structure

```
src/constants/
├── index.ts                              # Main barrel export
│
├── shared/                               # Shared across app
│   ├── images.ts                        # All image paths
│   ├── routes.ts                        # Navigation routes
│   └── ui.ts                            # UI constants
│
├── components/                           # Component-specific
│   ├── carousel.ts                      # Carousel configs
│   └── navigation.ts                    # Header/nav constants
│
├── features/                             # Feature-specific
│   ├── courses/
│   │   └── index.ts                     # Course listings
│   ├── teachers/
│   │   ├── profiles.ts                  # Teacher data
│   │   └── gurus.ts                     # Guru profiles
│   └── reviews/
│       └── testimonials.ts              # Customer reviews
│
└── pages/                                # Page-specific
    ├── home/
    │   ├── index.ts                     # Home page main
    │   ├── contact.ts                   # Contact info
    │   ├── faq.ts                       # FAQ data
    │   ├── location.ts                  # Location info
    │   └── yoga-alliance.ts             # Certification info
    └── ttc/
        ├── 200hour.ts                   # 200hr TTC data
        └── teachersConstants.ts         # TTC teachers
```

## 🔄 Import Path Changes

### Before → After

| Old Path                                    | New Path                                   |
| ------------------------------------------- | ------------------------------------------ |
| `$constants/imageConstants`                 | `$constants/shared/images`                 |
| `$constants/routesConstants`                | `$constants/shared/routes`                 |
| `$constants/uiConstants`                    | `$constants/shared/ui`                     |
| `$constants/headerConstants`                | `$constants/components/navigation`         |
| `$constants/carousel`                       | `$constants/components/carousel`           |
| `$constants/courseConstants`                | `$constants/features/courses`              |
| `$constants/teachersConstants`              | `$constants/features/teachers/profiles`    |
| `$constants/yogaGurusConstants`             | `$constants/features/teachers/gurus`       |
| `$constants/reviewsConstants`               | `$constants/features/reviews/testimonials` |
| `$constants/faqConstants`                   | `$constants/pages/home/faq`                |
| `$constants/locationConstants`              | `$constants/pages/home/location`           |
| `$constants/contactConstants`               | `$constants/pages/home/contact`            |
| `$constants/homepage/homePageConstants`     | `$constants/pages/home`                    |
| `$constants/homepage/yogaAllianceConstants` | `$constants/pages/home/yoga-alliance`      |
| `$constants/ttc/200hour`                    | `$constants/pages/ttc/200hour`             |
| `$constants/TTC/200hour`                    | `$constants/pages/ttc/200hour`             |

## ✅ Completed Tasks

- [x] Created new folder structure (`shared`, `components`, `features`, `pages`)
- [x] Moved all constant files to appropriate locations
- [x] Removed duplicate `HomePage` and `homepage` folders
- [x] Removed empty legacy files (`navbar.ts`, `training200Constants.ts`, etc.)
- [x] Updated main barrel export (`index.ts`)
- [x] Fixed all import paths using `$constants` alias
- [x] Updated relative imports to use alias paths
- [x] Fixed content-review page imports
- [x] Removed casing conflicts (HomePage vs homepage, TTC vs ttc)

## 🎯 Benefits of New Structure

### 1. **No Casing Conflicts**

- All folders are lowercase
- Consistent naming convention
- TypeScript/macOS compatibility

### 2. **Clear Organization**

- **shared/**: Universal constants (images, routes, UI)
- **components/**: Component-specific (navigation, carousel)
- **features/**: Domain features (courses, teachers, reviews)
- **pages/**: Page-specific content (home, ttc)

### 3. **Better Developer Experience**

- Intuitive file locations
- Easy to find constants
- Scalable structure
- Single barrel export for convenience

### 4. **Maintainability**

- Logical grouping by purpose
- Easy to add new constants
- Clear separation of concerns

## 📋 Usage Examples

### Importing from Shared Constants

```typescript
// Images
import { COURSE_IMAGES_FLAT, TEACHER_IMAGES_FLAT } from '$constants/shared/images';

// Routes
import { ROUTE_HOME, ROUTE_TTC_200 } from '$constants/shared/routes';

// UI Components
import { BUTTON_STYLES } from '$constants/shared/ui';
```

### Importing from Component Constants

```typescript
// Navigation
import { HEADER_BRANDING, NAV_MENU_ITEMS } from '$constants/components/navigation';

// Carousel
import { CAROUSEL_SLIDES } from '$constants/components/carousel';
```

### Importing from Feature Constants

```typescript
// Courses
import { COURSE_LIST } from '$constants/features/courses';

// Teachers
import { TEACHERS_SECTION } from '$constants/features/teachers/profiles';
import { YOGA_GURUS } from '$constants/features/teachers/gurus';

// Reviews
import { REVIEWS_SECTION } from '$constants/features/reviews/testimonials';
```

### Importing from Page Constants

```typescript
// Home Page
import { HOME_HERO, HOME_CONTENT } from '$constants/pages/home';
import { FAQ_SECTION } from '$constants/pages/home/faq';
import { LOCATION_SECTION } from '$constants/pages/home/location';
import { YOGA_ALLIANCE_SECTION } from '$constants/pages/home/yoga-alliance';

// TTC Pages
import { TRAINING_200_CURRICULUM } from '$constants/pages/ttc/200hour';
```

### Using Barrel Export (Import Everything)

```typescript
// Import from main index - gets all exports
import {
  COURSE_IMAGES_FLAT,
  ROUTE_HOME,
  BUTTON_STYLES,
  HOME_HERO,
  TEACHERS_SECTION,
} from '$constants';
```

## 🔧 Naming Conventions

### Files

- **Format**: `kebab-case.ts`
- **Examples**: `yoga-alliance.ts`, `testimonials.ts`

### Folders

- **Format**: `lowercase`
- **Examples**: `shared/`, `features/`, `home/`, `ttc/`

### Exports

- **Constants**: `UPPER_SNAKE_CASE`
- **Types**: `PascalCase`
- **Examples**:
  ```typescript
  export const HOME_HERO_SECTION = { ... };
  export interface CourseData { ... }
  ```

## 🚫 What Was Removed

- ❌ `HomePage/` folder (duplicate with wrong casing)
- ❌ `homepage/` folder (old structure)
- ❌ `TTC/` folder (wrong casing)
- ❌ `navbar.ts` (empty file)
- ❌ `training200Constants.ts` (empty file)
- ❌ `trainingCarouselConstants.ts` (empty file)
- ❌ `courseGainConstants.ts` (empty file)
- ❌ `dailyScheduleSectionConstants.ts` (empty file)
- ❌ `rulesConstants.ts` (empty file)

## 📝 Notes

### TypeScript Configuration

The `$constants` alias is configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "$constants": ["./src/constants/index.ts"],
      "$constants/*": ["./src/constants/*"]
    }
  }
}
```

### Build Considerations

- All imports now use the `$constants` alias for consistency
- No more relative path confusion (`../../constants/...`)
- Better tree-shaking with barrel exports
- Cleaner import statements

### Future Additions

When adding new constants:

1. **Determine category**: shared, component, feature, or page?
2. **Create file in appropriate folder**
3. **Export from that file**
4. **Add export to** `index.ts` barrel
5. **Use consistent naming conventions**

Example:

```typescript
// New feature constant
// File: src/constants/features/workshops/index.ts
export const WORKSHOP_LIST = { ... };

// Add to index.ts
export * from './features/workshops';

// Import in components
import { WORKSHOP_LIST } from '$constants/features/workshops';
// or
import { WORKSHOP_LIST } from '$constants';
```

## 🎉 Migration Complete!

The constants structure has been successfully migrated to a robust, scalable, and maintainable system. All casing conflicts have been resolved, and imports have been standardized across the codebase.

### Next Steps

1. Test all pages to ensure imports work correctly
2. Update any custom build scripts if they reference old paths
3. Update documentation for new team members
4. Consider creating constants validation script for CI/CD

---

_Last Updated: October 6, 2025_
_Migration Status: ✅ Complete_

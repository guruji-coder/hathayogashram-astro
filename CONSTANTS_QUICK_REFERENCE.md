# 📖 Constants Quick Reference

## 🗂️ Structure Overview

```
constants/
├── shared/       → Universal (images, routes, UI)
├── components/   → Component-specific (navigation, carousel)
├── features/     → Domain features (courses, teachers, reviews)
└── pages/        → Page-specific (home, ttc)
```

## 📦 Import Cheat Sheet

### Shared Constants

```typescript
// Images
import {
  COURSE_IMAGES_FLAT,
  TEACHER_IMAGES_FLAT,
  CERTIFICATE_IMAGES,
} from '$constants/shared/images';

// Routes
import { ROUTE_HOME, ROUTE_TTC_200, ROUTE_CONTACT } from '$constants/shared/routes';

// UI
import { BUTTON_STYLES, COLOR_PALETTE } from '$constants/shared/ui';
```

### Component Constants

```typescript
// Navigation
import { NAV_MENU_ITEMS, HEADER_BRANDING, SOCIAL_LINKS } from '$constants/components/navigation';

// Carousel
import { CAROUSEL_SLIDES } from '$constants/components/carousel';
```

### Feature Constants

```typescript
// Courses
import { COURSE_LIST, YOGA_COURSES_CARDS_SECTION } from '$constants/features/courses';

// Teachers
import { TEACHERS_SECTION } from '$constants/features/teachers/profiles';
import { YOGA_GURUS } from '$constants/features/teachers/gurus';

// Reviews
import { REVIEWS_SECTION, TESTIMONIALS } from '$constants/features/reviews/testimonials';
```

### Page Constants

```typescript
// Home Page
import { HOME_HERO, HOME_CONTENT, HOME_STYLES } from '$constants/pages/home';
import { FAQ_SECTION } from '$constants/pages/home/faq';
import { LOCATION_SECTION } from '$constants/pages/home/location';
import { CONTACT_INFO } from '$constants/pages/home/contact';
import { YOGA_ALLIANCE_SECTION } from '$constants/pages/home/yoga-alliance';

// TTC Pages
import { TRAINING_200_CURRICULUM, TRAINING_200_SCHEDULE } from '$constants/pages/ttc/200hour';
import { TTC_TEACHERS } from '$constants/pages/ttc/teachers';
```

## 🎯 Common Patterns

### Import Everything (Barrel Export)

```typescript
import { HOME_HERO, COURSE_LIST, TEACHERS_SECTION } from '$constants';
```

### Type-Safe Imports

```typescript
import type { Course, Teacher } from '$constants/pages/ttc/200hour';
```

### Destructure What You Need

```typescript
const { title, subtitle, content } = HOME_HERO;
```

## ✅ Validation

Check if structure is valid:

```bash
npm run constants:validate
# or
bun run constants:validate
```

## 📝 Naming Rules

| Element   | Format           | Example                               |
| --------- | ---------------- | ------------------------------------- |
| Folders   | lowercase        | `shared/`, `pages/`, `home/`          |
| Files     | kebab-case       | `yoga-alliance.ts`, `testimonials.ts` |
| Constants | UPPER_SNAKE_CASE | `HOME_HERO`, `COURSE_LIST`            |
| Types     | PascalCase       | `CourseData`, `Teacher`               |

## 🚀 Quick Commands

| Command                      | Description        |
| ---------------------------- | ------------------ |
| `bun run constants:validate` | Validate structure |
| `bun run build`              | Build project      |
| `bun run dev`                | Start dev server   |

## 💡 Tips

1. **Always use `$constants/`** - Don't use relative paths
2. **Check validation** - Run before committing
3. **Follow naming** - Lowercase folders, kebab-case files
4. **Use barrel export** - Import from `$constants` when possible
5. **Group related** - Keep similar constants together

## 🐛 Troubleshooting

### Can't find module?

✅ Use `$constants/` prefix
✅ Check file exists in correct folder
✅ Run `npm run constants:validate`

### Casing error?

✅ All folders must be lowercase
✅ No uppercase letters in folder names
✅ Files should be kebab-case

### Import not working?

✅ Check `index.ts` exports the module
✅ Verify path in `tsconfig.json`
✅ Restart TypeScript server in VS Code

## 📁 File Locations

| Old Location                        | New Location                       |
| ----------------------------------- | ---------------------------------- |
| `imageConstants.ts`                 | `shared/images.ts`                 |
| `routesConstants.ts`                | `shared/routes.ts`                 |
| `uiConstants.ts`                    | `shared/ui.ts`                     |
| `headerConstants.ts`                | `components/navigation.ts`         |
| `carousel.ts`                       | `components/carousel.ts`           |
| `courseConstants.ts`                | `features/courses/index.ts`        |
| `teachersConstants.ts`              | `features/teachers/profiles.ts`    |
| `yogaGurusConstants.ts`             | `features/teachers/gurus.ts`       |
| `reviewsConstants.ts`               | `features/reviews/testimonials.ts` |
| `faqConstants.ts`                   | `pages/home/faq.ts`                |
| `locationConstants.ts`              | `pages/home/location.ts`           |
| `contactConstants.ts`               | `pages/home/contact.ts`            |
| `homepage/homePageConstants.ts`     | `pages/home/index.ts`              |
| `homepage/yogaAllianceConstants.ts` | `pages/home/yoga-alliance.ts`      |
| `ttc/200hour.ts`                    | `pages/ttc/200hour.ts`             |

---

**Keep this handy!** Bookmark this page for quick reference.

_Last Updated: October 6, 2025_

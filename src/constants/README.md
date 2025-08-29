# 🎯 Header Constants System

## 📍 **Where to Find Everything**

### **Main Constants File:**

```
📁 src/lib/constants/headerConstants.ts
```

**🔥 This is your ONE-STOP-SHOP for ALL header-related constants!**

---

## 🗂️ **What's Inside - Easy Navigation**

### **🎨 Branding & Logo**

```typescript
HEADER_BRANDING.*
```

- Logo paths, alt text, desktop/mobile sizes

### **📞 Contact Information**

```typescript
HEADER_CONTACT.*
```

- Address, phone number, Google Maps links, WhatsApp

### **📱 Social Media**

```typescript
HEADER_SOCIAL_MEDIA[]*
```

- Facebook, Instagram, YouTube, WhatsApp links + styling

### **🧭 Navigation Menu**

```typescript
HEADER_NAVIGATION_ITEMS[]*
```

- Complete menu structure with all pages and dropdowns

### **🚀 Call-to-Action Button**

```typescript
HEADER_CTA_BUTTON.*
```

- "Apply Today" button text, URL, and styling classes

### **📐 Dropdown Configuration**

```typescript
HEADER_DROPDOWN_WIDTHS.*
```

- Width classes for different dropdown menus

### **🎨 All CSS Classes**

```typescript
HEADER_STYLES.*
```

- Every CSS class organized by component section

### **♿ Accessibility**

```typescript
HEADER_ACCESSIBILITY.*
```

- ARIA labels, screen reader text, keyboard shortcuts

### **✨ Animations**

```typescript
HEADER_ANIMATIONS.*
```

- Transition classes, transform animations

---

## 🎯 **Quick Reference Guide**

### **Need to change the logo?**

```typescript
HEADER_BRANDING.LOGO_IMAGE_PATH = '/new-logo.png';
```

### **Update phone number?**

```typescript
HEADER_CONTACT.PHONE.DISPLAY_TEXT = '+1 234 567 8900';
HEADER_CONTACT.PHONE.PHONE_NUMBER = '+12345678900';
```

### **Add new menu item?**

```typescript
HEADER_NAVIGATION_ITEMS.push({
	label: 'New Page',
	href: '/new-page'
});
```

### **Change button text?**

```typescript
HEADER_CTA_BUTTON.TEXT = 'Book Now';
```

### **Update social media?**

```typescript
HEADER_SOCIAL_MEDIA[0].URL = 'https://facebook.com/newpage';
```

---

## 💡 **Usage Examples**

### **In Components:**

```svelte
<script>
	import { HEADER_BRANDING, HEADER_CONTACT } from '$lib/constants/headerConstants';
</script>

<!-- Logo -->
<img
	src={HEADER_BRANDING.LOGO_IMAGE_PATH}
	alt={HEADER_BRANDING.LOGO_ALT_TEXT}
	class={HEADER_BRANDING.LOGO_HEIGHT_DESKTOP}
/>

<!-- Contact Link -->
<a href="tel:{HEADER_CONTACT.PHONE.PHONE_NUMBER}">
	{HEADER_CONTACT.PHONE.DISPLAY_TEXT}
</a>
```

---

## 🚨 **Important Rules**

### **✅ DO THIS:**

- Import only what you need
- Use descriptive constant names
- Follow the naming pattern: `HEADER_SECTION_ITEM`

### **❌ NEVER DO THIS:**

- Don't hardcode values in components
- Don't create duplicate constants elsewhere
- Don't skip the constants file for header-related data

---

## 🔍 **Finding What You Need**

### **Search by Purpose:**

- **Branding stuff?** → `HEADER_BRANDING.*`
- **Contact details?** → `HEADER_CONTACT.*`
- **Menu items?** → `HEADER_NAVIGATION_ITEMS[]*`
- **Button text?** → `HEADER_CTA_BUTTON.*`
- **CSS classes?** → `HEADER_STYLES.*`

### **Search by Component:**

- **Logo** → `HEADER_BRANDING`
- **TopBar** → `HEADER_CONTACT` + `HEADER_SOCIAL_MEDIA`
- **Navigation** → `HEADER_NAVIGATION_ITEMS` + `HEADER_CTA_BUTTON`
- **Dropdowns** → `HEADER_DROPDOWN_WIDTHS`
- **Mobile Menu** → `HEADER_STYLES.MOBILE_*`

---

## 📦 **File Structure**

```
src/lib/constants/
├── headerConstants.ts          # 🎯 MAIN FILE - Everything is here!
├── headerConstants.examples.ts # 📚 Usage examples and patterns
└── README.md                   # 📖 This documentation
```

---

## 🎉 **Benefits**

✅ **Easy to find** - Everything in one place  
✅ **Easy to update** - Change once, updates everywhere  
✅ **Easy to understand** - Clear, descriptive names  
✅ **Easy to maintain** - No more hunting through files  
✅ **Type safe** - TypeScript keeps you safe  
✅ **Future proof** - Add new constants easily

**🔥 Never waste time looking for constants again!**

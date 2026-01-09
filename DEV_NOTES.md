# Portfolio Hero & Theme Improvements - Dev Notes

## Summary
This update significantly improves the hero section and adds a robust dark/light theme toggle system with CSS variables, Lucide icons throughout, and enhanced accessibility.

## New Files Created

### `src/hooks/useTheme.ts`
- Custom React hook for theme management
- Handles localStorage persistence
- Respects `prefers-color-scheme` on first visit
- Returns `{ theme, toggleTheme, isDark }`

## Modified Files

### `src/index.css`
- Added CSS variables for theming: `--bg`, `--surface`, `--text`, `--text-muted`, `--accent`, `--accent-hover`, `--muted`, `--card-border`, `--card-bg`
- Added smooth 400ms transitions for theme changes
- Respects `prefers-reduced-motion` for accessibility
- Updated body to use CSS variables instead of hardcoded colors

### `src/pages/Home/components/Hero/index.tsx`
- Complete redesign with:
  - Animated circular avatar with halo effect (pulses continuously)
  - Avatar tilt on hover using 3D transforms
  - New headline and subheading copy
  - Three credibility chips
  - Two CTAs: "Download Resume" (links to `/Profile.pdf`) and "Contact me" (mailto)
  - Social links with Lucide icons (GitHub, LinkedIn)
  - Featured project card
  - Scroll hint with animated chevron
  - Glassmorphism card in light mode (conditional rendering)
- All icons replaced with Lucide React components
- Fully accessible with focus states and ARIA labels

### `src/pages/Home/components/Hero/data.json`
- Updated structure with new fields: `headline`, `subheading`, `credibility`
- Social links now include icon names

### `src/layouts/Website/Header/index.tsx`
- Made header visible (removed `hidden` class)
- Added theme toggle button with:
  - Lucide Sun/Moon icons that rotate and scale on toggle
  - Full accessibility: `role="button"`, `tabIndex={0}`, `aria-pressed`, `aria-label`
  - Keyboard support (Enter/Space)
  - Visible focus ring
  - Animated icon transitions (rotate + scale)

### `src/layouts/Website/Footer/index.tsx`
- Replaced Iconify icon with Lucide `Heart` icon
- Updated to use CSS variables for colors
- Improved hover states

### `src/pages/Home/components/Skills/index.tsx`
- Already used Lucide icons (no change needed for icons)
- Updated to use CSS variables for theming
- Enhanced hover and focus states

### `src/pages/Home/components/Experiences/components/Card.tsx`
- Updated all color classes to use CSS variables
- Improved accessibility with focus states

### `src/layouts/Website/index.tsx`
- Updated background to work with CSS variables

## Removed
- No certificates section found in the codebase (was already removed or never existed)

## How to Test

### Theme Toggle
1. Click the theme toggle button in the header (Sun/Moon icon)
2. Verify theme switches smoothly between dark and light
3. Refresh page - theme preference should persist
4. Test keyboard navigation: Tab to button, press Enter or Space
5. Check that focus ring is visible
6. Open DevTools → Application → Local Storage → verify `theme` key is saved

### Reset Theme
- Clear localStorage: `localStorage.removeItem('theme')` in console
- Refresh page - should respect system preference

### Change Accent Color
- Edit `src/hooks/useTheme.ts`:
  - Dark mode accent: Line 41 - `--accent` property
  - Light mode accent: Line 31 - `--accent` property
- All components using `var(--accent)` will automatically update

### Accessibility
- Test with keyboard only (Tab navigation)
- Check focus indicators on all interactive elements
- Verify contrast ratios meet WCAG AA standards
- Test with screen reader (theme button should announce state)

### Animations
- Hover over avatar - should tilt with 3D perspective
- Hover over buttons - should scale/change color smoothly
- Verify scroll hint bounces continuously
- Check that animations respect `prefers-reduced-motion`:
  - System Settings → Accessibility → Display → Reduce Motion
  - Animations should be minimal/disabled

### Hero Section
- Verify avatar halo pulses continuously
- Test all CTAs:
  - "Download Resume" should download `Profile.pdf` (file must exist in `public/` folder)
  - "Contact me" should open mailto link
- Check social icons are clickable and have hover states
- Verify responsive behavior on mobile (avatar size clamps)

## Important Notes

1. **Profile.pdf**: The resume download links to `/Profile.pdf`. Make sure this file exists in the `public/` folder, or update the href in `Hero/index.tsx` line 127.

2. **Theme Variables**: All color customization should be done in `src/hooks/useTheme.ts` - modify the CSS variable values there.

3. **Icon Requirements**: All icons are now from `lucide-react`. Do not use static PNG/SVG assets or `@iconify/react` for new features.

4. **CSS Variables**: The theme system relies entirely on CSS variables. When adding new components, use `var(--variable-name)` instead of hardcoded colors or Tailwind color classes.

## Commit Message
```
feat: redesign hero section with theme toggle and Lucide icons

- Add robust dark/light theme system with localStorage persistence
- Redesign hero with animated avatar, credibility chips, and CTAs
- Replace all icons with Lucide React components
- Add theme toggle button with accessibility features
- Implement glassmorphism card for light mode
- Add featured project card and scroll hint
- Update all components to use CSS variables for theming
- Ensure keyboard accessibility and focus states throughout
```

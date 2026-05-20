# GRO Barbershop Landing Page

A premium, editorial-grade landing page for GRO (Gunting Rambut Orang) Barbershop in Perlis, Malaysia. Reengineered to evoke the visual sophistication of premium grooming brands like Forte Series, utilizing massive whitespace, high-contrast typography, and a quiet luxury aesthetic.

## Tech Stack
- React 18 + Vite
- Tailwind CSS v4
- Framer Motion (for subtle, editorial reveal animations)
- Lucide React (for minimalist vector icons)
- shadcn/ui principles (Clean, unopinionated structure)

## Running the App

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization Guide

### Swapping Images
All imagery is handled in `/src/App.tsx`. 
Look for standard `img` tags with `src` attributes pointing to Unsplash placeholders. Replace these with actual high-resolution GRO photos:
- **Hero Image:** First image in `Hero` component (approx line 73). Recommended: A clean, wide-angle shot of the shop interior or a premium portfolio shot.
- **Story Image:** Image in the `About` component (approx line 105). Recommended: A vertical editorial shot of a barber in action or barber tools.
- **Service Images:** Three images in the `Services` component. Update for Haircut, Perm, and Shop.
- **Instagram Feed:** Four square thumbnails in the `Testimonials` component (approx line 231). 

*Tip: For the Forte Series aesthetic, ensure uploaded images are bright, sharp, well-lit, and favor neutral or warm tones.*

### Content & Pricing
Content is directly editable in `/src/App.tsx`:
- Update service prices in the `Services` component if promo rates change.
- WhatsApp number is centrally configured at the top of `/src/App.tsx` (`WA_NUMBER`). Updating this one variable will update all links and buttons across the entire website.

### Theme Colors
Color variables are stored in `/src/index.css` via the Tailwind v4 `@theme` block. 
You can fine-tune the ivories, off-whites, and charcoals to match specific brand guidelines.

Enjoy your new premium storefront!

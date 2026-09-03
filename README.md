# GRO Barbershop

A responsive website for **GRO (Gunting Rambut Orang)** in Perlis, Malaysia. The site brings services, branch locations, and barber contact options into one place, with direct WhatsApp booking links.

[View the live website](https://gro-phi.vercel.app/)

## What the project demonstrates

- Service cards with pricing and WhatsApp enquiry links
- Branch and barber listings with individual booking links
- Location information, map links, and an embedded map
- Responsive navigation and layouts for desktop and mobile
- Animated text and section transitions
- A consistent black-and-white visual identity

Booking buttons open WhatsApp with a prepared message. This frontend does not store appointments or implement a booking backend.

## Technology

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 4
- Motion for React
- Lucide React icons

## Run locally

Use Node.js 22 and npm.

```bash
git clone https://github.com/rayyan-farhad/gro-barbershop.git
cd gro-barbershop
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The current website does not require an API key. The Gemini and app URL variables in `.env.example` are inherited from the original AI Studio template and are not needed for the frontend shown here.

## Check and build

```bash
npm run lint
npm run build
npm run preview
```

`npm run lint` runs the TypeScript compiler with `--noEmit`. The production build is written to `dist/`. There is currently no automated test script.

## Project structure

- `src/App.tsx` — page sections, services, branches, barber listings, and booking links
- `src/components/BlurText.tsx` — animated heading component
- `src/index.css` — typography and theme styles
- `src/logo.ts` and `public/gro-logo.jpg` — logo assets
- `vite.config.ts` — React and Tailwind build configuration

## Updating the content

Edit service descriptions and prices in `src/App.tsx`. The general booking link uses `WA_NUMBER`; each barber's booking link uses the phone number in that barber's listing.

Update imagery in the relevant page sections. Current stock photography comes from Unsplash; replace it with approved shop photography when available. Review branch details, pricing, promotional copy, and contact information before using the site for a live business.

## Project context

This repository presents frontend implementation and interface work. GRO branding belongs to its respective owner; the project does not claim ownership of third-party imagery or brand assets.

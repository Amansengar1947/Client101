# Clinet-1 | Luxury Modern Architecture

A premium, production-ready frontend web application built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for a luxury architectural firm, featuring a pixel-perfect responsive layout, smooth micro-interactions, and a modular component architecture.

---

## 📖 Table of Contents

1. [Features](#-features)
2. [Folder Explanation](#-folder-explanation)
3. [Environment Variables](#-environment-variables)
4. [Installation Guide](#-installation-guide)
5. [Deployment Guide](#-deployment-guide)
6. [Component Documentation](#-component-documentation)
7. [Customization Guide](#-customization-guide)
8. [Future Maintenance Notes](#-future-maintenance-notes)

---

## ✨ Features

- **Next.js 15 App Router**: Server components by default with code-splitting.
- **Framer Motion**: Buttery smooth scroll animations and micro-interactions.
- **Tailwind CSS**: Utility-first, highly responsive, and pixel-perfect styling.
- **Fully Accessible (a11y)**: Semantic HTML, ARIA attributes, and touch-optimized interactive elements.
- **SEO Optimized**: Dynamic metadata, Open Graph tags, canonical URLs, robots/sitemap generation, and Schema.org JSON-LD structured data.
- **Performance**: Heavy sections are lazy-loaded. Images use `next/image` with optimized `sizes` attributes for Core Web Vitals (LCP).

---

## 📁 Folder Explanation

The project strictly follows a modular, scalable structure:

```text
clinet-1/
├── app/                  # Next.js App Router core (Pages, Layout, SEO files)
│   ├── layout.tsx        # Global HTML wrapper, Navbar, and Footer injection
│   ├── page.tsx          # Main landing page (lazy loads heavy sections)
│   ├── robots.ts         # Dynamically generates robots.txt
│   └── sitemap.ts        # Dynamically generates sitemap.xml
├── components/           # Reusable UI architecture
│   ├── layout/           # Macro layouts (Navbar, Footer, Container)
│   ├── sections/         # Page sections (Hero, OurApproach, ContactCTA, etc.)
│   └── ui/               # Micro components (Button, Card, AnimatedCounter, etc.)
├── lib/                  # Utilities and Configuration
│   ├── metadata.ts       # Global SEO / Site Metadata configurations
│   └── utils.ts          # Tailwind class merger (clsx + tailwind-merge)
├── public/               # Static assets
│   └── images/           # Compressed, high-res architectural imagery
└── styles/               # Global CSS styles
    └── globals.css       # Tailwind directives and CSS variables for the Design System
```

---

## 🔐 Environment Variables

The project uses `.env.local` to manage environment configurations. 
Create a `.env.local` file in the root directory with the following variables:

```env
# The absolute URL of the production deployment (Used for SEO/OpenGraph Canonical links)
NEXT_PUBLIC_SITE_URL="https://clinet-1.com"
```

*(Note: In Vercel, this is often handled automatically, but it is recommended to set this explicitly in production).*

---

## 🚀 Installation Guide

### Prerequisites
- **Node.js**: Version 18.17.0 or higher.
- **npm** (or yarn/pnpm)

### Steps

1. **Clone or unzip the repository** to your local machine.
2. **Navigate to the project folder**:
   ```bash
   cd clinet-1
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the local development server**:
   ```bash
   npm run dev
   ```
5. **View the application**: Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deployment Guide

The application is highly optimized for deployment on **Vercel** (the creators of Next.js), but can be hosted on any platform that supports Node.js.

### Deploying via Vercel (Recommended)
1. Push the codebase to a GitHub/GitLab/Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository.
4. Set the Framework Preset to **Next.js**.
5. In the **Environment Variables** section, add `NEXT_PUBLIC_SITE_URL` pointing to your domain.
6. Click **Deploy**.

### Manual Node Server Deployment
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```

---

## 🧩 Component Documentation

The codebase utilizes the **React Compound Component** pattern. UI elements are highly reusable.

### Core UI Components (`components/ui/`)
- **`<Button />`**: Utilizes `class-variance-authority` (cva) for managing variants (e.g., `default`, `outline`, `ghost`) and sizes.
- **`<Card />`**: A compound component (`Card`, `CardHeader`, `CardContent`) to easily structure boxed content.
- **`<AnimatedCounter />`**: Uses Framer Motion's `useSpring` and `useInView` to visually count up to a specified number when scrolled into view.
- **`<Timeline />`**: Renders a vertical/horizontal timeline step. Built to cleanly adapt from mobile to desktop.
- **`<DarkOverlay />`**: A simple semantic utility to darken background images, ensuring text legibility.

### Macro Layout Components (`components/layout/`)
- **`<Container />`**: A global maximum-width wrapper that ensures consistent padding (`px-4 sm:px-6 lg:px-8`) preventing content from hitting screen edges on ultra-widescreen monitors.

---

## 🎨 Customization Guide

### Modifying the Design System (Colors & Spacing)
The entire aesthetic is controlled via CSS variables in `styles/globals.css`. To change the brand colors, modify the HSL values:

```css
:root {
  --background: 0 0% 100%;       /* Pure White */
  --foreground: 222.2 84% 4.9%;  /* Very Dark Blue/Black */
  --primary: 222.2 47.4% 11.2%;  /* Dark Brand Color */
  --accent: 217 91% 60%;         /* Highlight / CTA Color (Blue) */
  /* ... */
}
```

### Modifying Content
To change the text or images on the landing page, navigate to `app/page.tsx` and open the specific section under `components/sections/`. The data (like Timeline Steps or Statistics) is typically stored in a constant array at the top of the component file for easy editing.

### Updating SEO Metadata
Open `lib/metadata.ts` to adjust global titles, descriptions, and Open Graph share images.

---

## 🛠 Future Maintenance Notes

1. **Dependency Updates**: Periodically run `npm update` to keep Next.js, React, and Framer Motion updated for security and performance enhancements.
2. **Adding New Pages**: 
   - Create a new folder in the `app/` directory (e.g., `app/portfolio/`).
   - Create a `page.tsx` file inside that folder.
   - The global Navbar and Footer will automatically wrap the new page.
3. **Image Management**: Always use the `<Image>` component from `components/ui/Image` or `next/image`. Place all raw images in `public/images/`. Next.js will automatically compress them to `.webp` at runtime.

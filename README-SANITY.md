# Sanity CMS Integration — Harmony Yoga Center

This document provides complete instructions for managing content, understanding the architecture, and running Sanity Studio for the Harmony Yoga Center website.

---

## 🚀 Overview

Sanity CMS is integrated into Harmony Yoga Center as a lightweight, headless Content Management System. It allows non-technical administrators and studio staff to edit core content dynamically without altering website layout or code.

---

## 📁 Architecture & File Structure

```text
├── sanity.config.ts           # Sanity Studio configuration (Project ID, Dataset, Studio route)
├── sanity.cli.ts              # Sanity CLI configuration
├── sanity/
│   └── schemas/               # Sanity content type schemas
│       ├── index.ts           # Schema registry
│       ├── siteSettings.ts    # Global contact, brand info, social links
│       ├── heroSection.ts     # Hero titles, statistics, badges, CTAs
│       ├── aboutSection.ts    # Founder S. Veeranjaneyulu details, biography, stats
│       ├── program.ts         # Yoga tracks, durations, bullet points, categories
│       ├── testimonial.ts     # Client transformation reviews & ratings
│       └── contactSettings.ts # Address, email, phone, operating hours
├── src/
│   └── sanity/
│       ├── client.ts          # @sanity/client configuration & urlFor image helper
│       ├── queries.ts         # Reusable GROQ queries
│       ├── types.ts           # TypeScript interfaces for Sanity documents
│       ├── defaultData.ts     # Fallback data when Sanity is unconfigured
│       └── useSanity.ts       # Custom React hooks (useSiteSettings, useHeroData, etc.)
└── scripts/
    └── seed-sanity.js         # Seeding script to initialize Sanity dataset with content
```

---

## ⚙️ Environment Variables Setup

To link the application to your Sanity project:

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy your **Project ID** and dataset name (e.g., `production`).
3. Set the environment variables in `.env`:

```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-03-01
VITE_SANITY_STUDIO_PATH=/secure-control-panel-7f8a92
```

*(Note: If environment variables are omitted or invalid, the app automatically falls back gracefully to local default data in `src/sanity/defaultData.ts`.)*

---

## 🛠️ Running Sanity Studio & Native Authentication

Sanity Studio is embedded directly into the application at the custom private path configured via `VITE_SANITY_STUDIO_PATH` (default: `/secure-control-panel-7f8a92`).

- Native authentication is managed entirely by Sanity (Google, GitHub, Email, Sanity Account).
- Unauthenticated users opening the custom studio path will see Sanity's native login UI directly inside the Studio.

To run the Sanity CLI studio standalone locally:
```bash
npx sanity dev
```

To seed initial default content into your Sanity project:
```bash
npm run seed
```

---

## 📑 Content Schema Overview

| Document Name | Schema ID | Scope & Editable Fields |
|---|---|---|
| **Site Settings** | `siteSettings` | Studio title, tagline, main phone, email, WhatsApp, Instagram/Facebook links |
| **Hero Section** | `heroSection` | Main title, subtitle, description, CTA buttons, statistics counters, trust rating badge |
| **About / Founder** | `aboutSection` | Founder name (*S. Veeranjaneyulu*), designation (*Yoga Therapist*), degree title, bio paragraphs, founder photo, quote |
| **Programs** | `program` | Program title, ID slug, timeframe, duration, bullet points list, category, featured image |
| **Testimonials** | `testimonial` | Client name, age, result achieved (e.g. *8.2 Kg*), rating (1-5), quote text, program category |
| **Contact Settings** | `contactSettings` | Studio physical address, phone numbers, email addresses, WhatsApp numbers |

---

## 🔄 Graceful Fallback System

The custom React hooks in `src/sanity/useSanity.ts` automatically verify whether Sanity is configured:
- If configured and reachable, data is fetched live using GROQ queries.
- If Sanity credentials are missing or network requests fail, the hooks instantly return default fallback values from `src/sanity/defaultData.ts`.
- This ensures 100% uptime and zero page breaking under any environment condition.

---

## 👩‍💻 Content Editor Instructions

1. Access Sanity Studio at [sanity.io/manage](https://www.sanity.io/manage), your deployed studio URL, or your custom internal studio route (`/secure-control-panel-7f8a92`).
2. Log in using your Sanity account credentials (Google, GitHub, or Email).
3. Select the document type you wish to update (e.g. **About Section** or **Programs**).
4. Update text, upload new images, or reorder list items.
5. Click **Publish**.
6. The website will reflect published changes automatically on the next page refresh or fetch.

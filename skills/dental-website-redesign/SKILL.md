# Apple-Style Website Redesign Skill

> Reusable workflow for redesigning any existing business website into a premium Apple-inspired Next.js 14 site.
> Built from the ground-up redesign of Palo Alto Advanced Dentists (2026).

**Usage:** `/apple-redesign https://www.oldwebsite.com`

---

## Phase 1 — Recon: Scrape the old site

Use WebFetch on the provided URL and key subpages to extract:
- Business name, tagline, address, phone, hours
- All services / products offered (names, descriptions, pricing if shown)
- Team members (names, titles, credentials, bios, photo URLs)
- Testimonials / reviews (quote text, reviewer name, star rating)
- Any unique selling points, awards, certifications, or specialties
- Languages spoken or special accommodations
- Social media links

Scrape these paths if they exist: `/about`, `/services`, `/team`, `/contact`, `/faq`, `/reviews`, `/blog`

---

## Phase 2 — Project Setup

```bash
npx create-next-app@latest [business-slug] --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd [business-slug]
npm install framer-motion lucide-react
```

---

## Phase 3 — Design System

### tailwind.config.ts
```ts
colors: {
  navy: {
    950: '#000000',   // pure black
    900: '#1D1D1F',   // Apple dark gray
    800: '#2D2D2F',
    700: '#424245',
  },
  gold: {
    600: '#B88D2C',
    500: '#D4A843',
    400: '#E8C060',
    200: '#F5E4B0',
  },
  cream: {
    50:  '#FAFAF8',
    100: '#F5F5F7',   // Apple off-white
    300: '#E8E8ED',
  },
}
```

### globals.css additions
```css
/* Typography */
body { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif; }
.headline-display  { font-weight: 800; letter-spacing: -0.04em; line-height: 1.05; }
.headline-section  { font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
.section-label     { font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #B88D2C; }

/* Buttons */
.btn-gold {
  display: inline-flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #D4A843, #B88D2C);
  color: #000; font-weight: 700; border-radius: 980px;
  padding: 0.625rem 1.5rem; transition: opacity 0.2s;
}
.btn-gold:hover { opacity: 0.88; }

/* Tiles */
.tile-dark { background: #1D1D1F; border-radius: 1.25rem; }
.tile-gold { background: linear-gradient(135deg, #D4A843, #B88D2C); border-radius: 1.25rem; }

/* Hero background */
.hero-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

---

## Phase 4 — Core Components

### components/Navbar.tsx
- Fixed, transparent → frosted black on scroll (`rgba(0,0,0,0.92)` + `backdrop-filter: blur(20px)`)
- Height: 80px desktop / 64px mobile
- 3-column grid: [Logo + Business Name in gold] [Nav links centered] [Phone + Book Now CTA]
- Business name in gold bold text next to logo
- Mobile: hamburger → full-screen dark drawer with large tap targets

### components/Footer.tsx
- Dark navy background (`bg-navy-950`)
- 4 columns: Brand/description | Services list | Practice links | Contact info
- Gold star row for awards/ratings
- Bottom bar: copyright + legal links
- Disclaimer paragraph in very muted text
- "Website designed by [designer name]" credit

### components/FloatingContact.tsx
- Always-visible 3 stacked circular buttons, bottom-right corner
- Phone (gold) → `tel:` link
- WhatsApp (green) → `wa.me/` link
- WeChat/LINE/other (green) → modal with ID + copy button
- No toggle needed — always visible

### components/animations.tsx
```tsx
// FadeUp — scroll-triggered fade + translate
// ScaleReveal — scale from 0.92 to 1
// WordReveal — word-by-word stagger
// All use useInView({ once: true, margin: '-60px' })
```

---

## Phase 5 — Pages

### app/page.tsx — Home (7 sections)

**HeroSection**
- Full-viewport, pure black, hero-grid background
- `useScroll` + `useTransform` parallax on headline
- Huge serif headline (clamp 4rem–8rem), gold italic accent word
- Subheadline in muted white, 2 CTA buttons (Book Now + Learn More)
- Radial gold glow top-right corner

**StatsBand**
- 3–4 key stats (years in business, patients served, rating, awards)
- Dark navy background, gold numbers

**PinnedDifference** (300vh sticky scroll)
- Sticky container, 3 panels that cross-fade on scroll
- Each panel: icon + headline + body text explaining a differentiator
- Uses `useScroll` with `scrollYProgress` mapped to opacity/scale per panel

**ServicesPreview** (bento grid)
- `#F5F5F7` background
- CSS grid with mixed `lg:col-span-2` hero tiles
- Dark tiles (navy) + light tiles (white) alternating
- Each tile: tag label (section-label style) + title + short description

**TechHighlight / FeatureHighlight**
- Dark section showcasing key technology or unique approach
- 3 horizontal cards with icons

**TeamSpotlight**
- Lead person featured prominently
- Grid of team members below with photo + name + title + credentials
- `next/image` with gradient overlay at bottom for name

**Testimonials**
- White cards on `#F5F5F7` background
- 5 gold stars, quote text, reviewer name
- 3–4 testimonials in a responsive grid

**LanguagesBand** (if multilingual)
- Dark band listing all languages spoken

**FinalCTA**
- Dark section, gold accent
- Strong headline + Book Now button + phone number

### app/services/page.tsx
- Hero (black, grid bg, gold glow)
- Full detail cards per service: icon, tag, title, headline, description, 6 benefits, note
- Order: most unique/signature procedure first

### app/doctors/page.tsx (or /team)
- Hero section
- Lead person featured large with credentials
- Grid of all team members: photo with gradient overlay, name, title, school, languages

### app/patients/page.tsx (or /new-patients)
- Insurance info, what to expect, forms download, FAQ accordion

### app/practice/page.tsx (or /about)
- Technology showcase, history, awards and certifications

### app/contact/page.tsx
- Two-column: form + sidebar
- Form fields: First Name, Last Name, Email, Phone, Current Patient (radio),
  How Did You Hear (select), Service (select), Preferred Day (select),
  Preferred Time (select), Message (textarea)
- Sidebar: address, phone, hours, map placeholder, emergency notice
- Wire to Formspree endpoint

---

## Phase 6 — SEO & AI Optimization

### app/layout.tsx
- `metadataBase` set to production URL
- Full metadata: title template, description, keywords, authors, robots
- Open Graph + Twitter Card
- JSON-LD `<script>` with `LocalBusiness` schema:
  name, url, telephone, address, geo, openingHoursSpecification,
  availableService, founder, aggregateRating, areaServed

### Per-route layout.tsx files
Required because pages use `'use client'` — metadata can only export from Server Components:
```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page-specific description',
  alternates: { canonical: 'https://domain.com/route' },
  openGraph: { ... }
}
export default function Layout({ children }) { return <>{children}</> }
```

### app/sitemap.ts — auto XML sitemap for all routes
### app/robots.ts — allow all, point to sitemap

### public/llms.txt — for AI crawlers (Perplexity, ChatGPT, Claude)
```
# Business Name
> Address | Phone | Hours

## About
[2–3 paragraph summary]

## Team
[Each person: name, title, credentials, languages]

## Services
[Bullet list with brief descriptions]

## FAQ
[5–8 Q&A pairs]
```

---

## Phase 7 — Form Integration (Formspree)

1. Create form at formspree.io → point to client email
2. Wire `handleSubmit`:
```tsx
const res = await fetch('https://formspree.io/f/[ID]', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({ 'Field Label': value, ... }),
})
setFormState(res.ok ? 'success' : 'error')
```
3. Add error state with fallback phone number
4. Remind client to verify email in Formspree on first submission

---

## Phase 8 — Deployment

```bash
git init && git add . && git commit -m "Initial Apple-style redesign of [Business Name]"
gh repo create [slug] --public --push --source=.
```

Vercel:
1. Import repo → auto-detect Next.js → Deploy
2. Settings → Domains → add custom domain
3. DNS: A record `@` → Vercel IP shown in dashboard, CNAME `www` → Vercel CNAME value
4. Wait for "Valid Configuration" blue checkmarks

Google Search Console:
1. Add property as URL-prefix: `https://www.domain.com`
2. Verify via HTML meta tag (add to layout.tsx `verification.google`)
3. Submit sitemap: `sitemap.xml`

---

## Design Rules

| Rule | Value |
|------|-------|
| Hero background | `#000000` + `.hero-grid` class |
| Gold accent | `#D4A843` active, `#B88D2C` hover |
| Content bg | `#F5F5F7` (Apple off-white) |
| Cards | `bg-white border border-cream-300 rounded-3xl shadow-sm` |
| Font | Apple system stack, tight letter-spacing on headings |
| Animations | Scroll-triggered `useInView` only — no autoplay |
| Mobile | 375px minimum, tap targets ≥ 44px |
| Images | Always `next/image` with `fill` |
| Spacing | `section-py` + `max-w-7xl mx-auto px-6` |
| Comments | Only when WHY is non-obvious |

---

## Deliverable Checklist

- [ ] All content scraped and rewritten in Apple tone (confident, minimal, benefit-first)
- [ ] 6 routes built and returning 200 OK
- [ ] Navbar: gold business name, centered links, mobile drawer
- [ ] Floating contact widget (phone + messaging apps)
- [ ] Services ordered with most unique procedure first
- [ ] Team photos with gradient overlays
- [ ] Testimonials from real reviews
- [ ] JSON-LD structured data
- [ ] Per-route metadata + canonical URLs
- [ ] sitemap.xml + robots.txt + llms.txt
- [ ] Contact form wired to real email via Formspree
- [ ] Deployed to Vercel with custom domain
- [ ] Google Search Console sitemap submitted

---

## Reference Implementation

This skill was built from: **Palo Alto Advanced Dentists** (2026)
Repo: `github.com/meganho456/paad-website`
Live: `https://www.paloaltoadvanceddentists.com`

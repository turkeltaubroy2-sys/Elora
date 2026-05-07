# ELORA — Aesthetics + Spa

Marketing website for ELORA, a private aesthetics atelier. Built with
**Vite + React 18** and configured for one-click deployment to **Vercel**.

---

## Project structure

```
.
├── index.html              # Vite entry — loads /src/main.jsx
├── package.json
├── vite.config.js          # base: '/', plugin-react
├── vercel.json             # SPA rewrites (every route → /index.html)
├── .gitignore
├── README.md
├── public/                 # served as-is at the site root
│   ├── elora-logo.svg      # favicon + brand mark
│   ├── image-slot.js       # <image-slot> web component
│   └── img/                # local brand photography (12 files)
│       ├── brand-plant.jpg
│       ├── brand-products.jpg
│       ├── brand-reception.jpg
│       ├── brand-sofa.jpg
│       ├── cover.jpg
│       ├── mock-bath.jpg
│       ├── mock-bed.jpg
│       ├── mock-shelf.jpg
│       ├── mock-spa.jpg
│       ├── spa-lounge.jpg
│       ├── spa-reception.jpg
│       └── storefront.jpg
└── src/
    ├── main.jsx            # ReactDOM root
    ├── App.jsx             # composes the page sections
    ├── styles.css          # global stylesheet
    ├── tweaks-panel.css    # design-tweaks overlay styles
    ├── scripts.js          # initScripts() — runs imperative DOM behaviour
    └── sections/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx     # exports Marquee + Storefront
        ├── Services.jsx
        ├── Gallery.jsx
        ├── About.jsx
        ├── Process.jsx
        ├── Testimonials.jsx
        ├── FAQ.jsx
        ├── CTA.jsx
        ├── Footer.jsx
        └── TweaksPanel.jsx
```

---

## Run locally

```bash
# 1 — install dependencies
npm install

# 2 — start the dev server (http://localhost:5173)
npm run dev

# 3 — production build (outputs to ./dist)
npm run build

# 4 — preview the production build locally
npm run preview
```

Requires Node **18.17+** (Node 20 LTS recommended).

---

## Push to GitHub

```bash
# from the project root
git init
git add .
git commit -m "Initial commit — ELORA site"

git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

---

## Deploy to Vercel

### Option A — via the Vercel dashboard (recommended)

1. Open <https://vercel.com/new> and **Import** the GitHub repo.
2. Vercel auto-detects Vite. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
3. Click **Deploy**. The site is live in ~60 s on a `*.vercel.app` URL.
4. Add a custom domain from **Project → Settings → Domains** if needed.

### Option B — via the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel            # first run — links the project + deploys a preview
vercel --prod     # promote to production
```

### Why no 404s on refresh

`vercel.json` rewrites every request to `/index.html`, so deep-link
refreshes and `#section` anchors resolve correctly:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Static asset requests (`/assets/*.js`, `/img/*.jpg`, `/elora-logo.svg`,
`/image-slot.js`) are matched by Vercel's static handler **before** the
rewrite, so they keep their real content-type and cache headers.

---

## Notes

- All hero/gallery imagery is loaded from Unsplash (absolute URLs); the
  local `public/img/` folder ships brand photography you can swap in.
- The in-page **Tweaks** panel is gated by a `postMessage` handshake
  with a host iframe — on a public Vercel deployment it stays hidden,
  which is the intended behaviour.
- `scripts.js` exposes `initScripts()` returning a teardown function so
  React's StrictMode double-invoke doesn't leak listeners in dev.

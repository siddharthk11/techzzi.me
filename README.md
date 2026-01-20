# Techzzi Website (techzzi.me)

Modern, fast, and SEO-friendly static site for Techzzi — Global Cloud Support & Infrastructure Automation Experts.

## Structure
- `index.html` — Home
- `services.html` — Services with Azure, AWS, IaC
- `technologies.html` — Technology stack
- `why-techzzi.html` — Differentiators
- `case-studies.html` — Real-world examples
- `blog.html` — Insights (placeholders)
- `contact.html` — Contact & Support with priority levels, WhatsApp, and Live Chat
- `assets/css/styles.css` — Responsive styles
- `assets/js/main.js` — Interactivity, chat, forms
- `assets/img/` — SVG logos & icons
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`

## Local preview
Open `index.html` in a browser. For routing (404), use a static server (e.g. `python -m http.server`).

## Deploy
- **GitHub Pages**: push to `<repo>/docs` or `main` with Pages enabled, set root. Add `404.html`.
- **Azure Static Web Apps**: create SWA, choose this folder as app artifact. Optional: add API for forms (Azure Functions).
- **AWS S3 + CloudFront**: upload files to an S3 static website bucket, enable CloudFront, set `index.html` and `404.html`.

## Forms & Chat
The forms and live chat are front-end only. Connect them to your backend:
- Azure Functions / AWS Lambda HTTP endpoint.
- Add `fetch('/api/contact', ...)` in `main.js`.
- Or integrate with providers (e.g., Microsoft Forms, HubSpot, Freshdesk, Zendesk).

## Customization
- Update links in footer (LinkedIn, GitHub).
- Adjust colors in `:root` of CSS.
- Replace SVG placeholders with brand-approved assets if needed.

© Techzzi

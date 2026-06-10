# Sé Música — Marketing site UI kit

A pixel-fidelity recreation of what Sé Música's institutional marketing site **could look like**, built directly from the brand book's visual language (blue/green dual palette, asymmetric arc cuts, white-logo-on-color hero, Akzidenz-Grotesk Extended display treatment) plus the company's mission statement and service description.

## ⚠️ Provenance note
The user did **not** provide a real codebase, Figma, or screenshots of an existing Sé Música product. This kit is an *inferred* marketing site composed strictly from:

- the brand book PDF (`assets/BRANDBOOK_SEMUSICA.pdf`) — colors, type, logo, asymmetric "gráfica con fotografía" / "gráfica con fondos planos" patterns
- the company description (e-learning, virtualización de cursos, aulas virtuales, capacitación corporativa)
- the corporate data in the brand book papelería samples (Lima/Perú, info@semusica.com, +51 999 410 732)

**This is not a copy of an existing product** — it's a brand-faithful direction for what one could be. The visual choices stay strictly inside the brand book's prescriptions.

## What's in here
- `index.html` — single-file demo. Open it to see the assembled homepage.
- `Header.jsx` — top nav, logo, primary CTA.
- `Hero.jsx` — the brand-book "gráfica con fotografía" treatment: solid-color block with curved diagonal edge, white logo, headline, photo on the right.
- `ServiceCard.jsx` — the 4 service tiles (aulas virtuales, virtualización, capacitación, acompañamiento).
- `StatStrip.jsx` — institutional credibility row ("14 años", "+200 instituciones").
- `CourseCard.jsx` — a course catalog card for the secondary section.
- `Testimonial.jsx` — quote-style testimonial that mirrors the brand book's quote application.
- `Footer.jsx` — solid-blue footer, white logo, contact data from the papelería.
- `Button.jsx`, `Field.jsx` — primitives.

## How to read this
The components are intentionally simple, mostly-cosmetic. They don't try to model real state or fetch data. Open `index.html` and you'll see the full assembled page; click around for hover/press states on the nav and CTAs.

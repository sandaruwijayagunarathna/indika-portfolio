# Indika Wijayagunarathna — Artist Portfolio

A clean, elegant, fine-art portfolio website for **Indika Wijayagunarathna**, an experienced artist based in **Veyangoda, Sri Lanka**.

Crafted for potential clients, art galleries, and art buyers interested in his original works or commissioning custom drawings.

---

## Portfolio Highlights

- **Focus on the Artwork**: A restrained, museum-like color palette (archival paper white, deep charcoal graphite, subtle warm umber tones) designed to let the drawings and paintings shine.
- **Welcoming Home Section**: Introduction to the artist and studio in Veyangoda, plus an interactive hero showcase of a featured work.
- **Organized Gallery**:
  - Filterable by **Pencil Portraits**, **Landscapes**, and **Watercolor Paintings** (plus **All Works**).
  - Artwork captions detailing **Title**, **Medium**, **Size/Dimensions**, and **Year** (with placeholders where information is missing).
  - Native `<dialog>` modal lightbox inspector with high-resolution view, specifications, keyboard navigation (Left/Right/Escape), and a direct "Inquire About This Piece" action.
- **About the Artist**: Featuring his official biography highlighting his thoughtful approach to drawing, background in the art industry, and dedication to crafting artwork with care and skill.
- **Commissions & Contact**:
  - Direct Phone: `0712930790` (One-click phone call & WhatsApp chat)
  - Direct Email: `indikawijaya74@gmail.com`
  - Interactive Commission Request Form: allows clients to specify commission type, dimensions, and vision, and send directly via email or WhatsApp.
- **Accessibility & Performance**:
  - Fully responsive across mobile smartphones, tablets, laptops, and wide desktop screens.
  - Semantic HTML5, accessible ARIA attributes, skip link, and keyboard navigation.
  - Zero heavy external JavaScript frameworks — ultra-fast loading vanilla JavaScript and CSS.
- **Simple to Update**: Artworks are cleanly stored in `js/artworks.js`. See [HOW_TO_UPDATE.md](HOW_TO_UPDATE.md) for full instructions.

---

## Project Structure

```text
indika's portfolio/
├── index.html              # Main webpage with all sections
├── HOW_TO_UPDATE.md        # Friendly guide for updating artworks and details
├── README.md               # Project documentation
├── css/
│   └── styles.css          # Restrained fine art styling, fonts, and responsive layout
├── js/
│   ├── artworks.js         # Centralized list of artworks (easy to edit)
│   └── main.js             # Filter controls, modal lightbox, and contact handling
└── images/
    ├── favicon.svg         # IW artist monogram
    ├── artist-portrait.svg # Studio illustration for About section
    └── artworks/           # Artwork image files (portraits, landscapes, watercolors)
```

---

## Contact Information
- **Artist**: Indika Wijayagunarathna
- **Location**: Veyangoda, Sri Lanka
- **Phone**: 0712930790
- **Email**: indikawijaya74@gmail.com

## Visual Design Prompt

Use this prompt when asking for future design changes to the portfolio:

> Keep the artwork as the focus of this clean, elegant artist portfolio. Use a warm off-white background (`#F7F4EF`), charcoal text (`#292725`), muted terracotta accents (`#A65F46`), and soft gray borders (`#D8D2CA`). Use the accent color sparingly and let the artwork provide most of the color. Keep the layout uncluttered, readable, and responsive. Increase the font size throughout the site so text is comfortable to read on desktop and mobile, while preserving a clear hierarchy between headings, body text, captions, and buttons.

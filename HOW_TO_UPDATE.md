# How to Update & Maintain Indika Wijayagunarathna's Portfolio

Welcome! This guide explains how to easily add, change, or remove artworks, photos, and information on your father's portfolio website. Everything is designed to be straightforward and simple to update without needing advanced coding knowledge.

---

## 1. Adding or Updating Artwork Photos

All artwork image files live in the folder:
```
images/artworks/
```

### Steps to add your father's drawings/paintings:
1. **Take clear photos or high-resolution scans** of the artwork in good, even, natural daylight.
2. **Crop and save** the image as `.jpg`, `.png`, or `.webp` (for example: `portrait-grandma.jpg` or `landscape-river.jpg`).
3. **Copy the image file** into the `images/artworks/` folder.

---

## 2. Updating Artwork Details in `js/artworks.js`

Open `js/artworks.js` in any text editor (such as VS Code, Notepad, or GitHub). You will see a list of artworks that looks like this:

```javascript
{
  id: "artwork-1",
  title: "Portrait Study of an Elder",
  category: "portraits",               // 'portraits', 'landscapes', or 'watercolors'
  categoryLabel: "Pencil Portrait",    // Text shown on badge
  medium: "Graphite pencil on archival paper",
  size: "A3 (29.7 × 42 cm)",          // Replace with real size or leave as "[Dimensions]"
  year: "2024",                       // Replace with year or leave as "[Year]"
  image: "images/artworks/your-file.jpg",
  featured: true,                     // Set to true to show this piece on the homepage
  description: "Detailed description of the piece, technique, or subject.",
  alt: "Description of artwork for screen readers"
},
```

### Rules & Placeholders:
- **Placeholders**: If you haven't measured or dated a piece yet, simply keep `"[Dimensions]"` or `"[Year]"`. The site will display a clean, tasteful placeholder badge automatically.
- **Categories**:
  - For pencil portraits: use `category: "portraits"`
  - For landscape drawings or paintings: use `category: "landscapes"`
  - For watercolor paintings: use `category: "watercolors"`
- **Featured piece on home page**: Set `featured: true` on the artwork you want highlighted in the top hero section.

---

## 3. Updating Contact Information or Biography

- **Phone & Email**: If phone numbers or emails ever change, open `index.html` and search for `0712930790` or `indikawijaya74@gmail.com` to edit them.
- **About Biography**: To adjust the artist biography or studio details, search for the `<section id="about">` block in `index.html`.

---

## 4. How to Publish the Website for Free Online

You can publish this portfolio website completely free so art buyers, galleries, and clients can access it from anywhere in the world:

### Option A: GitHub Pages (Recommended)
1. Commit and push this repository to GitHub.
2. On GitHub, go to your repository **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` (or `master`) and click **Save**.
4. Within 1–2 minutes, your website will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option B: Netlify (Drag & Drop)
1. Go to [Netlify.com](https://www.netlify.com/) and create a free account.
2. Drag and drop this folder (`indika's portfolio`) directly into Netlify's site dropzone.
3. Your site will instantly be online with a fast, free secure HTTPS link. You can also connect a custom domain (e.g. `www.indikawijaya.com`).

---

## Summary of Files
- `index.html` — The main website structure and sections.
- `css/styles.css` — The restrained gallery styling, fonts, and responsive layout.
- `js/artworks.js` — The artwork catalogue list (where you add and edit artwork details).
- `js/main.js` — Gallery filtering, dialog lightbox modal, and contact form logic.
- `images/artworks/` — The folder containing your father's drawings and artwork images.
- `images/favicon.svg` — The elegant "IW" monogram icon.
- `images/artist-portrait.svg` — The studio illustration used in the About section.

/**
 * ==============================================================================
 * ARTWORKS DATA - INDIKA WIJAYAGUNARATHNA PORTFOLIO
 * ==============================================================================
 * 
 * Centralized artworks registry.
 * All dimensions: A4 (21 × 29.7 cm)
 * Creation year: 2025
 */

const ARTWORKS = [
  // ==========================================================================
  // PENCIL & INK PORTRAITS (Original Hand Drawings by Indika Wijayagunarathna)
  // ==========================================================================
  {
    id: "portrait-braids",
    title: "Portrait Study with Braided Hair",
    category: "portraits",
    categoryLabel: "Pencil Portrait",
    medium: "Pen & pencil on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/portrait-braids.jpg",
    featured: true,
    description: "Original hand-drawn portrait study of a young woman with braided hair and expressive eyes on drawing paper.",
    alt: "Hand-drawn portrait of a young woman with braided hair and expressive eyes by Indika Wijayagunarathna"
  },
  {
    id: "portrait-puffed-sleeves",
    title: "Portrait in Puffed-Sleeve Blouse",
    category: "portraits",
    categoryLabel: "Pencil Portrait",
    medium: "Pen & pencil on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/portrait-puffed-sleeves.jpg",
    featured: false,
    description: "Portrait drawing featuring delicate hair textures, gentle smile, pendant necklace, and classic puffed-sleeve blouse.",
    alt: "Drawing of a young woman with long hair wearing a puffed-sleeve blouse and pendant necklace by Indika Wijayagunarathna"
  },
  {
    id: "portrait-waving",
    title: "Portrait with Raised Hand",
    category: "portraits",
    categoryLabel: "Pencil Portrait",
    medium: "Pen & pencil on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/portrait-waving.jpg",
    featured: false,
    description: "Expressive over-the-shoulder portrait drawing of a young woman looking back with a gentle hand gesture and flowing hair.",
    alt: "Hand-drawn portrait of a woman looking over her shoulder with raised hand by Indika Wijayagunarathna"
  },
  {
    id: "portrait-flower-earring",
    title: "Portrait Study with Flower Earring",
    category: "portraits",
    categoryLabel: "Pencil Portrait",
    medium: "Pen & pencil on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/portrait-flower-earring.jpg",
    featured: false,
    description: "Close-up character study capturing a bright smile, flower earring, fine facial contours, and flowing locks.",
    alt: "Close-up hand-drawn portrait of a smiling woman with a flower earring by Indika Wijayagunarathna"
  },
  {
    id: "portrait-pendant",
    title: "Portrait with Pendant Necklace",
    category: "portraits",
    categoryLabel: "Pencil Portrait",
    medium: "Pen & pencil on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/portrait-pendant.jpg",
    featured: false,
    description: "Subtle character drawing exploring soft facial contours, side-parted hair, and delicate pencil linework.",
    alt: "Hand-drawn portrait of a young woman with parted hair and necklace by Indika Wijayagunarathna"
  },
  {
    id: "portrait-blue-ink",
    title: "Ink Portrait Study in Blue & Violet",
    category: "portraits",
    categoryLabel: "Pencil Portrait",
    medium: "Ballpoint pen & ink on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/portrait-blue-ink.jpg",
    featured: false,
    description: "Vibrant two-tone ink drawing rendered in blue and violet ballpoint hatching, showing subtle tonal shading and expressive eyes.",
    alt: "Blue and violet ballpoint ink portrait study with delicate hatching by Indika Wijayagunarathna"
  },

  // ==========================================================================
  // LANDSCAPES
  // ==========================================================================
  {
    id: "landscape-1",
    title: "Morning Light across Veyangoda",
    category: "landscapes",
    categoryLabel: "Landscape",
    medium: "Graphite & wash on heavy drawing paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/landscape-1.svg",
    featured: false,
    description: "A rural landscape study capturing early morning dawn, silhouetted coconut palms, and reflections in the village paddy fields of Veyangoda.",
    alt: "Landscape drawing of Veyangoda countryside depicting palm trees, morning sun, and serene water reflections"
  },
  {
    id: "landscape-2",
    title: "Rural Pathway & Ancient Banyan",
    category: "landscapes",
    categoryLabel: "Landscape",
    medium: "Pencil & ink line on textured archival paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/landscape-2.svg",
    featured: false,
    description: "A scenic study of an old village footpath shaded by the majestic aerial roots and spreading canopy of a banyan tree.",
    alt: "Scenic drawing of a Sri Lankan rural footpath bordered by a grand banyan tree with hanging aerial roots"
  },
  {
    id: "landscape-3",
    title: "Mist over the Village Paddy",
    category: "landscapes",
    categoryLabel: "Landscape",
    medium: "Graphite pencil and tonal wash on paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/landscape-3.svg",
    featured: false,
    description: "Quiet twilight composition featuring low-lying morning mist over village fields and a traditional canoe on the calm river.",
    alt: "Atmospheric landscape drawing showing morning mist over a village river and traditional canoe"
  },

  // ==========================================================================
  // WATERCOLOR PAINTINGS
  // ==========================================================================
  {
    id: "watercolor-1",
    title: "Lotus Bloom at Sunrise",
    category: "watercolors",
    categoryLabel: "Watercolor Painting",
    medium: "Watercolor on 300gsm cold press paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/watercolor-1.svg",
    featured: false,
    description: "Layered translucent watercolor washes of a blossoming pink lotus resting upon broad lotus leaves and morning dew drops.",
    alt: "Translucent pink and green watercolor painting of a blooming sacred lotus with golden stamens and dewdrops"
  },
  {
    id: "watercolor-2",
    title: "Rainy Afternoon in Town",
    category: "watercolors",
    categoryLabel: "Watercolor Painting",
    medium: "Watercolor & gouache on cold press paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/watercolor-2.svg",
    featured: false,
    description: "Atmospheric wet-on-wet watercolor capturing glistening rain reflections on town streets, street lamp halos, and an umbrella silhouette.",
    alt: "Moody wet-on-wet watercolor painting of a rainy town street with streetlamp reflections and an umbrella figure"
  },
  {
    id: "watercolor-3",
    title: "Village House at Dusk",
    category: "watercolors",
    categoryLabel: "Watercolor Painting",
    medium: "Watercolor on archival cotton paper",
    size: "A4 (21 × 29.7 cm)",
    year: "2025",
    image: "images/artworks/watercolor-3.svg",
    featured: false,
    description: "Deep indigo twilight sky contrasted with the warm amber glow of a veranda lantern across terracotta roof tiles.",
    alt: "Watercolor painting of a traditional Sri Lankan village house at dusk with glowing veranda light and terracotta tiles"
  }
];

// If using in modern JS environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARTWORKS };
}

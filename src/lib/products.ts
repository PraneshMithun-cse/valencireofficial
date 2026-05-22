export interface ProductData {
  slug: string;
  name: string;
  price: string;
  category: "shirts" | "trouser-pants";
  description: string;
  sizes: string[];
  images: string[];
  details: string[];
  fit: string;
  fabric: string;
}

export const products: Record<string, ProductData> = {
  "sky-blue-linen-shirt": {
    slug: "sky-blue-linen-shirt",
    name: "Sky Blue Linen Shirt",
    price: "₹2,999",
    category: "shirts",
    description:
      "A relaxed-fit linen shirt crafted for effortless warm-weather dressing. Breathable fabric drapes softly over the body — understated elegance with every movement.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/images/skyblue1.JPG", "/images/skyblue2.JPG", "/images/skyblue3.JPG"],
    details: ["100% Premium Linen", "Regular fit", "Button-down collar", "Machine washable at 30°C"],
    fit: "Regular fit — true to size",
    fabric: "100% Premium Linen",
  },
  "black-oxford-shirt": {
    slug: "black-oxford-shirt",
    name: "Black Oxford Shirt",
    price: "₹3,499",
    category: "shirts",
    description:
      "A refined oxford shirt in midnight black. Structured shoulders and a clean silhouette make this the cornerstone of any wardrobe. Worn open or buttoned — equally sharp.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/images/BLACKSHIRT.JPG", "/images/oldmoney-glow1.JPG"],
    details: ["100% Cotton Oxford", "Slim fit", "Single-button cuffs", "Dry clean recommended"],
    fit: "Slim fit — size up if between sizes",
    fabric: "100% Cotton Oxford Weave",
  },
  "old-money-glow-shirt": {
    slug: "old-money-glow-shirt",
    name: "Old Money Glow Shirt",
    price: "₹3,299",
    category: "shirts",
    description:
      "Quiet luxury rendered in warm tones. A heritage silhouette with a modern cut — for the man who understands that restraint is the highest form of elegance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/oldmoney-glow1.JPG",
      "/images/oldmoney-glow2.JPG",
      "/images/oldmoney-glow3.JPG",
      "/images/oldmoney-glow4.JPG",
    ],
    details: ["Cotton-Linen Blend", "Regular fit", "Spread collar", "Cold wash only"],
    fit: "Regular fit — true to size",
    fabric: "70% Cotton, 30% Linen",
  },
  "old-money-linen-shirt": {
    slug: "old-money-linen-shirt",
    name: "Old Money Linen Shirt",
    price: "₹3,199",
    category: "shirts",
    description:
      "The old money aesthetic distilled to its purest form. Unstructured, breathable, and effortlessly refined. A shirt that looks better with time.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/images/oldmoney-glow3.JPG", "/images/oldmoney-glow4.JPG", "/images/oldmoney-glow1.JPG"],
    details: ["100% Linen", "Relaxed fit", "Mandarin collar", "Machine washable"],
    fit: "Relaxed fit — size down for a tailored look",
    fabric: "100% European Linen",
  },
  "burgundy-pleated-trousers": {
    slug: "burgundy-pleated-trousers",
    name: "Burgundy Pleated Trousers",
    price: "₹3,999",
    category: "trouser-pants",
    description:
      "Double-pleated trousers in a rich burgundy that commands presence without effort. A wide leg falls cleanly from hip to hem — tailored for movement as much as aesthetics.",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "/images/burgundy-trousers1.JPG",
      "/images/burgundy-trousers2.JPG",
      "/images/burgundy-trousers3.JPG",
      "/images/burgundy-trousers4.JPG",
    ],
    details: ["Wool-blend fabric", "Double-pleated front", "Side-tab waistband", "Dry clean only"],
    fit: "Wide leg — true to waist size",
    fabric: "65% Wool, 35% Polyester",
  },
  "burgundy-trousers-ii": {
    slug: "burgundy-trousers-ii",
    name: "Burgundy Trousers II",
    price: "₹3,799",
    category: "trouser-pants",
    description:
      "A refined take on the pleated silhouette — slightly tapered toward the ankle for a contemporary Old Money sensibility. Deep burgundy with a subtle sheen.",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/images/burgundy-trousers3.JPG", "/images/burgundy-trousers4.JPG", "/images/burgundy-trousers1.JPG"],
    details: ["Blended fabric", "Single-pleat front", "Belt loops + button waistband", "Dry clean recommended"],
    fit: "Tapered — true to waist size",
    fabric: "60% Polyester, 40% Viscose",
  },
  "gray-pleated-trousers": {
    slug: "gray-pleated-trousers",
    name: "Gray Pleated Trousers",
    price: "₹3,499",
    category: "trouser-pants",
    description:
      "Essential gray, essential silhouette. These double-pleated trousers work with everything and forgive nothing — the honest mark of good tailoring.",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/images/gray-trousers1.JPG", "/images/gray-trousers2.JPG"],
    details: ["Italian wool blend", "Double-pleat front", "Side pockets + back welt pockets", "Dry clean only"],
    fit: "Wide leg — true to waist size",
    fabric: "70% Italian Wool, 30% Polyester",
  },
  "gray-trousers-ii": {
    slug: "gray-trousers-ii",
    name: "Gray Trousers II",
    price: "₹3,299",
    category: "trouser-pants",
    description:
      "A slimmer interpretation of our signature pleated trouser in understated gray. Worn best with an open collar and an unhurried attitude.",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/images/gray-trousers2.JPG", "/images/gray-trousers1.JPG"],
    details: ["Stretch-blend fabric", "Flat-front with crease", "Slim leg", "Machine washable at 30°C"],
    fit: "Slim — size up one waist for comfort",
    fabric: "55% Polyester, 40% Viscose, 5% Elastane",
  },
};

export function getProductBySlug(slug: string): ProductData | undefined {
  return products[slug];
}

export function getProductSlugByName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

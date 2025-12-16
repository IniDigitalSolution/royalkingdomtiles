import { Product } from '../../types';

const SIZES = ['60x60 cm', '60x120 cm', '80x80 cm', '30x60 cm'];
const FINISHES = ['Glossy', 'Matt', 'Satin', 'Rustic', 'High Gloss'];
const COLORS = ['White', 'Beige', 'Grey', 'Black', 'Brown', 'Blue'];
const CATEGORIES = ['Ceramic Walls', 'Polished Vitrified', 'Glazed Vitrified', 'Outdoor'];
const APPLICATIONS = ['Living Room', 'Bathroom', 'Kitchen', 'Bedroom', 'Office'];
const COLLECTIONS = ['Eternity', 'Solitaire', 'Ceramic', 'Ultima'];

const generateProducts = (count: number): Product[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `prod-${i + 1}`,
    slug: `tile-model-${i + 1}`,
    name: `Premium Tile ${i + 1} - ${Math.random() > 0.5 ? 'Marble Look' : 'Wood Look'}`,
    sku: `KJ-${1000 + i}`,
    images: [
      `https://picsum.photos/600/600?random=${i * 3 + 1}`,
      `https://picsum.photos/600/600?random=${i * 3 + 2}`,
      `https://picsum.photos/600/600?random=${i * 3 + 3}`,
    ],
    category: CATEGORIES[i % CATEGORIES.length],
    application: [APPLICATIONS[i % APPLICATIONS.length], APPLICATIONS[(i + 1) % APPLICATIONS.length]],
    collection: COLLECTIONS[i % COLLECTIONS.length],
    size: SIZES[i % SIZES.length],
    finish: FINISHES[i % FINISHES.length],
    color: COLORS[i % COLORS.length],
    shortDesc: 'A premium quality tile suitable for modern interiors. Highly durable and easy to maintain.'
  }));
};

export const PRODUCTS = generateProducts(50);

export const FILTERS = {
  categories: CATEGORIES,
  applications: APPLICATIONS,
  collections: COLLECTIONS,
  sizes: SIZES,
  finishes: FINISHES,
  colors: COLORS,
};
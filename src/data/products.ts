import { Product } from '../../types';

const SIZES = ['10x10 Inch', '12x12 Inch'];
const FINISHES = ['Matt', 'Textured', 'Anti-Skid', 'Smooth'];
const COLORS = ['White', 'Terracotta', 'Grey', 'Red', 'Brown', 'Natural'];
const CATEGORIES = [
  'Cool Roof Tiles',
  'Ceramic Cool Roof Tiles',
  'Clay Tiles',
  'Vitrified Cool Roof Tiles',
  'Premium Rough Grout',
  'Waterproofing Solution (Grout Admixture)'
];
const APPLICATIONS = ['Terrace', 'Roof', 'Commercial Building', 'Residential', 'Industrial'];
const COLLECTIONS = ['Silver Plus', 'Gold', 'Elite Silver', 'Elite Gold'];

// Cool Roof Tiles - 4 Main Products
const COOL_ROOF_TILES_PRODUCTS: Product[] = [
  {
    id: 'cool-roof-silver-plus',
    slug: 'silver-plus',
    name: 'Silver Plus',
    sku: 'RK-CRT-001',
    images: [
      'https://picsum.photos/600/600?random=101',
      'https://picsum.photos/600/600?random=102',
      'https://picsum.photos/600/600?random=103',
    ],
    category: 'Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Residential'],
    collection: 'Silver Plus',
    size: '10x10 Inch',
    finish: 'Matt',
    color: 'White',
    shortDesc: 'Silver Plus cool roof tiles with advanced heat reflection. Reduces indoor temperature by 10-12°C. Ideal for residential buildings.'
  },
  {
    id: 'cool-roof-gold',
    slug: 'gold',
    name: 'Gold',
    sku: 'RK-CRT-002',
    images: [
      'https://picsum.photos/600/600?random=104',
      'https://picsum.photos/600/600?random=105',
      'https://picsum.photos/600/600?random=106',
    ],
    category: 'Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Commercial Building'],
    collection: 'Gold',
    size: '12x12 Inch',
    finish: 'Textured',
    color: 'White',
    shortDesc: 'Gold series cool roof tiles with premium heat reflection technology. Reduces indoor temperature by 12-14°C. Perfect for commercial projects.'
  },
  {
    id: 'cool-roof-elite-silver',
    slug: 'elite-silver',
    name: 'Elite Silver',
    sku: 'RK-CRT-003',
    images: [
      'https://picsum.photos/600/600?random=107',
      'https://picsum.photos/600/600?random=108',
      'https://picsum.photos/600/600?random=109',
    ],
    category: 'Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Industrial'],
    collection: 'Elite Silver',
    size: '10x10 Inch',
    finish: 'Anti-Skid',
    color: 'Grey',
    shortDesc: 'Elite Silver cool roof tiles with superior durability and heat reflection. Reduces indoor temperature by 13-15°C. Industrial grade quality.'
  },
  {
    id: 'cool-roof-elite-gold',
    slug: 'elite-gold',
    name: 'Elite Gold',
    sku: 'RK-CRT-004',
    images: [
      'https://picsum.photos/600/600?random=110',
      'https://picsum.photos/600/600?random=111',
      'https://picsum.photos/600/600?random=112',
    ],
    category: 'Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Residential', 'Commercial Building'],
    collection: 'Elite Gold',
    size: '12x12 Inch',
    finish: 'Smooth',
    color: 'White',
    shortDesc: 'Elite Gold - our premium cool roof tiles with maximum heat reflection. Reduces indoor temperature by 15°C. Best-in-class performance and aesthetics.'
  }
];

// Generate other category products
const generateOtherProducts = (): Product[] => {
  const otherCategories = CATEGORIES.slice(1); // Exclude 'Cool Roof Tiles'
  const products: Product[] = [];
  
  otherCategories.forEach((category, catIndex) => {
    // Generate 4 products per category
    for (let i = 0; i < 4; i++) {
      products.push({
        id: `prod-${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
        slug: `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
        name: `${category} - Type ${i + 1}`,
        sku: `RK-${(catIndex + 1) * 100 + i + 1}`,
        images: [
          `https://picsum.photos/600/600?random=${catIndex * 10 + i * 3 + 1}`,
          `https://picsum.photos/600/600?random=${catIndex * 10 + i * 3 + 2}`,
          `https://picsum.photos/600/600?random=${catIndex * 10 + i * 3 + 3}`,
        ],
        category: category,
        application: [APPLICATIONS[i % APPLICATIONS.length], APPLICATIONS[(i + 1) % APPLICATIONS.length]],
        collection: category.includes('Grout') || category.includes('Waterproofing') ? 'Accessories' : COLLECTIONS[i % COLLECTIONS.length],
        size: category.includes('Grout') || category.includes('Waterproofing') ? 'Various' : SIZES[i % SIZES.length],
        finish: FINISHES[i % FINISHES.length],
        color: COLORS[i % COLORS.length],
        shortDesc: category.includes('Grout') 
          ? 'High-strength grout for superior tile bonding and long-lasting finish.'
          : category.includes('Waterproofing')
          ? 'Advanced waterproofing solution for complete protection against leakage.'
          : `Premium ${category.toLowerCase()} with heat reflection technology. Durable, waterproof, and energy efficient.`
      });
    }
  });
  
  return products;
};

// Combine all products
export const PRODUCTS: Product[] = [
  ...COOL_ROOF_TILES_PRODUCTS,
  ...generateOtherProducts()
];

export const FILTERS = {
  categories: CATEGORIES,
  applications: APPLICATIONS,
  collections: COLLECTIONS,
  sizes: SIZES,
  finishes: FINISHES,
  colors: COLORS,
};
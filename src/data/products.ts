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

// Static asset paths (URL-encoded for spaces)
const IMG_SILVER_PLUS = '/Products/Cool_Roof_Tiles_in_Chennai_Sliver.jpg';
const IMG_GOLD = '/Products/Cooling_Tiles_Price_in_Chennai-GOLD.jpg';
const IMG_ELITE_SILVER = '/Products/Cooling_Roof_Tiles_in_Chennai-Elite%20Sliver.jpg';
const IMG_ELITE_GOLD = '/Products/White_Cooling_Roof_Tiles_in_Chennai-Elite%20Gold.jpg';

const IMG_CERAMIC_MAIN_1 = '/Products/Ceramic%20600x600%20Main%20Image.jpg';
const IMG_CERAMIC_PREVIEW_1 = '/Products/Ceramic%20Preview%20Image%20300%20x%20300.jpg';
const IMG_CERAMIC_MAIN_2 = '/Products/Product%202%20Main%20Ceramic%20Cool%20Roof%20Tile%20600%20x600.jpg';
const IMG_CERAMIC_PREVIEW_2 = '/Products/Product%202%20Ceramic%20Cool%20Roof%20Tile%20300%20x300.jpg';
const IMG_CERAMIC_MAIN_3 = '/Products/Ceramic%20Product%203%20main%20image%20600x600.jpg';
const IMG_CERAMIC_PREVIEW_3 = '/Products/Ceramic%20product%203%20preview%20300x300.jpg';

const IMG_CLAY_MAIN = '/Products/Clay%20Tile%20Main%20Product%20Image%20600x600.jpg';
const IMG_CLAY_PREVIEW = '/Products/Clay%20Tiles%20Preview%20Image%20300x300.jpg';

// Cool Roof Tiles - 4 Main Products (mapped to actual assets)
const COOL_ROOF_TILES_PRODUCTS: Product[] = [
  {
    id: 'cool-roof-silver-plus',
    slug: 'silver-plus',
    name: 'Silver Plus',
    sku: 'RK-CRT-001',
    images: [IMG_SILVER_PLUS, IMG_SILVER_PLUS, IMG_SILVER_PLUS],
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
    images: [IMG_GOLD, IMG_GOLD, IMG_GOLD],
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
    images: [IMG_ELITE_SILVER, IMG_ELITE_SILVER, IMG_ELITE_SILVER],
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
    images: [IMG_ELITE_GOLD, IMG_ELITE_GOLD, IMG_ELITE_GOLD],
    category: 'Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Residential', 'Commercial Building'],
    collection: 'Elite Gold',
    size: '12x12 Inch',
    finish: 'Smooth',
    color: 'White',
    shortDesc: 'Elite Gold - our premium cool roof tiles with maximum heat reflection. Reduces indoor temperature by 15°C. Best-in-class performance and aesthetics.'
  }
];

// Manually mapped products for other categories to use provided assets
const OTHER_PRODUCTS: Product[] = [
  // Ceramic Cool Roof Tiles (with main + preview)
  {
    id: 'ceramic-cool-roof-1',
    slug: 'ceramic-cool-roof-1',
    name: 'Ceramic Cool Roof Tile - Model 1',
    sku: 'RK-CER-001',
    images: [IMG_CERAMIC_MAIN_1, IMG_CERAMIC_PREVIEW_1],
    category: 'Ceramic Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Residential'],
    collection: 'Ceramic Cool Roof Tiles',
    size: '12x12 Inch',
    finish: 'Matt',
    color: 'White',
    shortDesc: 'Ceramic cool roof tile with strong heat reflection and waterproof protection.'
  },
  {
    id: 'ceramic-cool-roof-2',
    slug: 'ceramic-cool-roof-2',
    name: 'Ceramic Cool Roof Tile - Model 2',
    sku: 'RK-CER-002',
    images: [IMG_CERAMIC_MAIN_2, IMG_CERAMIC_PREVIEW_2],
    category: 'Ceramic Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Commercial Building'],
    collection: 'Ceramic Cool Roof Tiles',
    size: '12x12 Inch',
    finish: 'Textured',
    color: 'White',
    shortDesc: 'Premium ceramic cool roof tile engineered for higher heat reflection and durability.'
  },
  {
    id: 'ceramic-cool-roof-3',
    slug: 'ceramic-cool-roof-3',
    name: 'Ceramic Cool Roof Tile - Model 3',
    sku: 'RK-CER-003',
    images: [IMG_CERAMIC_MAIN_3, IMG_CERAMIC_PREVIEW_3],
    category: 'Ceramic Cool Roof Tiles',
    application: ['Terrace', 'Roof', 'Industrial'],
    collection: 'Ceramic Cool Roof Tiles',
    size: '10x10 Inch',
    finish: 'Anti-Skid',
    color: 'Grey',
    shortDesc: 'Industrial-grade ceramic cool roof tile with anti-skid finish and reliable cooling.'
  },

  // Clay Tiles
  {
    id: 'clay-tile-1',
    slug: 'clay-tile-1',
    name: 'Clay Roof Tile - Model 1',
    sku: 'RK-CLAY-001',
    images: [IMG_CLAY_MAIN, IMG_CLAY_PREVIEW],
    category: 'Clay Tiles',
    application: ['Residential', 'Roof'],
    collection: 'Clay Tiles',
    size: '10x10 Inch',
    finish: 'Matt',
    color: 'Terracotta',
    shortDesc: 'Natural clay roof tile with durable finish and classic terracotta tone.'
  },

  // Placeholder entries for remaining categories to keep filters functional
  {
    id: 'vitrified-cool-roof-1',
    slug: 'vitrified-cool-roof-1',
    name: 'Vitrified Cool Roof Tile - Sample',
    sku: 'RK-VIT-001',
    images: [IMG_GOLD],
    category: 'Vitrified Cool Roof Tiles',
    application: ['Terrace', 'Roof'],
    collection: 'Vitrified Cool Roof Tiles',
    size: '12x12 Inch',
    finish: 'Smooth',
    color: 'White',
    shortDesc: 'High-SRI vitrified cool roof tile with anti-skid matte feel and moisture resistance. Reflects heat (target SRI > 90) to cut roof temperatures by ~10–15% while staying durable in heavy foot-traffic areas.'
  },
  {
    id: 'premium-rough-grout-1',
    slug: 'premium-rough-grout-1',
    name: 'Premium Rough Grout',
    sku: 'RK-GRT-001',
    images: [IMG_CLAY_PREVIEW],
    category: 'Premium Rough Grout',
    application: ['Residential', 'Commercial Building'],
    collection: 'Accessories',
    size: 'Various',
    finish: 'Smooth',
    color: 'Grey',
    shortDesc: 'High-strength grout for superior tile bonding and long-lasting finish.'
  },
  {
    id: 'waterproofing-solution-1',
    slug: 'waterproofing-solution-1',
    name: 'Waterproofing Solution (Grout Admixture)',
    sku: 'RK-WP-001',
    images: [IMG_CERAMIC_PREVIEW_1],
    category: 'Waterproofing Solution (Grout Admixture)',
    application: ['Terrace', 'Roof', 'Balcony'],
    collection: 'Accessories',
    size: 'Various',
    finish: 'Smooth',
    color: 'White',
    shortDesc: 'Advanced waterproofing admixture to prevent leaks and improve durability.'
  }
];

// Combine all products
export const PRODUCTS: Product[] = [
  ...COOL_ROOF_TILES_PRODUCTS,
  ...OTHER_PRODUCTS
];

export const FILTERS = {
  categories: CATEGORIES,
  applications: APPLICATIONS,
  collections: COLLECTIONS,
  sizes: SIZES,
  finishes: FINISHES,
  colors: COLORS,
};
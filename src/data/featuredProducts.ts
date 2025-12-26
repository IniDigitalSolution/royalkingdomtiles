export interface ProductSpec {
  feature: string;
  details: string;
}

export interface ProductBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
}

export interface LayerInfo {
  title: string;
  color: 'cyan' | 'gray';
  points: string[];
}

export interface FeaturedProduct {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroDescription: string;
  detailedDescription: string;
  images: {
    front: string;
    bottom: string;
    breakView: string;
  };
  layers: LayerInfo[];
  whyBest: ProductFeature[];
  specifications: ProductSpec[];
  benefits: ProductBenefit[];
  applications: {
    icon: string;
    name: string;
  }[];
}

// Static asset paths (URL-encoded for spaces) mapped to real product images
const FP_IMG_SILVER_PLUS = '/Products/Cool_Roof_Tiles_in_Chennai_Sliver.jpg';
const FP_IMG_GOLD = '/Products/Cooling_Tiles_Price_in_Chennai-GOLD.jpg';
const FP_IMG_ELITE_SILVER = '/Products/Cooling_Roof_Tiles_in_Chennai-Elite%20Sliver.jpg';
const FP_IMG_ELITE_GOLD = '/Products/White_Cooling_Roof_Tiles_in_Chennai-Elite%20Gold.jpg';

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'silver-plus',
    slug: 'silver-plus',
    name: 'Silver Plus Cool Roof Tiles',
    shortName: 'Silver Plus',
    tagline: 'Advanced Dual Layer Protection',
    heroDescription: 'Introducing the Silver Plus model — the smart choice for homeowners, builders, and architects who demand maximum cooling, and long-term durability. Designed with cutting-edge technology, this tile combines thermal insulation and mechanical strength into a single powerful solution.',
    detailedDescription: 'With its special dual-layer construction, the Silver Plus tile not only lowers indoor temperatures but also extends the life of your building — making it the ideal terrace solution for extreme heat and unpredictable monsoons.',
    images: {
      front: FP_IMG_SILVER_PLUS,
      bottom: FP_IMG_SILVER_PLUS,
      breakView: FP_IMG_SILVER_PLUS,
    },
    layers: [
      {
        title: 'Top Layer (6–7mm of White Reflective Minerals)',
        color: 'cyan',
        points: [
          'Made from high-SRI white minerals that reflect over 90% of solar radiation',
          'Offers powerful thermal insulation, reducing roof temperatures by 10°C',
          'Prevents heat absorption and UV damage',
          'Keeps your indoor spaces cooler throughout the day',
        ],
      },
      {
        title: 'Bottom Layer (8–9mm of Grey Cement Concrete)',
        color: 'gray',
        points: [
          'Provides solid structural integrity and load-bearing capacity',
          'Enhances tile stability and impact resistance',
          'Acts as a durable barrier against cracks, water seepage, and foot traffic',
          'This dual-layer composition delivers unbeatable heat control, structural strength, and water-resistant protection',
        ],
      },
    ],
    whyBest: [
      { icon: 'thermometer', title: 'Reduces Indoor Temperature by up to 10°C' },
      { icon: 'shield-check', title: 'Anti-Skid Surface — Safe to Walk, Even When Wet' },
      { icon: 'sun', title: 'High-Reflectivity White Layer (SRI > 90%)' },
      { icon: 'cloud', title: 'Dustproof, Weatherproof & Maintenance-Free' },
      { icon: 'bolt', title: 'Saves Energy — Cuts AC Usage & Power Bills' },
      { icon: 'calendar', title: 'Long Life Span — Over 12 Years of Reliable Use' },
    ],
    specifications: [
      { feature: 'Color', details: 'Top White, Bottom Grey' },
      { feature: 'Size', details: '10 inch × 10 inch (254mm x 254mm approx.)' },
      { feature: 'Total Thickness', details: '15mm (±1mm)' },
      { feature: 'Top Layer Material', details: 'High SRI White Reflective Minerals' },
      { feature: 'Base Layer Material', details: 'Reinforced Grey Cement Concrete' },
      { feature: 'Surface Type', details: 'Matte Finish with Anti-Skid Texture' },
      { feature: 'Weight', details: '±2 kg' },
      { feature: 'Solar Reflectance', details: '> 90% SRI' },
      { feature: 'Water Absorption', details: '< 4.85% — Fully Water-Resistant' },
      { feature: 'Warpage', details: '0.2 mm' },
      { feature: 'Flexural Strength', details: '4.9 N/mm²' },
      { feature: 'Lifespan', details: '12+ Years' },
      { feature: 'Application Areas', details: 'Terrace, Balcony, Rooftop, Utility Spaces' },
      { feature: 'Maintenance', details: 'No Regular Maintenance Required' },
    ],
    benefits: [
      {
        icon: 'thermometer',
        title: 'Reduces Roof Temperature by up to 10°C',
        description: 'Silver Plus reflects harsh sunlight and UV rays, significantly reducing surface heat on your terrace. This results in cooler indoor temperatures, even during peak summer.',
      },
      {
        icon: 'bolt',
        title: 'Power Saving & Eco-Friendly',
        description: 'By lowering your home\'s internal heat, these cool roof tiles help minimize AC usage, cutting down electricity bills and reducing your carbon footprint — an energy-efficient and sustainable choice.',
      },
      {
        icon: 'droplet',
        title: '100% Water Resistant',
        description: 'Silver Plus tiles are embedded with advanced water-resistant minerals, providing complete protection against water leakage, rain damage, and algae formation during monsoon seasons.',
      },
      {
        icon: 'shield',
        title: 'Anti-Skid Surface',
        description: 'Engineered with a matte anti-skid texture, these tiles ensure safe walking even when wet — ideal for families with children and elderly residents.',
      },
      {
        icon: 'sun',
        title: 'Built for Extreme Weather',
        description: 'Designed to withstand extreme summer heat, heavy rainfall, and high humidity — a reliable terrace solution for all-season performance.',
      },
      {
        icon: 'sparkles',
        title: 'Zero Maintenance Needed',
        description: 'These tiles are dustproof, stain-resistant, and easy to clean — requiring no regular maintenance while keeping your terrace polished and presentable year-round.',
      },
    ],
    applications: [
      { icon: 'home', name: 'Residential Terraces' },
      { icon: 'building', name: 'Commercial Rooftops' },
      { icon: 'factory', name: 'Industrial Buildings' },
      { icon: 'sun', name: 'Balconies & Patios' },
      { icon: 'warehouse', name: 'Warehouses' },
      { icon: 'school', name: 'Schools & Hospitals' },
    ],
  },
  {
    id: 'gold',
    slug: 'gold',
    name: 'Gold Premium Cool Roof Tiles',
    shortName: 'Gold',
    tagline: 'Superior Heat Resistance',
    heroDescription: 'The Gold Premium model offers enhanced thermal protection with premium-grade materials. Ideal for those who want the perfect balance of cooling efficiency and aesthetic appeal.',
    detailedDescription: 'Our Gold series features advanced mineral coating technology that provides superior heat reflection while maintaining an elegant appearance that complements any architectural style.',
    images: {
      front: FP_IMG_GOLD,
      bottom: FP_IMG_GOLD,
      breakView: FP_IMG_GOLD,
    },
    layers: [
      {
        title: 'Top Layer (7–8mm of Premium White Minerals)',
        color: 'cyan',
        points: [
          'Premium-grade SRI minerals with 92% solar reflectance',
          'Enhanced thermal barrier reducing temperatures by 12°C',
          'UV-resistant coating prevents yellowing',
          'Smooth matte finish for aesthetic appeal',
        ],
      },
      {
        title: 'Bottom Layer (9–10mm of Reinforced Concrete)',
        color: 'gray',
        points: [
          'High-density cement composite for maximum strength',
          'Enhanced load-bearing capacity up to 400 kg/m²',
          'Integrated waterproofing layer',
          'Crack-resistant formula for long-term durability',
        ],
      },
    ],
    whyBest: [
      { icon: 'thermometer', title: 'Reduces Indoor Temperature by up to 12°C' },
      { icon: 'shield-check', title: 'Premium Anti-Skid Surface' },
      { icon: 'sun', title: 'Ultra High-Reflectivity (SRI > 92%)' },
      { icon: 'cloud', title: 'All-Weather Protection' },
      { icon: 'bolt', title: 'Maximum Energy Savings' },
      { icon: 'calendar', title: 'Extended 15 Year Lifespan' },
    ],
    specifications: [
      { feature: 'Color', details: 'Premium White, Bottom Grey' },
      { feature: 'Size', details: '12 inch × 12 inch (305mm x 305mm approx.)' },
      { feature: 'Total Thickness', details: '18mm (±1mm)' },
      { feature: 'Top Layer Material', details: 'Premium SRI White Minerals' },
      { feature: 'Base Layer Material', details: 'High-Density Reinforced Concrete' },
      { feature: 'Surface Type', details: 'Smooth Matte with Anti-Skid' },
      { feature: 'Weight', details: '±3 kg' },
      { feature: 'Solar Reflectance', details: '> 92% SRI' },
      { feature: 'Water Absorption', details: '< 4.0% — Superior Water-Resistant' },
      { feature: 'Warpage', details: '0.15 mm' },
      { feature: 'Flexural Strength', details: '5.5 N/mm²' },
      { feature: 'Lifespan', details: '15+ Years' },
      { feature: 'Application Areas', details: 'Terrace, Balcony, Rooftop, Commercial' },
      { feature: 'Maintenance', details: 'Minimal Maintenance Required' },
    ],
    benefits: [
      {
        icon: 'thermometer',
        title: 'Superior Temperature Reduction',
        description: 'Gold Premium tiles offer up to 12°C reduction in roof temperature, providing exceptional cooling even in the hottest climates.',
      },
      {
        icon: 'bolt',
        title: 'Maximum Energy Efficiency',
        description: 'Experience significant reduction in AC usage and electricity bills with our premium heat-reflective technology.',
      },
      {
        icon: 'droplet',
        title: 'Advanced Waterproofing',
        description: 'Integrated waterproofing layer provides complete protection against water damage and seepage.',
      },
      {
        icon: 'shield',
        title: 'Premium Safety Features',
        description: 'Enhanced anti-skid surface ensures safe walking in all weather conditions.',
      },
      {
        icon: 'sun',
        title: 'Weather Resistant',
        description: 'Built to withstand extreme weather conditions while maintaining performance.',
      },
      {
        icon: 'sparkles',
        title: 'Aesthetic Excellence',
        description: 'Premium finish adds elegance to your rooftop while providing functional benefits.',
      },
    ],
    applications: [
      { icon: 'home', name: 'Luxury Residences' },
      { icon: 'building', name: 'Office Buildings' },
      { icon: 'factory', name: 'Industrial Complexes' },
      { icon: 'sun', name: 'Resort & Hotels' },
      { icon: 'warehouse', name: 'Shopping Centers' },
      { icon: 'school', name: 'Educational Institutions' },
    ],
  },
  {
    id: 'elite-silver',
    slug: 'elite-silver',
    name: 'Elite Silver Cool Roof Tiles',
    shortName: 'Elite Silver',
    tagline: 'Professional Grade Performance',
    heroDescription: 'The Elite Silver series is engineered for professionals who demand the highest standards. Perfect for large-scale commercial and industrial applications.',
    detailedDescription: 'Featuring industrial-grade materials and precision engineering, Elite Silver tiles deliver consistent performance across massive roof areas while maintaining cost efficiency.',
    images: {
      front: FP_IMG_ELITE_SILVER,
      bottom: FP_IMG_ELITE_SILVER,
      breakView: FP_IMG_ELITE_SILVER,
    },
    layers: [
      {
        title: 'Top Layer (8mm of Industrial White Minerals)',
        color: 'cyan',
        points: [
          'Industrial-grade SRI minerals for consistent performance',
          'Optimized thermal reflection for large areas',
          'Chemical-resistant surface coating',
          'Uniform color consistency across batches',
        ],
      },
      {
        title: 'Bottom Layer (10mm of Industrial Concrete)',
        color: 'gray',
        points: [
          'Heavy-duty cement composition',
          'Designed for high foot traffic areas',
          'Superior load distribution',
          'Vibration and impact resistant',
        ],
      },
    ],
    whyBest: [
      { icon: 'thermometer', title: 'Consistent Temperature Control' },
      { icon: 'shield-check', title: 'Industrial-Grade Durability' },
      { icon: 'sun', title: 'High-Volume Heat Reflection (SRI > 88%)' },
      { icon: 'cloud', title: 'Chemical & Weather Resistant' },
      { icon: 'bolt', title: 'Cost-Effective Energy Solution' },
      { icon: 'calendar', title: 'Backed by 12 Year Warranty' },
    ],
    specifications: [
      { feature: 'Color', details: 'Industrial White, Bottom Grey' },
      { feature: 'Size', details: '10 inch × 10 inch (254mm x 254mm approx.)' },
      { feature: 'Total Thickness', details: '18mm (±1mm)' },
      { feature: 'Top Layer Material', details: 'Industrial SRI White Minerals' },
      { feature: 'Base Layer Material', details: 'Heavy-Duty Cement Concrete' },
      { feature: 'Surface Type', details: 'Industrial Anti-Skid Texture' },
      { feature: 'Weight', details: '±2.5 kg' },
      { feature: 'Solar Reflectance', details: '> 88% SRI' },
      { feature: 'Water Absorption', details: '< 5.0%' },
      { feature: 'Warpage', details: '0.25 mm' },
      { feature: 'Flexural Strength', details: '5.2 N/mm²' },
      { feature: 'Lifespan', details: '12+ Years' },
      { feature: 'Application Areas', details: 'Industrial, Commercial, Large-Scale' },
      { feature: 'Maintenance', details: 'Low Maintenance' },
    ],
    benefits: [
      {
        icon: 'thermometer',
        title: 'Large Area Cooling',
        description: 'Optimized for industrial and commercial spaces requiring consistent temperature control across vast areas.',
      },
      {
        icon: 'bolt',
        title: 'Industrial Energy Savings',
        description: 'Significantly reduce cooling costs in warehouses, factories, and commercial buildings.',
      },
      {
        icon: 'droplet',
        title: 'Chemical Resistance',
        description: 'Surface coating resists common industrial chemicals and pollutants.',
      },
      {
        icon: 'shield',
        title: 'Heavy-Duty Performance',
        description: 'Built to handle high foot traffic and heavy equipment placement.',
      },
      {
        icon: 'sun',
        title: 'Batch Consistency',
        description: 'Uniform performance and appearance across large orders.',
      },
      {
        icon: 'sparkles',
        title: 'Professional Support',
        description: 'Dedicated technical support for large-scale installations.',
      },
    ],
    applications: [
      { icon: 'factory', name: 'Manufacturing Plants' },
      { icon: 'warehouse', name: 'Warehouses' },
      { icon: 'building', name: 'Commercial Centers' },
      { icon: 'truck', name: 'Logistics Hubs' },
      { icon: 'server', name: 'Data Centers' },
      { icon: 'hospital', name: 'Healthcare Facilities' },
    ],
  },
  {
    id: 'elite-gold',
    slug: 'elite-gold',
    name: 'Elite Gold Cool Roof Tiles',
    shortName: 'Elite Gold',
    tagline: 'The Ultimate Premium Choice',
    heroDescription: 'Elite Gold represents the pinnacle of cool roof technology. Combining the best materials with advanced engineering for unmatched performance.',
    detailedDescription: 'For those who accept nothing but the best, Elite Gold delivers premium aesthetics, maximum heat reduction, and exceptional durability in one superior product.',
    images: {
      front: FP_IMG_ELITE_GOLD,
      bottom: FP_IMG_ELITE_GOLD,
      breakView: FP_IMG_ELITE_GOLD,
    },
    layers: [
      {
        title: 'Top Layer (9mm of Ultra-Premium Minerals)',
        color: 'cyan',
        points: [
          'Highest-grade SRI minerals available (95% reflectance)',
          'Maximum thermal protection up to 15°C reduction',
          'Self-cleaning nano-coating technology',
          'Premium smooth finish with subtle sheen',
        ],
      },
      {
        title: 'Bottom Layer (11mm of Premium Reinforced Base)',
        color: 'gray',
        points: [
          'Aerospace-grade cement composite',
          'Maximum load-bearing capacity (500 kg/m²)',
          'Multi-layer waterproofing system',
          'Guaranteed crack-free performance',
        ],
      },
    ],
    whyBest: [
      { icon: 'thermometer', title: 'Maximum 15°C Temperature Reduction' },
      { icon: 'shield-check', title: 'Premium Self-Cleaning Surface' },
      { icon: 'sun', title: 'Industry-Leading SRI > 95%' },
      { icon: 'cloud', title: 'Complete Weather Protection' },
      { icon: 'bolt', title: 'Highest Energy Savings' },
      { icon: 'calendar', title: 'Premium 20 Year Warranty' },
    ],
    specifications: [
      { feature: 'Color', details: 'Ultra White, Premium Grey Base' },
      { feature: 'Size', details: '12 inch × 12 inch (305mm x 305mm approx.)' },
      { feature: 'Total Thickness', details: '20mm (±1mm)' },
      { feature: 'Top Layer Material', details: 'Ultra-Premium SRI Minerals' },
      { feature: 'Base Layer Material', details: 'Aerospace-Grade Cement Composite' },
      { feature: 'Surface Type', details: 'Self-Cleaning Nano-Coated Surface' },
      { feature: 'Weight', details: '±3.5 kg' },
      { feature: 'Solar Reflectance', details: '> 95% SRI' },
      { feature: 'Water Absorption', details: '< 3.5% — Premium Water-Resistant' },
      { feature: 'Warpage', details: '0.1 mm' },
      { feature: 'Flexural Strength', details: '6.2 N/mm²' },
      { feature: 'Lifespan', details: '20+ Years' },
      { feature: 'Application Areas', details: 'Premium Residential, Luxury Commercial' },
      { feature: 'Maintenance', details: 'Self-Cleaning, Near Zero Maintenance' },
    ],
    benefits: [
      {
        icon: 'thermometer',
        title: 'Unmatched Cooling Performance',
        description: 'Experience up to 15°C reduction in roof temperature with our most advanced thermal technology.',
      },
      {
        icon: 'bolt',
        title: 'Premium Energy Efficiency',
        description: 'Achieve the highest possible energy savings with industry-leading heat reflection.',
      },
      {
        icon: 'droplet',
        title: 'Self-Cleaning Technology',
        description: 'Nano-coating allows rainwater to wash away dirt and debris automatically.',
      },
      {
        icon: 'shield',
        title: 'Ultimate Protection',
        description: 'Multi-layer construction provides complete protection against all environmental factors.',
      },
      {
        icon: 'sun',
        title: '20-Year Guarantee',
        description: 'Backed by our industry-leading warranty for complete peace of mind.',
      },
      {
        icon: 'sparkles',
        title: 'Luxury Aesthetics',
        description: 'Premium finish elevates the appearance of any property.',
      },
    ],
    applications: [
      { icon: 'home', name: 'Luxury Villas' },
      { icon: 'building', name: 'Premium Offices' },
      { icon: 'hotel', name: '5-Star Hotels' },
      { icon: 'hospital', name: 'Premium Healthcare' },
      { icon: 'museum', name: 'Cultural Centers' },
      { icon: 'bank', name: 'Financial Institutions' },
    ],
  },
  {
    id: 'vitrified',
    slug: 'vitrified-cool-roof-tiles',
    name: 'Vitrified Cool Roof Tiles',
    shortName: 'Vitrified',
    tagline: 'High-SRI, Slip-Resistant Vitrified Cooling',
    heroDescription: 'Vitrified cool roof tiles engineered with high Solar Reflectance Index to cut roof temperatures by 10–15% and improve indoor comfort.',
    detailedDescription: 'These vitrified tiles use high-reflectance minerals (SRI > 90) with a moisture-resistant, anti-skid surface — ideal for terraces, balconies, exterior facades, pavements, and high-traffic rooftop areas. Built to reduce heat gain, save electricity, and deliver durable, low-maintenance performance.',
    images: {
      front: FP_IMG_GOLD,
      bottom: FP_IMG_GOLD,
      breakView: FP_IMG_GOLD,
    },
    layers: [
      {
        title: 'Top Layer (High-SRI Vitrified Surface)',
        color: 'cyan',
        points: [
          'LEED-grade SRI > 90 for strong solar reflection',
          'Reduces roof surface temperature by ~10–15%',
          'UV- and stain-resistant vitrified glaze',
          'Slip-resistant matte texture for safety in wet areas',
        ],
      },
      {
        title: 'Bottom Layer (Reinforced Vitrified Body)',
        color: 'gray',
        points: [
          'Dense vitrified base for strength and durability',
          'Moisture-resistant body to prevent seepage',
          'Designed for heavy foot traffic on terraces and pavements',
          'Stable under thermal cycling and monsoon exposure',
        ],
      },
    ],
    whyBest: [
      { icon: 'thermometer', title: 'Cuts Heat Gain by 10–15%' },
      { icon: 'shield-check', title: 'Anti-Skid Matte Surface' },
      { icon: 'sun', title: 'High SRI > 90 Reflectivity' },
      { icon: 'cloud', title: 'Moisture & Stain Resistant' },
      { icon: 'bolt', title: 'Energy Savings on Cooling' },
      { icon: 'calendar', title: 'Long-Life Vitrified Durability' },
    ],
    specifications: [
      { feature: 'Color', details: 'High-reflective White / Light Grey' },
      { feature: 'Size', details: '12 inch × 12 inch (305mm x 305mm approx.)' },
      { feature: 'Total Thickness', details: '18mm (±1mm)' },
      { feature: 'Top Layer Material', details: 'High-SRI vitrified glaze' },
      { feature: 'Base Layer Material', details: 'Reinforced vitrified body' },
      { feature: 'Surface Type', details: 'Matte, anti-skid' },
      { feature: 'Weight', details: '±3 kg' },
      { feature: 'Solar Reflectance', details: '> 90% SRI' },
      { feature: 'Water Absorption', details: 'Low, moisture-resistant' },
      { feature: 'Application Areas', details: 'Terrace, Balcony, Facade, Pavements, High-Traffic Rooftops' },
      { feature: 'Maintenance', details: 'Easy clean, low maintenance' },
    ],
    benefits: [
      {
        icon: 'thermometer',
        title: 'Lower Surface Heat',
        description: 'High-SRI surface reflects solar radiation to keep roofs cooler.',
      },
      {
        icon: 'bolt',
        title: 'Energy Efficient',
        description: 'Reduced heat gain trims AC usage and electricity bills.',
      },
      {
        icon: 'droplet',
        title: 'Moisture Resistant',
        description: 'Vitrified body resists water ingress and seepage.',
      },
      {
        icon: 'shield',
        title: 'Safe to Walk',
        description: 'Matte anti-skid finish for wet or high-traffic areas.',
      },
      {
        icon: 'sun',
        title: 'Weather Durable',
        description: 'Built to withstand UV, heat, and monsoon cycles.',
      },
      {
        icon: 'sparkles',
        title: 'Clean Look',
        description: 'Stain-resistant surface stays bright with minimal upkeep.',
      },
    ],
    applications: [
      { icon: 'home', name: 'Residential Terraces' },
      { icon: 'building', name: 'Commercial Rooftops' },
      { icon: 'factory', name: 'Industrial Buildings' },
      { icon: 'sun', name: 'Balconies & Facades' },
      { icon: 'warehouse', name: 'Pavements & Walkways' },
      { icon: 'school', name: 'Institutions & Public Spaces' },
    ],
  },
];

export const getProductBySlug = (slug: string): FeaturedProduct | undefined => {
  return FEATURED_PRODUCTS.find(p => p.slug === slug);
};


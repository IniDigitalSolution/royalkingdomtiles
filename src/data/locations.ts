import { Location } from '../../types';

const baseHero = [
  {
    image: 'https://picsum.photos/1920/600?random=1',
    title: 'Transform Your Space',
    subtitle: 'Premium Cool Roof Tiles & Heat Reflective Solutions'
  },
  {
    image: 'https://picsum.photos/1920/600?random=2',
    title: 'Beat the Heat',
    subtitle: 'Advanced Dual Layer Technology'
  }
];

// Business Information - Central Source of Truth
export const BUSINESS_INFO = {
  domain: 'www.royalkingdomtiles.com',
  ownerName: 'T. Karthik',
  companyName: 'Royal Kingdom Tiles',
  gstin: '33IMIPK4311J1Z2',
  phone: '+91 7200660261',
  whatsappNumber: '917200660261',
  email: 'info@royalkingdomtiles.com',
  address: {
    line1: 'NO: 203/9B, Iyyappan Nagar',
    line2: 'Thiruverkadu',
    city: 'Thiruvallur',
    state: 'Tamil Nadu',
    pincode: '600077',
    full: 'NO: 203/9B, Iyyappan Nagar, Thiruverkadu, Thiruvallur - 600077'
  },
  // SEO Keywords
  primaryKeywords: [
    'cool roof tiles',
    'heat reflective tiles',
    'waterproof tiles',
    'terrace cooling tiles',
    'summer cool tiles'
  ],
  // Products
  products: [
    { name: 'Silver Plus', slug: 'silver-plus', price: '65' },
    { name: 'Gold', slug: 'gold', price: '85' },
    { name: 'Elite Silver', slug: 'elite-silver', price: '95' },
    { name: 'Elite Gold', slug: 'elite-gold', price: '120' },
    { name: 'Economy', slug: 'economy', price: '45' }
  ]
};

// Location-specific SEO content for each city
export const LOCATIONS: Location[] = [
  {
    slug: 'chennai',
    name: 'Chennai',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Silver Plus', 'Gold', 'Elite Silver'],
    seoParagraph: `Looking for the best cool roof tiles in Chennai? Royal Kingdom Tiles is Chennai's #1 rated heat reflective tile supplier. Our premium terrace cooling tiles reduce indoor temperature by 10-15°C, perfect for Chennai's hot and humid climate. We offer Silver Plus, Gold, Elite Silver, Elite Gold, and Economy range tiles with 100% waterproofing. Visit our showroom in Thiruverkadu or call ${BUSINESS_INFO.phone} for free consultation. Same-day delivery available across Chennai, Tambaram, Velachery, Anna Nagar, T Nagar, Adyar, and all Chennai suburbs. GSTIN: ${BUSINESS_INFO.gstin}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789!2d80.1122!3d13.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzI0LjEiTiA4MMKwMDYnNDMuOSJF!5e0!3m2!1sen!2sin!4v1234567890',
    seoKeywords: 'cool roof tiles Chennai, heat reflective tiles Chennai, waterproof tiles Chennai, terrace tiles Chennai, roof cooling tiles Chennai, best tiles Chennai, Royal Kingdom Tiles Chennai, summer cooling tiles Chennai'
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Elite Gold', 'Silver Plus', 'Economy'],
    seoParagraph: `Mumbai's trusted cool roof tiles supplier - Royal Kingdom Tiles. Beat the Mumbai heat with our advanced heat reflective tiles that reduce temperature by 10-15°C. Perfect for high-rise buildings, commercial complexes, and residential terraces across Mumbai. Our waterproof tiles protect against heavy monsoon rains. Serving Andheri, Bandra, Powai, Thane, Navi Mumbai, Borivali, and all Mumbai areas. Free delivery on orders above 500 sqft. Contact: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Mumbai, heat reflective tiles Mumbai, waterproof tiles Mumbai, terrace tiles Mumbai, monsoon proof tiles Mumbai, building tiles Mumbai, Royal Kingdom Tiles Mumbai'
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Gold', 'Elite Silver', 'Elite Gold'],
    seoParagraph: `Royal Kingdom Tiles - Delhi NCR's premier cool roof tiles supplier. Our heat reflective tiles are specially designed for Delhi's extreme summer heat, reducing indoor temperature by 10-15°C. Save up to 40% on AC bills! We deliver across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and Greater Noida. Perfect for residential, commercial, and industrial buildings. 10-year warranty available. Call now: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Delhi, heat reflective tiles Delhi NCR, waterproof tiles Delhi, terrace tiles Delhi, AC bill reduction tiles Delhi, Royal Kingdom Tiles Delhi, Noida tiles, Gurgaon tiles'
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Silver Plus', 'Economy', 'Gold'],
    seoParagraph: `Bangalore's leading cool roof tiles supplier - Royal Kingdom Tiles. Our eco-friendly heat reflective tiles are ideal for Bangalore's tech parks, IT buildings, villas, and apartments. Reduce indoor temperature by 10-15°C and save on electricity bills. We serve Whitefield, Electronic City, Koramangala, HSR Layout, Indiranagar, JP Nagar, and all Bangalore areas. Green building certified products available. Contact: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Bangalore, heat reflective tiles Bangalore, waterproof tiles Bangalore, IT park tiles Bangalore, eco friendly tiles Bangalore, Royal Kingdom Tiles Bangalore, Whitefield tiles, Electronic City tiles'
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Elite Gold', 'Elite Silver', 'Silver Plus'],
    seoParagraph: `Royal Kingdom Tiles brings premium cool roof tiles to Hyderabad. Combat the Telangana heat with our advanced dual-layer technology that reduces temperature by 10-15°C. Perfect for HITEC City offices, Gachibowli IT parks, residential complexes in Jubilee Hills, Banjara Hills, and across Secunderabad. 100% waterproof protection. Fast delivery across Hyderabad. Call: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Hyderabad, heat reflective tiles Hyderabad, waterproof tiles Hyderabad, HITEC City tiles, Gachibowli tiles, Royal Kingdom Tiles Hyderabad, Telangana tiles'
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Gold', 'Silver Plus', 'Economy'],
    seoParagraph: `Royal Kingdom Tiles - Kolkata's trusted cool roof tiles supplier. Our heat reflective tiles are perfect for Kolkata's hot and humid summers, reducing indoor temperature by 10-15°C. Waterproof protection against monsoon and Nor'westers. Serving Salt Lake, New Town, Howrah, Park Street, Ballygunge, and all Kolkata areas. Energy-efficient cooling solution for homes and offices. Contact: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Kolkata, heat reflective tiles Kolkata, waterproof tiles Kolkata, monsoon tiles Kolkata, Salt Lake tiles, Royal Kingdom Tiles Kolkata, West Bengal tiles'
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Elite Gold', 'Elite Silver', 'Gold'],
    seoParagraph: `Gujarat's leading cool roof tiles from Royal Kingdom Tiles. Beat Ahmedabad's extreme summer heat with our premium heat reflective tiles. Temperature reduction of 10-15°C, perfect for industrial buildings, textile factories, and residential complexes. Serving Ahmedabad, Gandhinagar, GIFT City, SG Highway, and all Gujarat. Bulk orders welcome. Contact: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Ahmedabad, heat reflective tiles Gujarat, industrial tiles Ahmedabad, factory roof tiles Gujarat, Royal Kingdom Tiles Ahmedabad, GIFT City tiles'
  },
  {
    slug: 'pune',
    name: 'Pune',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Silver Plus', 'Gold', 'Elite Silver'],
    seoParagraph: `Royal Kingdom Tiles brings premium cool roof tiles to Pune. Our heat reflective tiles reduce indoor temperature by 10-15°C, ideal for Pune's IT hubs, residential townships, and commercial buildings. Serving Hinjewadi, Wakad, Baner, Kothrud, PCMC, and all Pune areas. Eco-friendly tiles with 10-year warranty. Free site consultation available. Call: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Pune, heat reflective tiles Pune, Hinjewadi tiles, IT park tiles Pune, waterproof tiles Pune, Royal Kingdom Tiles Pune, Maharashtra tiles'
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Elite Gold', 'Gold', 'Elite Silver'],
    seoParagraph: `Royal Kingdom Tiles - Jaipur's premium cool roof tiles provider. Our tiles are specially designed for Rajasthan's extreme desert heat, offering up to 90% heat reflection and 10-15°C temperature reduction. Perfect for heritage buildings, hotels, palaces, and modern homes. Serving Jaipur, Jodhpur, Udaipur, and all Rajasthan. Desert-proof and UV resistant. Contact: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Jaipur, heat reflective tiles Rajasthan, desert cooling tiles, UV resistant tiles Jaipur, Royal Kingdom Tiles Jaipur, heritage building tiles'
  },
  {
    slug: 'kochi',
    name: 'Kochi',
    whatsappNumber: BUSINESS_INFO.whatsappNumber,
    storeAddressLines: [BUSINESS_INFO.address.line1, BUSINESS_INFO.address.line2, `${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}`],
    heroSlides: baseHero,
    featuredCategories: ['Silver Plus', 'Economy', 'Gold'],
    seoParagraph: `Royal Kingdom Tiles brings premium cool roof tiles to Kochi and Kerala. Our waterproof heat reflective tiles are perfect for Kerala's tropical climate and heavy monsoons. 100% leak-proof protection with 10-15°C temperature reduction. Serving Kochi, Trivandrum, Calicut, Thrissur, and all Kerala. Monsoon-proof tiles with anti-fungal coating. Contact: ${BUSINESS_INFO.phone}`,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
    seoKeywords: 'cool roof tiles Kochi, heat reflective tiles Kerala, monsoon proof tiles Kerala, waterproof tiles Kochi, Royal Kingdom Tiles Kerala, tropical climate tiles'
  }
];

// Export all location slugs for SEO sitemap
export const LOCATION_SLUGS = LOCATIONS.map(loc => loc.slug);

// Export product slugs for SEO
export const PRODUCT_SLUGS = BUSINESS_INFO.products.map(p => p.slug);

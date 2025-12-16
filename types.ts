export interface Location {
  slug: string;
  name: string;
  whatsappNumber: string;
  storeAddressLines: string[];
  heroSlides: { image: string; title: string; subtitle: string }[];
  featuredCategories: string[];
  seoParagraph: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  sku: string;
  images: string[];
  category: string;
  application: string[];
  collection: string;
  size: string;
  finish: string;
  color: string;
  shortDesc: string;
  price?: number; // Optional, tiles usually require inquiry
}

export interface FilterState {
  category: string[];
  application: string[];
  collection: string[];
  size: string[];
  finish: string[];
  color: string[];
}
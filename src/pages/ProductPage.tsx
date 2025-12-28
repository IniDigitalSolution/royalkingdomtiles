import React, { useMemo, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { getProductBySlug, FEATURED_PRODUCTS } from '../data/featuredProducts';
import SEO from '../components/SEO';
import { Button } from '../components/ui/Button';

// Icon components
const ThermometerIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const DropletIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-10 h-10 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-10 h-10 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const FactoryIcon = () => (
  <svg className="w-10 h-10 text-[#15508b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'thermometer': return <ThermometerIcon />;
    case 'shield-check': return <ShieldCheckIcon />;
    case 'sun': return <SunIcon />;
    case 'cloud': return <CloudIcon />;
    case 'bolt': return <BoltIcon />;
    case 'calendar': return <CalendarIcon />;
    case 'droplet': return <DropletIcon />;
    case 'shield': return <ShieldIcon />;
    case 'sparkles': return <SparklesIcon />;
    case 'wallet': return <BoltIcon />;
    case 'home': return <HomeIcon />;
    case 'building': return <BuildingIcon />;
    case 'factory': return <FactoryIcon />;
    default: return <HomeIcon />;
  }
};

export const ProductPage: React.FC<{ forcedSlug?: string }> = ({ forcedSlug }) => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { currentLocation } = useLocationData();
  const location = useLocation();
  const effectiveSlug = forcedSlug || productSlug || '';
  const product = getProductBySlug(effectiveSlug);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    const raw = [product.images.front, product.images.bottom, product.images.breakView].filter(Boolean) as string[];
    // de-dupe (many featured products reuse the same asset for all three)
    return raw.filter((src, idx) => raw.indexOf(src) === idx);
  }, [product]);

  const safeImageIndex = useMemo(() => {
    if (galleryImages.length === 0) return 0;
    return Math.min(selectedImage, galleryImages.length - 1);
  }, [galleryImages.length, selectedImage]);

  const specLookup = useMemo(() => {
    const map = new Map<string, string>();
    if (!product) return map;
    product.specifications.forEach(s => map.set(s.feature.toLowerCase(), s.details));
    return map;
  }, [product]);

  const specCards = useMemo(() => {
    if (!product) return [];
    const pick = (k: string) => specLookup.get(k.toLowerCase());
    const application = product.applications.map(a => a.name).join(', ');
    return [
      { label: 'Size', value: pick('Size') },
      { label: 'Thickness', value: pick('Total Thickness') },
      { label: 'Color', value: pick('Color') },
      { label: 'Solar Reflectance', value: pick('Solar Reflectance') },
      { label: 'Water Absorption', value: pick('Water Absorption') },
      { label: 'Surface Type', value: pick('Surface Type') },
      { label: 'Lifespan', value: pick('Lifespan') },
      { label: 'Application', value: application },
    ].filter(s => !!s.value) as Array<{ label: string; value: string }>;
  }, [product, specLookup]);

  const handleWhatsAppOrder = () => {
    if (!product) return;
    const text = `Hi, interested in ${product.name} (${product.tagline}). Please share pricing and availability.`;
    window.open(`https://wa.me/${currentLocation.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // SEO landing pages (Chennai) — use exact meta copy as provided.
  const normalizedPath = (location.pathname || '/').replace(/\/+$/, '') || '/';
  const landingMeta: Record<string, { title: string; description: string }> = {
    '/cool-roof-tiles-in-chennai': {
      title: 'Cool Roof Tiles in Chennai | Low Cost Heat Resistant Terrace Tiles',
      description:
        'Buy cool roof tiles in Chennai at low cost from Royal Kingdom Tiles. UV-resistant, heat proof, water-resistant terrace tiles for homes & buildings. Best price & top quality.'
    },
    // Elite Silver (new preferred URL)
    '/cool-roof-tiles-price-chennai': {
      title: 'Affordable Cool Roof Tiles Price in Chennai | Budget-Friendly Terrace Cooling',
      description:
        'Explore affordable cool roof tiles price in Chennai with Royal Kingdom Tiles. Cost-effective cooling tiles for homes & commercial roofs. Save electricity, reduce heat, best value guaranteed.'
    },
    // Elite Silver (legacy/alias URL kept for safety)
    '/affordable-cool-roof-tiles-price-chennai': {
      title: 'Affordable Cool Roof Tiles Price in Chennai | Budget-Friendly Terrace Cooling',
      description:
        'Explore affordable cool roof tiles price in Chennai with Royal Kingdom Tiles. Cost-effective cooling tiles for homes & commercial roofs. Save electricity, reduce heat, best value guaranteed.'
    },
    '/cooling-tiles-in-chennai': {
      title: 'Cooling Tiles in Chennai | Terrace Heat Control Tiles for Homes & Flats',
      description:
        'Buy cooling tiles in Chennai for terrace, roof & balconies. Improve heat resistance, reduce room temperature and protect your home from UV exposure. Quality tiles with long-term durability.'
    },
    '/cooling-tiles-price-in-chennai': {
      title: 'Cooling Tiles Price in Chennai | Royal Kingdom Tiles Best Rate Offers',
      description:
        'Check cooling tiles price in Chennai from Royal Kingdom Tiles. Compare rates for roof & terrace cooling solutions designed to reduce heat and improve indoor comfort across all property types.'
    }
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-20 header-gradient"></div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link 
              to={`/${currentLocation.slug}`}
              className="inline-block bg-[#15508b] text-white px-8 py-3 rounded font-semibold hover:bg-[#0f3d6b] transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={landingMeta[normalizedPath]?.title || `${product.name} Cool Roof Tiles | Best Price in ${currentLocation.name} | Royal Kingdom Tiles`}
        description={landingMeta[normalizedPath]?.description || `🏆 Buy ${product.name} Cool Roof Tiles in ${currentLocation.name} at Best Price. ${product.tagline}. ✓ 90% Heat Reflection ✓ 100% Waterproof ✓ 10 Year Warranty ✓ Free Delivery. Reduce indoor temperature by 10-15°C. ${product.heroDescription} Call Now: +91 7200660261`}
        keywords={`${product.name} tiles, ${product.name} tiles price, ${product.name} cool roof tiles ${currentLocation.name}, ${product.name} heat reflective tiles, buy ${product.name} tiles ${currentLocation.name}, ${product.name} tiles near me, Royal Kingdom Tiles ${product.name}, best ${product.name} tiles India`}
        type="product"
        productName={product.name}
        productPrice="65"
      />
      <div className="flex flex-col">
        {/* Top spacer for fixed header */}
        <div className="h-20 header-gradient"></div>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-500 mb-8 uppercase">
            <Link to={currentLocation.slug === 'chennai' ? '/' : `/${currentLocation.slug}`} className="hover:text-[#15508b]">Home</Link> /{' '}
            <Link to={currentLocation.slug === 'chennai' ? '/roof-tiles-products-chennai' : `/${currentLocation.slug}/tiles`} className="hover:text-[#15508b]">Tiles</Link> /{' '}
            <span className="text-gray-900 font-bold">{product.shortName}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Gallery */}
            <div className="lg:w-1/2">
              <div className="w-full aspect-square bg-white mb-4 rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                <img src={galleryImages[safeImageIndex]} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {galleryImages.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-24 h-24 shrink-0 rounded overflow-hidden border-2 ${safeImageIndex === idx ? 'border-[#15508b]' : 'border-transparent'}`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={src} alt="Thumbnail" className="w-full h-full object-contain bg-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-secondary mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500 mb-6">{product.tagline}</p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                <h3 className="font-bold text-lg mb-4 uppercase text-gray-800">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  {specCards.map(s => (
                    <div key={s.label}>
                      <span className="block text-gray-500">{s.label}</span>
                      <span className="font-semibold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.heroDescription} {product.detailedDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsAppOrder} className="bg-[#25D366] hover:bg-[#128C7E] flex-1">
                  Order on WhatsApp
                </Button>
                <a href={`tel:${currentLocation.phone}`} className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

    </div>
    </>
  );
};


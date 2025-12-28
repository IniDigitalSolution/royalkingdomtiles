import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { getProductBySlug, FEATURED_PRODUCTS } from '../data/featuredProducts';
import SEO from '../components/SEO';

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
        description={landingMeta[normalizedPath]?.description || `🏆 Buy ${product.name} Cool Roof Tiles in ${currentLocation.name} at Best Price. ${product.tagline}. ✓ 90% Heat Reflection ✓ 100% Waterproof ✓ ${product.warranty || '10 Year'} Warranty ✓ Free Delivery. Reduce indoor temperature by 10-15°C. ${product.heroDescription} Call Now: +91 7200660261`}
        keywords={`${product.name} tiles, ${product.name} tiles price, ${product.name} cool roof tiles ${currentLocation.name}, ${product.name} heat reflective tiles, buy ${product.name} tiles ${currentLocation.name}, ${product.name} tiles near me, Royal Kingdom Tiles ${product.name}, best ${product.name} tiles India`}
        type="product"
        productName={product.name}
        productPrice={product.price || '65'}
      />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative header-gradient text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-noise"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {product.name} — {product.tagline}
          </h1>
          <h2 className="text-lg md:text-xl mb-6 text-white/80">
            for a Cooler, Leak-Free Terrace in {currentLocation.name}
          </h2>
          <p className="text-white/90 max-w-4xl leading-relaxed mb-4">
            {product.heroDescription}
          </p>
          <p className="text-white/80 max-w-4xl leading-relaxed">
            {product.detailedDescription}
          </p>
        </div>
      </section>

      {/* Product Images Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Front View */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">RK</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Royal Kingdom</div>
                      <div className="text-[10px] opacity-80">Cool Roof Tiles</div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-800">15 YR</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4">MODEL NAME : <span className="text-yellow-300">{product.shortName.toUpperCase()}</span></h3>
              </div>
              <div className="bg-white p-8 aspect-square flex items-center justify-center">
                <img 
                  src={product.images.front} 
                  alt={`${product.name} Front View`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x300?text=Front+View';
                  }}
                />
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-center text-white font-semibold">
                FRONT VIEW
              </div>
            </div>

            {/* Bottom View */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">RK</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Royal Kingdom</div>
                      <div className="text-[10px] opacity-80">Cool Roof Tiles</div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-800">15 YR</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4">MODEL NAME : <span className="text-yellow-300">{product.shortName.toUpperCase()}</span></h3>
              </div>
              <div className="bg-white p-8 aspect-square flex items-center justify-center">
                <img 
                  src={product.images.bottom} 
                  alt={`${product.name} Bottom View`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x300?text=Bottom+View';
                  }}
                />
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-center text-white font-semibold">
                BOTTOM VIEW
              </div>
            </div>

            {/* Break View */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">RK</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Royal Kingdom</div>
                      <div className="text-[10px] opacity-80">Cool Roof Tiles</div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-800">15 YR</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4">MODEL NAME : <span className="text-yellow-300">{product.shortName.toUpperCase()}</span></h3>
              </div>
              <div className="bg-gray-100 p-8 aspect-square flex items-center justify-center relative">
                <div className="absolute top-4 right-4 text-xs text-gray-600">
                  <div>7MM Cooling Minerals</div>
                </div>
                <img 
                  src={product.images.breakView} 
                  alt={`${product.name} Break View`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x300?text=Break+View';
                  }}
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                  <div>8MM Concrete</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-center text-white font-semibold">
                TILE BREAK VIEW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Layer Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              Engineered for Performance — Dual Layer Technology
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {product.shortName} is manufactured using a thick composite structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {product.layers.map((layer, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className={`p-4 ${layer.color === 'cyan' ? 'bg-cyan-500' : 'bg-gray-600'} text-white`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${layer.color === 'cyan' ? 'bg-cyan-300' : 'bg-gray-400'}`}></div>
                    <h3 className="font-semibold">{layer.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {layer.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3 text-gray-700 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <span className="text-gray-400">•</span>
                        <span dangerouslySetInnerHTML={{ 
                          __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Best Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              Why {product.shortName} is the Best Cool Roof Tile in {currentLocation.name}
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {product.whyBest.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {getIcon(feature.icon)}
                </div>
                <p className="text-gray-700 font-medium">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              {product.shortName} Technical Specifications
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#15508b] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="text-left px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{spec.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{spec.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              Key Benefits of {product.shortName} Cool Roof Tiles
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getIcon(benefit.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-[#15508b]">🔹</span> {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ 
                      __html: benefit.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              Ideal Applications
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {product.applications.map((app, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow hover:border-[#15508b]">
                <div className="flex justify-center mb-3">
                  {getIcon(app.icon)}
                </div>
                <p className="text-gray-700 text-sm font-medium">{app.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#15508b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Get {product.shortName} for Your Terrace?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts will help you choose the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${currentLocation.whatsappNumber}?text=Hi, I'm interested in ${product.name}. Please share pricing and availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded font-semibold hover:bg-[#128C7E] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${currentLocation.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#15508b] px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {currentLocation.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Explore Our Other Products
            </h2>
            <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {FEATURED_PRODUCTS.filter(p => p.slug !== product.slug).map((otherProduct) => (
              <Link
                key={otherProduct.id}
                to={`/${currentLocation.slug}/products/${otherProduct.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-[#15508b] transition-all group"
              >
                <h3 className="font-semibold text-gray-800 group-hover:text-[#15508b] transition-colors">
                  {otherProduct.shortName}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{otherProduct.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/${currentLocation.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
    </>
  );
};


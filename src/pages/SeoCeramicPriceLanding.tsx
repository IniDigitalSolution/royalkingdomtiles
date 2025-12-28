import React from 'react';
import { Link } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { PRODUCTS } from '../data/products';
import SEO from '../components/SEO';
import { getChennaiSeoProductUrl } from '../utils/seoLinks';

export const SeoCeramicPriceLanding: React.FC = () => {
  const { currentLocation } = useLocationData();

  const tilesLink =
    currentLocation.slug === 'chennai'
      ? `/roof-tiles-products-chennai?category=${encodeURIComponent('Ceramic Cool Roof Tiles')}`
      : `/${currentLocation.slug}/tiles?category=${encodeURIComponent('Ceramic Cool Roof Tiles')}`;

  const ceramicModels = PRODUCTS.filter(p => p.category === 'Ceramic Cool Roof Tiles').slice(0, 3);
  const getProductLink = (slug: string) => {
    if (currentLocation.slug === 'chennai') {
      const seoUrl = getChennaiSeoProductUrl(slug);
      if (seoUrl) return seoUrl;
    }
    return `/${currentLocation.slug}/tiles/${slug}`;
  };

  return (
    <>
      <SEO
        title="Ceramic Cool Roof Tiles Price Chennai | Royal Kingdom Tiles Best Rate Deals"
        description="Check ceramic cool roof tiles price in Chennai from Royal Kingdom Tiles. Heat-reflective ceramic roofing, energy-saving terrace tiles & UV-shield finish at the best rate for homes & buildings."
      />

      <div className="flex flex-col">
        <section className="relative header-gradient text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Ceramic Cool Roof Tiles Price in Chennai
            </h1>
            <p className="text-white/90 max-w-4xl leading-relaxed">
              Heat-reflective ceramic roofing for cooler terraces — energy-saving tiles with UV-shield finish at the best
              rate for homes &amp; buildings.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to={tilesLink}
                className="inline-flex items-center justify-center bg-white text-[#15508b] px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
              >
                View Ceramic Cool Roof Tiles
              </Link>
              <Link
                to={currentLocation.slug === 'chennai' ? '/contact-cool-roof-tiles-dealer-chennai' : `/${currentLocation.slug}/contact`}
                className="inline-flex items-center justify-center border border-white/60 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Get Price / Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Popular Ceramic Models</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ceramicModels.map(p => (
                <Link
                  key={p.slug}
                  to={getProductLink(p.slug)}
                  className="group rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="aspect-square bg-white flex items-center justify-center">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-secondary group-hover:text-[#15508b] transition-colors">{p.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{p.finish} • {p.size}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};



import React from 'react';
import { Link } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import SEO from '../components/SEO';

export const SeoClayLanding: React.FC = () => {
  const { currentLocation } = useLocationData();

  const catalogLink =
    currentLocation.slug === 'chennai'
      ? `/roof-tiles-products-chennai?category=${encodeURIComponent('Clay Tiles')}`
      : `/${currentLocation.slug}/tiles?category=${encodeURIComponent('Clay Tiles')}`;

  return (
    <>
      <SEO
        title="Clay Roof Tiles in Chennai | Weathering Tiles & Terracotta Tiles – Royal Kingdom Tiles"
        description="Buy clay roof tiles in Chennai from Royal Kingdom Tiles. Premium weathering tiles and terracotta tiles for homes, villas & commercial buildings. Heat-resistant, long-lasting & traditional finish."
      />

      <div className="flex flex-col">
        {/* Hero */}
        <section className="relative header-gradient text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Clay Roof Tiles in Chennai
            </h1>
            <p className="text-white/90 max-w-3xl leading-relaxed">
              Premium weathering tiles and terracotta tiles for homes, villas &amp; commercial buildings — heat-resistant,
              long-lasting, and a traditional finish that suits Chennai’s climate.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to={catalogLink}
                className="inline-flex items-center justify-center bg-white text-[#15508b] px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
              >
                View Clay Roof Tiles
              </Link>
              <Link
                to={currentLocation.slug === 'chennai' ? '/contact-cool-roof-tiles-dealer-chennai' : `/${currentLocation.slug}/contact`}
                className="inline-flex items-center justify-center border border-white/60 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Quick content */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="font-bold text-secondary mb-2">Traditional Look</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Terracotta-style clay tiles that enhance the roof’s appearance with an authentic finish.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="font-bold text-secondary mb-2">Weathering Protection</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built to handle sun and seasonal rains with durable, long-lasting performance.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="font-bold text-secondary mb-2">Right Guidance</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Visit our showroom to compare models and choose the best option for your roof.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};



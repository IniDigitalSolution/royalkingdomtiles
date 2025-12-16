import React from 'react';
import { useLocationData } from '../context/LocationContext';

export const AboutUs: React.FC = () => {
  const { currentLocation } = useLocationData();

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden header-gradient text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">About Us</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Your Trusted Partner in Premium Tiles</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Our Story */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary uppercase mb-2">Our Story</h2>
            <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://picsum.photos/800/600?random=100"
                alt="Our Store"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                For over two decades, we've been transforming homes and commercial spaces across India with our premium tile collections.
                What started as a small showroom in {currentLocation.name} has grown into a trusted name in the tile industry.
              </p>
              <p>
                Our passion for quality and design excellence drives everything we do. We curate the finest ceramic, vitrified,
                and designer tiles from leading manufacturers to bring you unparalleled choice and quality.
              </p>
              <p>
                Today, we serve customers across multiple locations, each showroom tailored to meet the unique needs and
                aesthetic preferences of the local community while maintaining our commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary uppercase mb-2">Our Values</h2>
              <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#15508b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15508b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every tile in our collection meets rigorous quality standards. We partner only with certified manufacturers
                  who share our commitment to excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#15508b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15508b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. Our expert team provides personalized guidance to help you find
                  the perfect tiles for your space.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#15508b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15508b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of design trends, constantly updating our collection with the latest styles, finishes,
                  and technologies in tile manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary uppercase mb-2">Why Choose Us</h2>
            <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#15508b] text-white rounded-full flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Extensive Collection</h3>
                <p className="text-gray-600">
                  From classic ceramics to modern vitrified tiles, we offer an extensive range of sizes, finishes, and designs
                  to suit every style and budget.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#15508b] text-white rounded-full flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Expert Consultation</h3>
                <p className="text-gray-600">
                  Our knowledgeable staff provides professional guidance on tile selection, installation techniques,
                  and maintenance tips.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#15508b] text-white rounded-full flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Direct partnerships with manufacturers allow us to offer premium quality tiles at competitive prices,
                  delivering excellent value.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#15508b] text-white rounded-full flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Quick Delivery</h3>
                <p className="text-gray-600">
                  With efficient logistics and local warehousing, we ensure your tiles reach you on time, every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location-Specific Message */}
        <section className="bg-[#15508b] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our {currentLocation.name} Showroom</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Experience our collection in person. Our {currentLocation.name} team is ready to help you transform your space
            with the perfect tiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${currentLocation.phone}`}
              className="inline-block bg-white text-[#15508b] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
            >
              Call Us: {currentLocation.phone}
            </a>
            <a
              href={`https://wa.me/${currentLocation.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded font-bold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

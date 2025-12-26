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
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">ABOUT US</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Royal Kingdom – Premium Terrace &amp; Roof Tile Solutions for Modern Living</p>
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
                Royal Kingdom stands as a trusted name in premium roofing and terrace tile solutions, offering advanced cool roof tiles, vitrified tiles, ceramic tiles, and heat-resistant terrace products engineered for long-term performance. With a focus on quality, durability, and climate-responsive technology, we serve homeowners, builders, architects, and commercial clients across {currentLocation.name} and beyond.
              </p>
              <p className="text-lg font-semibold text-secondary">
                Every product we deliver reflects our core belief: Protect the roof. Enhance the space. Improve the lifestyle.
              </p>
              <p>
                Royal Kingdom began with a vision — a vision shaped by Mr. T. Karthick, our Managing Director, whose dedication, planning, and industry expertise helped transform a small single-unit showroom in {currentLocation.name} into a brand recognized for trust and quality.
              </p>
              <p>
                From the very beginning, Mr. Karthick identified the need for reliable, weather-resistant terrace and roof solutions suited to Indian climatic conditions. His leadership has guided the brand through continuous innovation, technical improvements, and partnerships with certified manufacturers to ensure unmatched quality for customers.
              </p>
              <div className="space-y-2">
                <p>Today, Royal Kingdom serves customers across multiple regions, offering:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Products tailored for extreme heat and monsoon protection</li>
                  <li>A curated material selection based on performance and aesthetics</li>
                  <li>Customer-focused guidance from knowledgeable professionals</li>
                </ul>
              </div>
              <p>
                With each passing year, our brand grows stronger — built on ethics, consistent delivery, and customer trust.
              </p>
            </div>
          </div>
        </section>

        {/* Our Brand Principles */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary uppercase mb-2">Our Brand Principles</h2>
              <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Excellence Without Compromise',
                  desc: 'Every product undergoes strict quality checks for durability, heat resistance, and real-world performance.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
                {
                  title: 'Design With Purpose',
                  desc: 'Tiles are solutions: engineered to reduce heat, protect structures, and elevate terraces and outdoor living.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                  ),
                },
                {
                  title: 'People-Focused Service',
                  desc: 'From selection to after-sales, our team provides clear, honest guidance and expert advice.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M9 10a4 4 0 118 0 4 4 0 01-8 0zm-6 4a4 4 0 117.33-2" />
                  ),
                },
                {
                  title: 'Built for Indian Climate',
                  desc: 'Optimized for Chennai’s coastal conditions, heat-heavy regions, and high-temperature rooftops.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 108 0 4 4 0 10-8 0zm10-4h8m-4-4v8" />
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-[#15508b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15508b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guiding Commitments */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary uppercase mb-2">Guiding Commitments</h2>
            <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Integrity & Trust',
                desc: 'We operate with transparency, delivering what we promise without compromise.',
              },
              {
                title: 'Innovation & Progress',
                desc: 'We constantly update materials, styles, and heat-control technologies to stay ahead of evolving construction needs.',
              },
              {
                title: 'Customer Priority',
                desc: 'Every customer matters. Every project, big or small, receives the same level of commitment.',
              },
              {
                title: 'Long-Term Performance',
                desc: 'We focus on durability, maintenance reduction, and structural protection — not temporary solutions.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary uppercase mb-2">Why Choose Us</h2>
            <div className="w-16 h-1 bg-[#15508b] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Climate-Engineered Tiles',
                desc: 'Designed specifically for terraces and roofs in hot, coastal, and monsoon-prone zones.',
              },
              {
                title: 'Direct Manufacturer Partnerships',
                desc: 'No middlemen — ensuring consistent quality and value-driven pricing.',
              },
              {
                title: 'Knowledge-Based Consultation',
                desc: 'Guidance on installation methods, durability, suitability, and usage areas for confident decision making.',
              },
              {
                title: 'On-Time Delivery & Stock Readiness',
                desc: 'Local supply chains and organized warehousing help us deliver faster project timelines.',
              },
              {
                title: 'Trusted By Thousands',
                desc: 'From individual homeowners to commercial properties, our customer base grows through referrals and trust.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#15508b] text-white rounded-full flex items-center justify-center font-bold">{idx + 1}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location-Specific Message */}
        <section className="bg-[#15508b] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">VISIT OUR {currentLocation.name.toUpperCase()} SHOWROOM</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Experience products in person, compare finishes, and choose confidently with the help of our trained team.
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


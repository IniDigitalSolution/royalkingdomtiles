import React from 'react';
import { Link } from 'react-router-dom';
import { useLocationData } from '../../context/LocationContext';

interface DesignCategory {
  id: number;
  title: string;
  image: string;
  category: string;
}

const DESIGN_CATEGORIES: DesignCategory[] = [
  {
    id: 1,
    title: 'Room Designs',
    image: 'https://picsum.photos/800/600?random=301',
    category: 'Living Room'
  },
  {
    id: 2,
    title: 'Bathroom Designs',
    image: 'https://picsum.photos/800/600?random=302',
    category: 'Bathroom'
  },
  {
    id: 3,
    title: 'Pavement Designs',
    image: 'https://picsum.photos/800/600?random=303',
    category: 'Outdoor'
  },
  {
    id: 4,
    title: 'Living Room Designs',
    image: 'https://picsum.photos/800/600?random=304',
    category: 'Living Room'
  }
];

export const DesignCategories: React.FC = () => {
  const { currentLocation } = useLocationData();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-4">
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            All Tiles
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Wall Tiles
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Floor Tiles
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Allthanqual Tiles
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Aqua Faucet
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Sanitaryware
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Kitchen Sink
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Flush Tank
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            PTMT Taps
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Adhesive And Grout
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            Business Opportunity
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-[#15508b] transition-colors">
            More
          </button>
        </div>

        {/* Design Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGN_CATEGORIES.map((design) => (
            <Link
              key={design.id}
              to={`/${currentLocation.slug}/tiles?category=${design.category}`}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-bold text-xl">{design.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

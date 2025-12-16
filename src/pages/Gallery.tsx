import React, { useState } from 'react';
import { useLocationData } from '../context/LocationContext';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://picsum.photos/800/600?random=201', title: 'Modern Living Room', category: 'Living Room' },
  { id: 2, url: 'https://picsum.photos/800/600?random=202', title: 'Luxury Bathroom', category: 'Bathroom' },
  { id: 3, url: 'https://picsum.photos/800/600?random=203', title: 'Contemporary Kitchen', category: 'Kitchen' },
  { id: 4, url: 'https://picsum.photos/800/600?random=204', title: 'Elegant Bedroom', category: 'Bedroom' },
  { id: 5, url: 'https://picsum.photos/800/600?random=205', title: 'Outdoor Patio', category: 'Outdoor' },
  { id: 6, url: 'https://picsum.photos/800/600?random=206', title: 'Office Space', category: 'Commercial' },
  { id: 7, url: 'https://picsum.photos/800/600?random=207', title: 'Master Bathroom', category: 'Bathroom' },
  { id: 8, url: 'https://picsum.photos/800/600?random=208', title: 'Open Kitchen', category: 'Kitchen' },
  { id: 9, url: 'https://picsum.photos/800/600?random=209', title: 'Living Area', category: 'Living Room' },
  { id: 10, url: 'https://picsum.photos/800/600?random=210', title: 'Garden Pathway', category: 'Outdoor' },
  { id: 11, url: 'https://picsum.photos/800/600?random=211', title: 'Guest Bedroom', category: 'Bedroom' },
  { id: 12, url: 'https://picsum.photos/800/600?random=212', title: 'Reception Area', category: 'Commercial' },
  { id: 13, url: 'https://picsum.photos/800/600?random=213', title: 'Powder Room', category: 'Bathroom' },
  { id: 14, url: 'https://picsum.photos/800/600?random=214', title: 'Breakfast Nook', category: 'Kitchen' },
  { id: 15, url: 'https://picsum.photos/800/600?random=215', title: 'Dining Hall', category: 'Living Room' },
  { id: 16, url: 'https://picsum.photos/800/600?random=216', title: 'Balcony Design', category: 'Outdoor' },
];

const CATEGORIES = ['All', 'Living Room', 'Bathroom', 'Kitchen', 'Bedroom', 'Outdoor', 'Commercial'];

export const Gallery: React.FC = () => {
  const { currentLocation } = useLocationData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden header-gradient text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">Gallery</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Inspiring Tile Installations from {currentLocation.name}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore our gallery of stunning tile installations. From contemporary homes to commercial spaces,
            see how our premium tiles bring spaces to life. Get inspired for your next project!
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#15508b] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mb-16">
          <ul className="flex flex-wrap list-none m-0 p-0">
            {filteredImages.map(image => (
              <li key={image.id} className="flex p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <div
                  className="bg-white rounded shadow-[0_20px_40px_-14px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden group hover:shadow-2xl transition-shadow duration-300 w-full cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <div
                    className="relative overflow-hidden bg-center bg-no-repeat bg-cover rounded-t transition-all duration-500 ease-in-out group-hover:contrast-100 contrast-75"
                    style={{ backgroundImage: `url(${image.url})` }}
                  >
                    <div className="pb-[56.25%] md:pb-[66.6%]" />
                    {/* Zoom Icon */}
                    <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col p-4">
                    <h3 className="text-gray-700 text-lg font-light tracking-[2px] uppercase mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-xs uppercase tracking-wider">
                      {image.category}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit our {currentLocation.name} showroom to see our full collection in person and get expert advice
            from our design consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${currentLocation.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
            >
              Get Free Consultation
            </a>
            <a
              href={`/${currentLocation.slug}/tiles`}
              className="inline-block bg-[#15508b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#15508b]-dark transition-colors shadow-md hover:shadow-lg"
            >
              Browse Catalog
            </a>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-white/80 text-lg">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

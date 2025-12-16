import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mouli',
    location: 'Trichy',
    text: 'I had a fantastic experience with this company. Their customer service was friendly and responsive. Everything was handled quickly and professionally. The quality of the product/service was outstanding. I would definitely recommend them to others!'
  },
  {
    id: 2,
    name: 'Murugan',
    location: 'Madurai',
    text: 'The product I received was even better than expected. It was delivered on time and in perfect condition. The craftsmanship and attention to detail were impressive. Customer support was helpful and very knowledgeable!'
  },
  {
    id: 3,
    name: 'Jakan',
    location: 'Kanyakumari',
    text: 'I had a fantastic experience with this company. Their customer service was friendly and responsive. Everything was handled quickly and professionally. The quality of the tiles was outstanding. I would definitely recommend them!'
  },
  {
    id: 4,
    name: 'Priya',
    location: 'Chennai',
    text: 'Excellent quality tiles and professional installation guidance. The team was very helpful in selecting the right tiles for our home. Highly satisfied with the entire experience!'
  },
  {
    id: 5,
    name: 'Rajesh',
    location: 'Coimbatore',
    text: 'Best tile showroom in the city! Wide variety of designs and competitive pricing. The staff was knowledgeable and patient with all our questions. Will definitely come back for future projects.'
  },
  {
    id: 6,
    name: 'Lakshmi',
    location: 'Salem',
    text: 'Amazing collection of tiles with modern designs. The delivery was prompt and all tiles arrived in perfect condition. Great customer service from start to finish!'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const visibleTestimonials = TESTIMONIALS.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">What Client Says About Us</h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#15508b] hover:text-white'
              }`}
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentIndex >= maxIndex
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-cyan-500 text-white hover:bg-cyan-600'
              }`}
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>

                {/* Name and Location */}
                <div>
                  <h4 className="font-bold text-secondary text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-cyan-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

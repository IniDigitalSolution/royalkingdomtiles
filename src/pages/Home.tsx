import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { Button } from '../components/ui/Button';
import { DesignCategories } from '../components/designs/DesignCategories';
import { Testimonials } from '../components/testimonials/Testimonials';
import SEO from '../components/SEO';

// Hero slides base data for the main slider - Kajaria style
const heroSlidesBase = [
  {
    image: '/Home Page Slide/Ceramic_Cool_Roof_Tiles_in_Chennai_3.png',
    title: 'Beat the Heat\nStay Cool',
    subtitle: 'Premium cool roof tiles that reduce indoor temperature by 10-15°C. Energy efficient, eco-friendly solutions for your home.',
    productSlug: 'silver-plus'
  },
  {
    image: '/Home Page Slide/Clay_Roof_Tiles_in_Chennai_4.png',
    title: 'Shaping Dreams\nInto Living Spaces',
    subtitle: 'Advanced dual-layer technology for maximum heat reflection and waterproof protection.',
    productSlug: 'gold'
  },
  {
    image: '/Home Page Slide/Cool_Roof_Tiles_Dealer_in_Chennai_1.jpeg',
    title: 'Where Quality\nMeets Innovation',
    subtitle: '90% heat reflection, 100% waterproof. Built to endure, designed to impress.',
    productSlug: 'elite-gold'
  },
  {
    image: '/Home Page Slide/Cooling_Roof_Tiles_in_Chennai_2.png',
    title: 'Beauty That Lasts\nBeyond Seasons',
    subtitle: 'Our cool roof tiles bring lasting beauty and comfort to every season.',
    productSlug: 'elite-silver'
  }
];

// Gallery images for Recent Work
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&h=800&fit=crop', title: 'Modern Living' },
  { id: 2, src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&h=800&fit=crop', title: 'Luxury Interior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&h=800&fit=crop', title: 'Designer Space' },
  { id: 4, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=800&fit=crop', title: 'Elegant Home' },
  { id: 5, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=800&fit=crop', title: 'Premium Tiles' },
];

export const Home: React.FC = () => {
  const { currentLocation } = useLocationData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const collectionsRef = useRef<HTMLDivElement>(null);

  // Create heroSlides with dynamic location links
  const heroSlides = heroSlidesBase.map(slide => ({
    ...slide,
    link: `/${currentLocation.slug}/products/${slide.productSlug}`
  }));

  // Scroll collections carousel
  const scrollCollections = (direction: 'left' | 'right') => {
    if (collectionsRef.current) {
      const scrollAmount = 370; // Card width + gap
      collectionsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Navigate gallery
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentGallerySlide(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
    } else {
      setCurrentGallerySlide(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
    }
  };

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO 
        title={`Cool Roof Tiles in ${currentLocation.name} | Heat Reflective Tiles | ₹45/sqft`}
        description={`🏆 #1 Cool Roof Tiles in ${currentLocation.name}. Royal Kingdom Tiles offers premium heat reflective tiles - reduce temperature by 10-15°C. ✓ 90% Heat Reflection ✓ 100% Waterproof ✓ 10 Year Warranty ✓ Free Delivery. Silver Plus, Gold, Elite Silver, Elite Gold, Economy. Best Price Guaranteed! Call: +91 7200660261`}
        keywords={`cool roof tiles ${currentLocation.name}, best cool roof tiles ${currentLocation.name}, heat reflective tiles ${currentLocation.name}, waterproof tiles ${currentLocation.name}, terrace cooling tiles ${currentLocation.name}, summer cool tiles ${currentLocation.name}, roof tiles price ${currentLocation.name}, Royal Kingdom Tiles ${currentLocation.name}, heat resistant tiles ${currentLocation.name}, thermal insulation tiles ${currentLocation.name}, AC bill reduction tiles ${currentLocation.name}`}
      />
    <div className="flex flex-col">
      {/* Hero Section - Kajaria Style Full Screen Slider */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen w-full overflow-hidden bg-white pt-16 md:pt-0">
        {/* Hero Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          >
            {/* Image only */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-contain sm:object-cover object-center"
              />
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center text-white hover:text-white transition-all z-20 group"
          aria-label="Previous slide"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-white/40 bg-black/35 group-hover:bg-black/55 group-hover:border-white/70 transition-colors backdrop-blur-[2px]"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          </div>
        </button>
        
        {/* Right Arrow */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center text-white hover:text-white transition-all z-20 group"
          aria-label="Next slide"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-white/40 bg-black/35 group-hover:bg-black/55 group-hover:border-white/70 transition-colors backdrop-blur-[2px]"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
          </div>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? 'bg-white w-8 md:w-10' 
                  : 'bg-white/40 hover:bg-white/60 w-2.5 md:w-3'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

        {/* Content sections below hero */}
        <div className="flex flex-col gap-1 pb-14 pt-0">

      {/* Find Tiles by Category */}
        <section 
          className="py-2 md:py-12 relative -mt-9 md:mt-8"
        style={{ 
          backgroundImage: 'url(/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-medium text-secondary mb-6">Discover Tiles by Category</h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Royal Kingdom offers advanced cool roof tiles, terracotta tiles, ceramic and vitrified roofing solutions, along with premium tile grout and anti-leakage oil (grout admixture) for superior durability, heat resistance, and long-lasting performance.
          </p>
        </div>

          {/* Category Grid - Kajaria Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
              { id: 1, title: 'Advanced Cool Roof Tiles', image: '/Home Page Category/Cooling_Roof_Tiles_in_Chennai.png', category: 'Advanced Cool Roof Tiles' },
              { id: 2, title: 'Terracotta Tiles', image: '/Home Page Category/Terracotta_Roof_Tiles_in_Chennai.png', category: 'Terracotta Tiles' },
              { id: 3, title: 'Ceramic Cool Roof Tiles', image: '/Home Page Category/Ceramic_Roof_Tiles_in_Chennai.png', category: 'Ceramic Cool Roof Tiles' },
              { id: 4, title: 'Vitrified Cool Roof Tiles', image: '/Home Page Category/Vitrified_Cool_Roof_Tiles _in _Chennai.png', category: 'Vitrified Cool Roof Tiles' },
              { id: 5, title: 'Premium Tile Grout', image: '/Home Page Collection/_Cool_Roof_Tiles_Premium_Grout.png', category: 'Premium Tile Grout' },
              { id: 6, title: 'Anti-Leakage Oil', image: '/Home Page Collection/Waterproofing_Admixture.png', category: 'Anti-Leakage Oil (Waterproofing Solution)' }
          ].map((cat, index) => (
              <Link 
                key={cat.id} 
                to={`/${currentLocation.slug}/tiles`}
                className="group relative block overflow-hidden hover-lift shine-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[5/5] overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="py-4">
                  <h3 className="text-secondary text-sm font-medium uppercase tracking-[0.15em]">
                    {cat.title}
                  </h3>
                </div>
                  </Link>
            ))}
                </div>
              </div>
      </section>

        {/* Collections - Kajaria Style Carousel */}
       <section className="py-7 bg-gray-light bg-[#f0f2ef]">
          <div className="text-center mb-12 px-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-medium text-secondary mb-6">Our Collections</h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
              A thoughtfully designed range of cool roof, terracotta, ceramic, and vitrified tiles for cooler, stronger, and more stylish terraces.
            </p>
          </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollCollections('left')}
            className="absolute left-2 md:left-[8%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scrollCollections('right')}
            className="absolute right-2 md:right-[8%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Slider */}
          <div 
            ref={collectionsRef}
            className="flex gap-5 overflow-x-auto px-[5%] md:px-[10%] pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { id: 1, title: 'Clay Roof Tiles', image: '/Home Page Collection/Clay_Roof_Tiles.png' },
              { id: 2, title: 'Cool Roof Tiles', image: '/Home Page Collection/Cool_Roof_Tiles.png' },
              { id: 3, title: 'Vitrified Cool Roof Tiles', image: '/Home Page Collection/Vitrified_Cool_Roof_Tiles.png' },
              { id: 4, title: 'Ceramic Cool Roof Tiles', image: '/Home Page Collection/Ceramic_Cool_Roof_Tiles.png' },
              { id: 5, title: 'Cool Roof Tiles Premium Grout', image: '/Home Page Collection/_Cool_Roof_Tiles_Premium_Grout.png' },
              { id: 6, title: 'Waterproofing Admixture', image: '/Home Page Collection/Waterproofing_Admixture.png' },
            ].map((collection) => (
              <Link
                key={collection.id}
                to={`/${currentLocation.slug}/tiles`}
                className="flex-shrink-0 w-[75vw] md:w-[28vw] snap-start group"
              >
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  </div>
                {/* Collection Name - Below Image */}
                <div className="py-4 flex items-center gap-2">
                  <span className="text-black text-sm md:text-base font-medium uppercase tracking-[0.15em]">{collection.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
            <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
            <button className="w-6 h-2 bg-secondary rounded-full"></button>
            <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Chennai's No.1 Cool Roof Tiles Supply Company */}
      <section className="text-white py-16 md:py-20 bg-[#15508b]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                Chennai's No.1<br />
                Cool Roof Tiles<br />
                Supply Company
              </h2>
              <p className="text-white/85 text-base md:text-lg mb-6 max-w-lg leading-relaxed">
                Royal Kingdom is Chennai's leading supplier and authorized dealer of premium cool roof tiles, ceramic cool roof tiles, and vitrified cool roof tiles. With advanced manufacturing partnerships and a strong distribution network, we ensure <strong className="text-white">reliable supply, competitive pricing, and on-time delivery</strong> across Chennai and Tamil Nadu.
              </p>
              <p className="text-white/75 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                Our cool roof tiles are engineered to reduce heat absorption, improve indoor comfort, and protect terraces from harsh weather conditions. Choose Royal Kingdom for trusted quality, wide product selection, expert guidance, and seamless service.
              </p>
              
              {/* Read More Button */}
              <Link 
                to={`/${currentLocation.slug}/about`}
                className="inline-flex items-center gap-3 text-white hover:opacity-80 transition-all group btn-glow"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-medium">Read More</span>
                <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right Image with Stats Overlay */}
            <div className="lg:w-1/2 animate-slide-in-right">
              <div className="relative rounded-tl-[100px] overflow-hidden shine-effect">
                <img 
                  src="/Cool_Roof_Tiles_Showroom_in_Chennai.png" 
                  alt="Royal Kingdom - Chennai's No.1 Cool Roof Tiles Supply Company"
                  className="w-full h-[350px] md:h-[500px] object-cover"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement; 
                    target.onerror = null; 
                    target.src = '/Supply_Company.png'; 
                  }}
                />
                {/* Stats Grid Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 md:p-8">
                  <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                    <div className="animate-count" style={{ animationDelay: '0.1s' }}>
                      <span className="block text-xl md:text-3xl lg:text-4xl font-bold hover:scale-110 transition-transform">10-15°C</span>
                      <span className="uppercase text-[9px] md:text-[11px] tracking-wider text-white/80 font-medium leading-tight block mt-1">Heat<br/>Reduction</span>
                    </div>
                    <div className="border-l border-white/30 animate-count" style={{ animationDelay: '0.2s' }}>
                      <span className="block text-xl md:text-3xl lg:text-4xl font-bold hover:scale-110 transition-transform">1000+</span>
                      <span className="uppercase text-[9px] md:text-[11px] tracking-wider text-white/80 font-medium leading-tight block mt-1">Happy<br/>Customers</span>
                    </div>
                    <div className="border-l border-white/30 animate-count" style={{ animationDelay: '0.3s' }}>
                      <span className="block text-xl md:text-3xl lg:text-4xl font-bold hover:scale-110 transition-transform">100%</span>
                      <span className="uppercase text-[9px] md:text-[11px] tracking-wider text-white/80 font-medium leading-tight block mt-1">Waterproof<br/>Tiles</span>
                    </div>
                    <div className="border-l border-white/30 animate-count" style={{ animationDelay: '0.4s' }}>
                      <span className="block text-xl md:text-3xl lg:text-4xl font-bold hover:scale-110 transition-transform">90%</span>
                      <span className="uppercase text-[9px] md:text-[11px] tracking-wider text-white/80 font-medium leading-tight block mt-1">Heat<br/>Reflection</span>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Recent Work - Gallery Slideshow */}
      <section 
        className="py-16 md:py-20"
        style={{ 
          backgroundImage: 'url(/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-medium text-secondary mb-4">Our Recent Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our campaigns tell stories, shape spaces, and spark ideas that reflect the spirit of Royal Kingdom Tiles
            </p>
          </div>

          {/* Gallery Slideshow */}
          <div className="relative max-w-6xl mx-auto">
            {/* Left Arrow */}
            <button 
              onClick={() => navigateGallery('prev')}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={() => navigateGallery('next')}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl mx-6 md:mx-0">
              <img 
                src={galleryImages[currentGallerySlide].src} 
                alt={galleryImages[currentGallerySlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-16 h-16 md:w-20 md:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-125 animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                 </div>
              {/* Brand Watermark */}
              <div className="absolute bottom-4 right-4">
                <span className="text-white/70 text-sm font-medium italic">Royal Kingdom</span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {galleryImages.map((image, index) => (
                <button 
                  key={image.id}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`w-16 h-12 md:w-20 md:h-14 rounded overflow-hidden border-2 transition-all ${index === currentGallerySlide ? 'border-[#15508b]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-[#15508b]/95"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Ready to Transform<br />Your Terrace & Roof?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Visit our showroom and explore premium cool roof tiles, terracotta, ceramic, and vitrified solutions designed to reduce heat, improve comfort, and enhance the beauty of your terrace and roof. Our experts are ready to assist you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to={`/${currentLocation.slug}/where-to-buy`}
                className="inline-flex items-center gap-3 bg-white text-[#15508b] px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find a Store
              </Link>
              
              <a 
                href={`https://wa.me/${currentLocation.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-[#128C7E] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
              
              <Link 
                to={`/${currentLocation.slug}/contact`}
                className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-[#15508b] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get a Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">Trusted by thousands of homeowners</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold">1,000+</span>
                  <span className="text-xs text-white/70 uppercase tracking-wider">Happy Customers</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold">4.9★</span>
                  <span className="text-xs text-white/70 uppercase tracking-wider">Customer Rating</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold">5+</span>
                  <span className="text-xs text-white/70 uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
    </div>
    </>
  );
};
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLocationData } from '../../context/LocationContext';
import { LOCATIONS, BUSINESS_INFO } from '../../data/locations';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const { currentLocation } = useLocationData();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocationChange = (slug: string) => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] && pathParts[1] !== slug) {
      const newPath = `/${slug}/${pathParts.slice(2).join('/')}`;
      navigate(newPath);
    }
    setMobileMenuOpen(false);
  };

  const basePath = `/${currentLocation.slug}`;
  const isChennai = currentLocation.slug === 'chennai';
  const homeLink = isChennai ? '/' : basePath;

  // Direct destinations (no dropdowns)
  const aboutLink = isChennai ? '/about-cool-roof-tiles-dealer-chennai' : `${basePath}/about`;
  const productsLink = isChennai ? '/roof-tiles-products-chennai' : `${basePath}/tiles`;
  const galleryLink = isChennai ? '/cool-roof-tiles-gallery-chennai' : `${basePath}/gallery`;
  const contactLink = isChennai ? '/contact-cool-roof-tiles-dealer-chennai' : `${basePath}/contact`;

  const navTextClass = isScrolled
    ? "text-white/90 hover:text-white"
    : "text-black/80 hover:text-black";

  const iconTextClass = isScrolled
    ? "text-white/80 hover:text-white"
    : "text-black/70 hover:text-black";

  const logoTitleClass = isScrolled ? "text-white" : "text-black";
  const logoTaglineClass = isScrolled ? "text-white/70" : "text-black/60";

  return (
    <>
      {/* Header */}
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "header-gradient shadow-lg"
          : "bg-gradient-to-b from-white/70 to-transparent"
      )}
    >
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>
        
        <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link to={homeLink} className="flex items-center gap-3 py-3 group">
              <div className="relative">
                <img 
                  src="/Royal_Kingdom_Logo-01.jpg" 
                  alt="Royal Kingdom Logo" 
                  className="w-14 h-14 object-contain group-hover:scale-105 transition-transform rounded-sm"
                />
            </div>
            <div className="flex flex-col">
                <span className={clsx(logoTitleClass, "text-xl font-extrabold tracking-wider leading-none uppercase")}>
                  Royal Kingdom
                </span>
                <span className={clsx(logoTaglineClass, "text-[9px] font-medium tracking-[0.15em] mt-1")}>
                  Royal Protection. Kingdom Quality.
                </span>
            </div>
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <Link 
                to={homeLink}
                className={clsx(navTextClass, "text-sm font-medium uppercase tracking-wider px-4 py-6 transition-colors")}
              >
                Home
              </Link>
              <Link 
                to={aboutLink}
                className={clsx(navTextClass, "text-sm font-medium uppercase tracking-wider px-4 py-6 transition-colors")}
              >
                About Us
              </Link>
              <Link 
                to={productsLink}
                className={clsx(navTextClass, "text-sm font-medium uppercase tracking-wider px-4 py-6 transition-colors")}
              >
                Products
              </Link>
              <Link 
                to={galleryLink}
                className={clsx(navTextClass, "text-sm font-medium uppercase tracking-wider px-4 py-6 transition-colors")}
              >
                Gallery
              </Link>
              <Link 
                to={contactLink}
                className={clsx(navTextClass, "text-sm font-medium uppercase tracking-wider px-4 py-6 transition-colors")}
              >
                Contact Us
              </Link>
          </nav>

          {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Where to Buy */}
              <Link 
                to={`${basePath}/where-to-buy`}
                className={clsx(navTextClass, "hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-wider px-4 py-2 transition-colors")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="hidden xl:inline">Where to Buy</span>
              </Link>

              {/* Location Selector removed */}

              {/* Search Icon */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className={clsx(iconTextClass, "p-2 transition-colors")}
                aria-label="Search"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              </button>

            {/* Mobile Menu Toggle */}
              <button 
                className={clsx(iconTextClass, "lg:hidden p-2")}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <div className={clsx(
          "absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search for tiles, collections..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#15508b] text-gray-800"
              />
              <button className="bg-[#15508b] text-white px-6 py-2 rounded font-semibold hover:bg-[#15508b]-dark transition-colors">
                Search
              </button>
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={clsx(
          "lg:hidden absolute top-full left-0 right-0 bg-[#15508b] shadow-xl transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            <Link 
              to={aboutLink}
              className="py-3 text-white font-semibold uppercase tracking-wider border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link 
              to={productsLink}
              className="py-3 text-white font-semibold uppercase tracking-wider border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>

            <Link 
              to={galleryLink}
              className="py-3 text-white font-semibold uppercase tracking-wider border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link 
              to={contactLink}
              className="py-3 text-white font-semibold uppercase tracking-wider border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link 
              to={`${basePath}/where-to-buy`}
              className="py-3 text-white font-semibold uppercase tracking-wider border-b border-white/10 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Where to Buy
            </Link>

            {/* Mobile Location Selector removed */}
          </div>
        </div>
      </header>

      {/* Enquire Now Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi! I'd like to enquire about Royal Kingdom Tiles.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#15508b] hover:bg-[#15508b]-dark text-white py-4 px-2 rounded-l-md shadow-lg transition-all hover:pr-4 group"
        >
          <span className="writing-vertical text-xs font-bold uppercase tracking-widest">Enquire Now</span>
        </a>
      </div>
    </>
  );
};

// Mobile nav section with accordion
const MobileNavSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 text-white font-semibold uppercase tracking-wider flex items-center justify-between"
      >
        {title}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={clsx("h-4 w-4 transition-transform", isOpen && "rotate-180")} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={clsx(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-60 pb-2" : "max-h-0"
      )}>
        {children}
      </div>
    </div>
  );
};

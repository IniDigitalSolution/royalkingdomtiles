import React, { useState } from 'react';
import { useLocationData } from '../../context/LocationContext';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/locations';

export const Footer: React.FC = () => {
  const { currentLocation } = useLocationData();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <>
      {/* Dark Gradient Top Border */}
      <div className="h-2 bg-[#1a1a1a]"></div>
      
      <footer className="bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            
            {/* Logo & Newsletter Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <Link to={`/${currentLocation.slug}`} className="inline-flex items-center gap-3 mb-6 group">
                <img 
                  src="/Royal_Kingdom_Logo-01.jpg" 
                  alt="Royal Kingdom Logo" 
                  className="w-14 h-14 object-contain group-hover:scale-105 transition-transform rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="text-white text-xl font-extrabold tracking-wider leading-none uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                    Royal Kingdom
                  </span>
                  <span className="text-white/70 text-[9px] font-medium tracking-[0.15em] mt-1" style={{ fontFamily: 'Cinzel, serif' }}>
                    Royal Protection. Kingdom Quality.
                  </span>
                </div>
              </Link>
              
              {/* Newsletter */}
              <form onSubmit={handleSubscribe} className="flex mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#15508b]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c5a45a] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#b39449] transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#757575] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#757575] transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#757575] transition-all"
                  aria-label="Twitter/X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#757575] transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#757575] transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
          </div>

            {/* Products Column */}
          <div>
              <h4 className="text-white font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                <li>
                  <Link to={`/${currentLocation.slug}/products/silver-plus`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Silver Plus
                  </Link>
                </li>
                <li>
                  <Link to={`/${currentLocation.slug}/products/gold`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Gold
                  </Link>
                </li>
                <li>
                  <Link to={`/${currentLocation.slug}/products/elite-silver`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Elite Silver
                  </Link>
                </li>
                <li>
                  <Link to={`/${currentLocation.slug}/products/elite-gold`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Elite Gold
                  </Link>
                </li>
                <li>
                  <Link to={`/${currentLocation.slug}/products/economy`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Economy
                  </Link>
                </li>
            </ul>
          </div>

            {/* Applications Column */}
          <div>
              <h4 className="text-white font-semibold mb-6">Applications</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Residential Terraces
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Commercial Rooftops
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Industrial Buildings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Balconies & Patios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Warehouses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Schools & Hospitals
                  </a>
                </li>
            </ul>
          </div>

            {/* Company Column */}
          <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to={`/${currentLocation.slug}/about`} className="text-white/60 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Certifications
                  </a>
                </li>
                <li>
                  <Link to={`/${currentLocation.slug}/contact`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
            </ul>
          </div>

            {/* Quick Links Column */}
          <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to={`/${currentLocation.slug}/gallery`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to={`/${currentLocation.slug}/where-to-buy`} className="text-white/60 hover:text-white transition-colors text-sm">
                    Where to Buy
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    Dealer Locator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    FAQs
                  </a>
                </li>
            </ul>
          </div>
          </div>

          {/* Download App Section */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold">Download App</span>
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-10"
                />
              </a>
          </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm text-white/60">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                {BUSINESS_INFO.phone}
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Address & GSTIN Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/50">GSTIN:</span>
                <span className="font-medium text-white">{BUSINESS_INFO.gstin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-[#5a5a5a] py-4 pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-white/50">
              <span>© {new Date().getFullYear()} Royal Kingdom Tiles. All Rights Reserved. Owner: {BUSINESS_INFO.ownerName}</span>
              <span className="hidden md:inline">|</span>
              <span>Developed by <a href="https://inidigitalsolution.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ini Digital Solution</a></span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi! I'm interested in Royal Kingdom Tiles products.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-110 z-40 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Enquire Now Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi! I'd like to enquire about Royal Kingdom Tiles.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#15508b] hover:bg-[#0f3d6b] text-white py-4 px-2 rounded-l-md shadow-lg transition-all hover:pr-4 group"
        >
          <span className="writing-vertical text-xs font-bold uppercase tracking-widest">Enquire Now</span>
        </a>
      </div>
    </>
  );
};

import React from 'react';
import { Button } from '../components/ui/Button';
import { useLocationData } from '../context/LocationContext';

export const Contact: React.FC = () => {
  const { currentLocation } = useLocationData();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden header-gradient text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Get in Touch with Our Team</p>
          </div>
        </div>
      </section>

    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <p className="text-center text-gray-500 mb-12">
        Fill out the form below to inquire about our products in {currentLocation.name}.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-2">Name *</label>
            <input type="text" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-[#15508b] focus:ring-1 focus:ring-[#15508b]" placeholder="John Doe" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-2">Phone *</label>
            <input type="tel" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-[#15508b] focus:ring-1 focus:ring-[#15508b]" placeholder="+91 ..." />
          </div>
        </div>
        
        <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-2">Email</label>
            <input type="email" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-[#15508b] focus:ring-1 focus:ring-[#15508b]" placeholder="john@example.com" />
        </div>

         <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-2">Message</label>
            <textarea rows={5} className="border border-gray-300 p-3 rounded focus:outline-none focus:border-[#15508b] focus:ring-1 focus:ring-[#15508b]" placeholder="Tell us about your requirements..."></textarea>
        </div>

        <Button fullWidth size="lg">Submit Enquiry</Button>
      </form>
      </div>
    </div>
  );
};
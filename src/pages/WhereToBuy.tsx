import React from 'react';
import { useLocationData } from '../context/LocationContext';

export const WhereToBuy: React.FC = () => {
  const { currentLocation } = useLocationData();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden header-gradient text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">Find a Store</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Visit Our {currentLocation.name} Showroom</p>
          </div>
        </div>
      </section>

    <div className="container mx-auto px-4 py-16">

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 bg-gray-50 p-8 rounded shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold mb-6 text-secondary uppercase border-b pb-4">Contact Details</h3>
           <div className="space-y-6">
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase">Address</label>
               <p className="text-gray-800 font-medium mt-1">{currentLocation.storeAddressLines.join(', ')}</p>
             </div>
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
               <p className="text-gray-800 font-medium mt-1">{currentLocation.phone}</p>
             </div>
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
               <p className="text-gray-800 font-medium mt-1">{currentLocation.email}</p>
             </div>
              <div>
               <label className="text-xs font-bold text-gray-500 uppercase">WhatsApp</label>
               <p className="text-gray-800 font-medium mt-1">+{currentLocation.whatsappNumber}</p>
             </div>
           </div>
        </div>

        <div className="md:w-2/3 h-[500px] bg-gray-200 rounded overflow-hidden relative shadow-inner">
           {/* Mock Map using Image since real embed requires API Key or specific iframe */}
           <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
             <p className="text-gray-500 font-bold">Google Maps Embed Placeholder</p>
             {/* In real app: <iframe src={currentLocation.mapEmbedUrl} ... /> */}
           </div>
           </div>
        </div>
      </div>
    </div>
  );
};
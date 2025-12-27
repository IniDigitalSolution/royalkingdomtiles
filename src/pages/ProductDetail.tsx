import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { PRODUCTS } from '../data/products';
import { Button } from '../components/ui/Button';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { currentLocation } = useLocationData();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col">
        <div className="h-20 header-gradient"></div>
        <div className="container mx-auto py-20 text-center">Product not found</div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const text = `Hi, I want to order: ${product.name} (SKU: ${product.sku}). Please share pricing and availability.`;
    window.open(`https://wa.me/${currentLocation.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Top spacer for fixed header */}
      <div className="h-20 header-gradient"></div>
      
    <div className="container mx-auto px-4 py-8">
       {/* Breadcrumbs */}
       <div className="text-xs text-gray-500 mb-8 uppercase">
        <Link to={`/${currentLocation.slug}`} className="hover:text-[#15508b]">Home</Link> / 
        <Link to={`/${currentLocation.slug}/tiles`} className="hover:text-[#15508b] mx-1">Tiles</Link> / 
        <span className="text-gray-900 font-bold ml-1">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gallery */}
        <div className="lg:w-1/2">
          <div className="w-full aspect-square bg-white mb-4 rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedImage(idx)}
                className={`w-24 h-24 shrink-0 rounded overflow-hidden border-2 ${selectedImage === idx ? 'border-[#15508b]' : 'border-transparent'}`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-contain bg-white" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-secondary mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-6">SKU: {product.sku}</p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
            <h3 className="font-bold text-lg mb-4 uppercase text-gray-800">Specifications</h3>
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <div>
                <span className="block text-gray-500">Size</span>
                <span className="font-semibold">{product.size}</span>
              </div>
              <div>
                <span className="block text-gray-500">Finish</span>
                <span className="font-semibold">{product.finish}</span>
              </div>
              <div>
                <span className="block text-gray-500">Color</span>
                <span className="font-semibold">{product.color}</span>
              </div>
              <div>
                <span className="block text-gray-500">Category</span>
                <span className="font-semibold">{product.category}</span>
              </div>
               <div>
                <span className="block text-gray-500">Collection</span>
                <span className="font-semibold">{product.collection}</span>
              </div>
              <div>
                <span className="block text-gray-500">Application</span>
                <span className="font-semibold">{product.application.join(', ')}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.shortDesc} Experience the elegance of {product.finish} finish combined with the durability of modern {product.category} technology. Perfect for {product.application.join(' and ')}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleWhatsAppOrder}
              className="bg-[#25D366] hover:bg-[#128C7E] flex-1"
            >
              Order on WhatsApp
            </Button>
            <a
              href={`tel:${currentLocation.phone}`}
              className="flex-1"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full"
              >
                Call Now
              </Button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
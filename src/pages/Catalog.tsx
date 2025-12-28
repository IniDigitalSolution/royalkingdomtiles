import React, { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { PRODUCTS, FILTERS } from '../data/products';
import { Button } from '../components/ui/Button';
import { clsx } from 'clsx';
import { getChennaiSeoProductUrl } from '../utils/seoLinks';

export const Catalog: React.FC = () => {
  const { currentLocation } = useLocationData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter State
  const activeCategory = searchParams.get('category');
  
  // If someone hits an old paginated URL, normalize to the single-page catalog.
  useEffect(() => {
    if (searchParams.has('page')) {
      const next = new URLSearchParams(searchParams);
      next.delete('page');
      setSearchParams(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Memoized Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (activeCategory && p.category !== activeCategory) return false;
      // Add other filters here reading from searchParams
      return true;
    });
  }, [activeCategory]);

  const getProductLink = (slug: string) => {
    if (currentLocation.slug === 'chennai') {
      const seoUrl = getChennaiSeoProductUrl(slug);
      if (seoUrl) return seoUrl;
    }
    return `/${currentLocation.slug}/tiles/${slug}`;
  };

  const toggleFilter = (key: string, value: string) => {
    // Simple implementation: Just one filter for category demo
    if (key === 'category') {
        if (activeCategory === value) setSearchParams({});
        else setSearchParams({ category: value });
    }
  };

  const Sidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-lg mb-4 uppercase border-b pb-2">Category</h3>
        <ul className="space-y-2">
          {FILTERS.categories.map(cat => (
            <li key={cat}>
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#15508b]">
                <input 
                  type="checkbox" 
                  checked={activeCategory === cat} 
                  onChange={() => toggleFilter('category', cat)}
                  className="rounded text-[#15508b] focus:ring-[#15508b]" 
                />
                <span className="text-sm text-gray-600">{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4 uppercase border-b pb-2">Size</h3>
        <ul className="space-y-2">
           {FILTERS.sizes.map(s => (
             <li key={s} className="text-sm text-gray-600 hover:text-[#15508b] cursor-pointer">{s}</li>
           ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4 uppercase border-b pb-2">Finish</h3>
        <ul className="space-y-2">
           {FILTERS.finishes.map(f => (
             <li key={f} className="text-sm text-gray-600 hover:text-[#15508b] cursor-pointer">{f}</li>
           ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden header-gradient text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">Cool Roof Tiles</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Premium Heat Reflective & Waterproof Tiles</p>
          </div>
        </div>
      </section>

    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 mb-6 uppercase">
        <Link to={`/${currentLocation.slug}`} className="hover:text-[#15508b]">Home</Link> / <span className="text-gray-900 font-bold">Cool Roof Tiles Catalog</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <Sidebar />
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
           <Button fullWidth variant="outline" onClick={() => setMobileFiltersOpen(true)}>Filter & Sort</Button>
        </div>

        {/* Mobile Sidebar Drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-bold uppercase">Filters</h2>
               <button onClick={() => setMobileFiltersOpen(false)} className="text-3xl">&times;</button>
             </div>
             <Sidebar />
             <div className="mt-8">
                <Button fullWidth onClick={() => setMobileFiltersOpen(false)}>Apply Filters</Button>
             </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h1 className="text-2xl font-bold uppercase text-secondary">
              {activeCategory || 'All Products'} 
              <span className="text-gray-400 text-lg font-normal ml-2">({filteredProducts.length})</span>
            </h1>
            <select className="border-gray-300 rounded text-sm focus:ring-[#15508b] focus:border-[#15508b] p-2">
              <option>Sort by: Popular</option>
              <option>Newest First</option>
              <option>Price: Low to High</option>
            </select>
          </div>

          <ul className="flex flex-wrap list-none m-0 p-0">
            {filteredProducts.map(product => (
              <li key={product.id} className="flex p-4 w-full md:w-1/2 xl:w-1/3">
                <div className="bg-white rounded shadow-[0_20px_40px_-14px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden group hover:shadow-2xl transition-shadow duration-300 w-full">
                  {/* Product Image */}
                  <div
                    className="relative overflow-hidden bg-center bg-no-repeat bg-cover rounded-t transition-all duration-500 ease-in-out group-hover:contrast-100 contrast-75"
                    style={{ backgroundImage: `url(${product.images[0]})` }}
                  >
                    <div className="pb-[56.25%] md:pb-[66.6%]" />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-xs font-bold px-3 py-1 uppercase rounded tracking-wider text-secondary">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <Link to={getProductLink(product.slug)}>
                      <h3 className="text-gray-700 text-lg font-light tracking-[2px] uppercase mb-2 group-hover:text-[#15508b] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">
                      {product.size} • {product.finish} • {product.color}
                    </p>
                    <p className="flex-1 text-gray-600 text-sm leading-relaxed mb-5">
                      {product.shortDesc}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link to={getProductLink(product.slug)} className="flex-1">
                        <button className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors uppercase text-xs font-semibold">
                          View Details
                        </button>
                      </Link>
                      <a
                        href={`https://wa.me/${currentLocation.whatsappNumber}?text=${encodeURIComponent(`Hi, interested in ${product.name} (${product.sku}).`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-[#25D366] text-white rounded hover:bg-[#128C7E] transition-colors flex items-center justify-center"
                        title="Order on WhatsApp"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          </div>
        </div>
      </div>
    </div>
  );
};
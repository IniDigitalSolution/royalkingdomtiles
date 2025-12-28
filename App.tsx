import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './src/components/layout/Layout';
import { Home } from './src/pages/Home';
import { Catalog } from './src/pages/Catalog';
import { ProductDetail } from './src/pages/ProductDetail';
import { ProductPage } from './src/pages/ProductPage';
import { WhereToBuy } from './src/pages/WhereToBuy';
import { Contact } from './src/pages/Contact';
import { AboutUs } from './src/pages/AboutUs';
import { Gallery } from './src/pages/Gallery';
import { SeoClayLanding } from './src/pages/SeoClayLanding';
import { SeoCeramicPriceLanding } from './src/pages/SeoCeramicPriceLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* SEO-friendly Chennai landing pages (no redirect, keep clean URLs) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about-cool-roof-tiles-dealer-chennai" element={<Layout />}>
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="/roof-tiles-products-chennai" element={<Layout />}>
          <Route index element={<Catalog />} />
        </Route>
        <Route path="/cool-roof-tiles-gallery-chennai" element={<Layout />}>
          <Route index element={<Gallery />} />
        </Route>
        <Route path="/contact-cool-roof-tiles-dealer-chennai" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>

        {/* SEO-friendly Chennai product landing pages */}
        <Route path="/cool-roof-tiles-in-chennai" element={<Layout />}>
          <Route index element={<ProductPage forcedSlug="silver-plus" />} />
        </Route>
        <Route path="/affordable-cool-roof-tiles-price-chennai" element={<Layout />}>
          <Route index element={<ProductPage forcedSlug="elite-silver" />} />
        </Route>
        <Route path="/cool-roof-tiles-price-chennai" element={<Layout />}>
          <Route index element={<ProductPage forcedSlug="elite-silver" />} />
        </Route>
        <Route path="/cooling-tiles-in-chennai" element={<Layout />}>
          <Route index element={<ProductPage forcedSlug="gold" />} />
        </Route>
        <Route path="/cooling-tiles-price-in-chennai" element={<Layout />}>
          <Route index element={<ProductPage forcedSlug="elite-gold" />} />
        </Route>
        <Route path="/clay-roof-tiles-in-chennai" element={<Layout />}>
          <Route index element={<SeoClayLanding />} />
        </Route>

        {/* Ceramic SEO pages */}
        <Route path="/ceramic-white-cool-roof-tile-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="ceramic-cool-roof-1" />} />
        </Route>
        <Route path="/ceramic-cool-roof-tiles-price-chennai" element={<Layout />}>
          <Route index element={<SeoCeramicPriceLanding />} />
        </Route>
        <Route path="/heat-resistant-ceramic-terrace-tiles-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="ceramic-cool-roof-3" />} />
        </Route>

        {/* Vitrified SEO pages */}
        <Route path="/vitrified-cool-roof-tile-blue-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="vitrified-blue" />} />
        </Route>
        <Route path="/vitrified-cool-roof-tile-ivory-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="vitrified-ivory" />} />
        </Route>
        <Route path="/vitrified-cool-roof-tile-pink-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="vitrified-pink" />} />
        </Route>
        <Route path="/vitrified-cool-roof-tile-almond-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="vitrified-almond" />} />
        </Route>

        {/* Accessories SEO pages */}
        <Route path="/terrace-premium-rough-grout-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="premium-rough-grout-1" />} />
        </Route>
        <Route path="/waterproofing-grout-admixture-chennai" element={<Layout />}>
          <Route index element={<ProductDetail forcedSlug="waterproofing-solution-1" />} />
        </Route>

        <Route path="/:locationSlug" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tiles" element={<Catalog />} />
          <Route path="tiles/:slug" element={<ProductDetail />} />
          <Route path="products/:productSlug" element={<ProductPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="where-to-buy" element={<WhereToBuy />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
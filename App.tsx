import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './src/components/layout/Layout';
import { Home } from './src/pages/Home';
import { Catalog } from './src/pages/Catalog';
import { ProductDetail } from './src/pages/ProductDetail';
import { ProductPage } from './src/pages/ProductPage';
import { WhereToBuy } from './src/pages/WhereToBuy';
import { Contact } from './src/pages/Contact';
import { AboutUs } from './src/pages/AboutUs';
import { Gallery } from './src/pages/Gallery';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/chennai" replace />} />

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

        <Route path="*" element={<Navigate to="/chennai" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
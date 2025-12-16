import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { LocationProvider } from '../../context/LocationContext';
import SEO from '../SEO';

export const Layout: React.FC = () => {
  return (
    <LocationProvider>
      <SEO />
      <div className="flex flex-col min-h-screen font-sans text-secondary">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LocationProvider>
  );
};
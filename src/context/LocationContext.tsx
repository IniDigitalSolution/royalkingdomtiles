import React, { createContext, useContext, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LOCATIONS } from '../data/locations';
import { Location } from '../../types';

interface LocationContextType {
  currentLocation: Location;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  
  const currentLocation = useMemo(() => {
    // If no slug is present (e.g. SEO-friendly routes like "/roof-tiles-products-chennai"),
    // default to Chennai so the rest of the app (links, contact info) continues to work.
    const effectiveSlug = locationSlug || 'chennai';
    return LOCATIONS.find(l => l.slug === effectiveSlug);
  }, [locationSlug]);

  if (!currentLocation) {
    // If invalid slug, redirect to default (chennai)
    // In a real app, this should probably be handled by the router config or a specific 404
    return <Navigate to="/chennai" replace />;
  }

  return (
    <LocationContext.Provider value={{ currentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationData = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useLocationData must be used within LocationProvider');
  return context;
};
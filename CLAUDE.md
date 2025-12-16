# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-location e-commerce tile catalog application built with React, TypeScript, and Vite. The app serves as a location-based tile showroom website with WhatsApp ordering functionality, inspired by Kajaria tiles. Each location (Chennai, Mumbai, Delhi, etc.) has its own customized storefront with unique contact details and featured categories.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Location-Based Routing

The app uses **location slugs** in the URL to dynamically render location-specific content:

- Routes follow the pattern: `/:locationSlug/*` (e.g., `/chennai/tiles`, `/mumbai/contact`)
- Default location is Chennai (`/` redirects to `/chennai`)
- Invalid location slugs automatically redirect to Chennai
- HashRouter is used for deployment compatibility

### Context Architecture

The app uses **LocationContext** for managing location-specific data:

**LocationContext** (`src/context/LocationContext.tsx`)
- Reads the `locationSlug` from URL params
- Looks up location data from `LOCATIONS` array in `src/data/locations.ts`
- Provides current location details (name, contact info, featured categories, etc.) to all components
- Wraps the Layout component in the router hierarchy

**Important**: LocationContext must be accessed inside route components that are children of the Layout component, as the Layout itself wraps them with LocationProvider.

### Data Structure

- **Locations** (`src/data/locations.ts`): Contains 10 pre-configured Indian city locations with store details, WhatsApp numbers, and location-specific metadata
- **Products** (`src/data/products.ts`): Generates 50 placeholder tile products with various categories, sizes, finishes, and colors
- **Types** (`types.ts` in root): TypeScript interfaces for Location, Product, CartItem, and FilterState

### Key Pages

- **Home** (`src/pages/Home.tsx`): Hero carousel, featured categories, promotional sections
- **Catalog** (`src/pages/Catalog.tsx`): Filterable product grid with sidebar filters
- **ProductDetail** (`src/pages/ProductDetail.tsx`): Individual product details with image gallery
- **WhereToBuy** (`src/pages/WhereToBuy.tsx`): Store location, map embed, contact details
- **Contact** (`src/pages/Contact.tsx`): Contact form and store information

## Environment Configuration

The app requires a Gemini API key for AI features:

1. Set `GEMINI_API_KEY` in `.env.local`
2. The Vite config exposes this as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`

## Path Aliases

The project uses `@/*` as an alias for the root directory (configured in both `vite.config.ts` and `tsconfig.json`).

## Important Implementation Details

### Adding New Locations

To add a new location:
1. Add a new entry to the `LOCATIONS` array in `src/data/locations.ts`
2. Include all required fields: slug, name, whatsappNumber, storeAddressLines, heroSlides, featuredCategories, seoParagraph, phone, email, mapEmbedUrl
3. The location will automatically be available at `/:slug` route

### Product Filtering

Products are filtered in the Catalog page based on multiple criteria (category, application, size, finish, color). The filtering logic is client-side and supports multiple selections per filter type.

### WhatsApp Integration

The app uses WhatsApp for order placement and inquiries. WhatsApp numbers are location-specific and stored in the location data. Product detail pages have "Order on WhatsApp" buttons that format WhatsApp messages with product details. The header also includes a WhatsApp button for quick contact.

## Styling

The app uses Tailwind CSS with custom utility classes. No additional CSS framework or component library is used. All UI components are custom-built in the `src/components` directory.

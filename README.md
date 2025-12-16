# Royal Kingdom Tiles

A modern, multi-location e-commerce tile catalog application built with React, TypeScript, and Vite. This application serves as a location-based tile showroom website with WhatsApp ordering functionality, featuring 10+ Indian city locations with customized storefronts.

## Features

- **Multi-Location Support**: 10 pre-configured Indian cities (Chennai, Mumbai, Delhi, Bangalore, etc.) with unique contact details
- **Dynamic Location Routing**: Location-based URLs (e.g., `/chennai`, `/mumbai`) with automatic redirection
- **Product Catalog**: 50+ tile products with advanced filtering by category, application, size, finish, and color
- **WhatsApp Integration**: Direct ordering via WhatsApp with pre-filled product details
- **Responsive Design**: Mobile-first design built with Tailwind CSS
- **Image Gallery**: Interactive product image galleries with zoom functionality
- **Store Locator**: Embedded maps and contact information for each location
- **SEO Optimized**: Location-specific meta tags and descriptions

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7 (HashRouter)
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd royalkingdomtiles
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Gemini API key:
```
GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in terminal).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
royalkingdomtiles/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # React Context providers
│   ├── data/             # Static data (locations, products)
│   ├── pages/            # Page components
│   └── index.tsx         # Application entry point
├── public/               # Static assets
├── types.ts              # TypeScript type definitions
├── CLAUDE.md             # Development guidelines for AI assistants
└── README.md             # This file
```

## Location Configuration

The app supports multiple locations out of the box. Each location has:
- Unique slug for URL routing
- Store address and contact details
- Location-specific WhatsApp number
- Featured product categories
- Custom hero carousel images
- Embedded Google Maps

To add a new location, edit `src/data/locations.ts` and add a new entry to the `LOCATIONS` array.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Visit [Vercel](https://vercel.com) and import your repository

3. Configure build settings (auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. Add environment variables in Vercel dashboard:
   - `GEMINI_API_KEY` = your Gemini API key

5. Deploy!

Your app will be live at `https://your-project.vercel.app`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains your production build
# Deploy the contents of dist/ to any static hosting service
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Gemini API key for AI features | Yes |

## Key Features Explained

### Location-Based Routing

The app uses URL slugs to dynamically render location-specific content:
- Default location: Chennai (`/` → `/chennai`)
- Each location: `/:locationSlug/*` (e.g., `/mumbai/tiles`)
- Invalid slugs redirect to Chennai

### Product Filtering

Advanced filtering system supporting:
- Categories (Floor, Wall, Outdoor, etc.)
- Applications (Bathroom, Kitchen, Living Room, etc.)
- Sizes (Multiple dimensions)
- Finishes (Glossy, Matte, Rustic, etc.)
- Colors (Multiple options)

### WhatsApp Integration

Each location has a dedicated WhatsApp number. Users can:
- Order products directly via WhatsApp
- Send pre-filled messages with product details
- Contact store for inquiries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a template project. Feel free to customize it for your needs.

## License

Private project - All rights reserved

## Contact

For any queries, please contact through the location-specific contact pages in the application.

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            aboutChennai: path.resolve(__dirname, 'about-cool-roof-tiles-dealer-chennai.html'),
            productsChennai: path.resolve(__dirname, 'roof-tiles-products-chennai.html'),
            galleryChennai: path.resolve(__dirname, 'cool-roof-tiles-gallery-chennai.html'),
            contactChennai: path.resolve(__dirname, 'contact-cool-roof-tiles-dealer-chennai.html'),
            landingSilverPlus: path.resolve(__dirname, 'cool-roof-tiles-in-chennai.html'),
            landingEliteSilver: path.resolve(__dirname, 'cool-roof-tiles-price-chennai.html'),
            landingGold: path.resolve(__dirname, 'cooling-tiles-in-chennai.html'),
            landingEliteGold: path.resolve(__dirname, 'cooling-tiles-price-in-chennai.html'),
            landingClay: path.resolve(__dirname, 'clay-roof-tiles-in-chennai.html'),
            ceramicWhite: path.resolve(__dirname, 'ceramic-white-cool-roof-tile-chennai.html'),
            ceramicPrice: path.resolve(__dirname, 'ceramic-cool-roof-tiles-price-chennai.html'),
            ceramicHeatResistant: path.resolve(__dirname, 'heat-resistant-ceramic-terrace-tiles-chennai.html'),
            vitrifiedBlue: path.resolve(__dirname, 'vitrified-cool-roof-tile-blue-chennai.html'),
            vitrifiedIvory: path.resolve(__dirname, 'vitrified-cool-roof-tile-ivory-chennai.html'),
            vitrifiedPink: path.resolve(__dirname, 'vitrified-cool-roof-tile-pink-chennai.html'),
            vitrifiedAlmond: path.resolve(__dirname, 'vitrified-cool-roof-tile-almond-chennai.html'),
            groutTerrace: path.resolve(__dirname, 'terrace-premium-rough-grout-chennai.html'),
            waterproofAdmix: path.resolve(__dirname, 'waterproofing-grout-admixture-chennai.html'),
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

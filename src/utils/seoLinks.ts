export function getChennaiSeoProductUrl(productSlug: string): string | null {
  // Map internal product slugs to SEO-optimized Chennai URLs
  switch (productSlug) {
    // Cool Roof Tiles (featured)
    case 'silver-plus':
      return '/cool-roof-tiles-in-chennai';
    case 'elite-silver':
      return '/cool-roof-tiles-price-chennai';
    case 'gold':
      return '/cooling-tiles-in-chennai';
    case 'elite-gold':
      return '/cooling-tiles-price-in-chennai';

    // Ceramic
    case 'ceramic-cool-roof-1':
      return '/ceramic-white-cool-roof-tile-chennai';
    case 'ceramic-cool-roof-3':
      return '/heat-resistant-ceramic-terrace-tiles-chennai';

    // Vitrified
    case 'vitrified-blue':
      return '/vitrified-cool-roof-tile-blue-chennai';
    case 'vitrified-ivory':
      return '/vitrified-cool-roof-tile-ivory-chennai';
    case 'vitrified-pink':
      return '/vitrified-cool-roof-tile-pink-chennai';
    case 'vitrified-almond':
      return '/vitrified-cool-roof-tile-almond-chennai';

    // Accessories
    case 'premium-rough-grout-1':
      return '/terrace-premium-rough-grout-chennai';
    case 'waterproofing-solution-1':
      return '/waterproofing-grout-admixture-chennai';

    default:
      return null;
  }
}



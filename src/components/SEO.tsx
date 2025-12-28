import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocationData } from '../context/LocationContext';
import { BUSINESS_INFO } from '../data/locations';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  productName?: string;
  productPrice?: string;
}

// High-ranking keywords for cool roof tiles in India
const HIGH_RANKING_KEYWORDS = [
  'cool roof tiles',
  'heat reflective tiles',
  'waterproof roof tiles',
  'terrace cooling tiles',
  'summer cool tiles',
  'white roof tiles',
  'heat resistant tiles',
  'thermal insulation tiles',
  'energy saving tiles',
  'roof heat protection',
  'sun reflective tiles',
  'rooftop cooling solution',
  'best roof tiles India',
  'premium cool tiles',
  'dual layer tiles',
  'temperature reducing tiles',
  'AC bill reduction tiles',
  'eco friendly roof tiles',
  'UV resistant tiles',
  'long lasting roof tiles'
];

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = 'https://www.royalkingdomtiles.com/og-image.jpg',
  type = 'website',
  productName,
  productPrice
}) => {
  const { currentLocation } = useLocationData();
  const location = useLocation();
  
  const domain = 'www.royalkingdomtiles.com';
  const locationName = currentLocation?.name || 'India';
  
  // SEO-optimized default title with location
  const defaultTitle = `Cool Roof Tiles in ${locationName} | Royal Kingdom Tiles | Heat Reflective & Waterproof Tiles | Best Price ₹45/sqft`;
  
  // SEO-optimized description with keywords and call-to-action
  const defaultDescription = `🏆 #1 Cool Roof Tiles Manufacturer in ${locationName}. Royal Kingdom Tiles offers premium heat reflective tiles that reduce indoor temperature by 10-15°C. ✓ 90% Heat Reflection ✓ 100% Waterproof ✓ 10 Year Warranty ✓ Free Installation Guide. Products: Silver Plus, Gold, Elite Silver, Elite Gold, Economy. Call Now: ${BUSINESS_INFO.phone} | GSTIN: ${BUSINESS_INFO.gstin}`;
  
  // Location-specific keywords for better local SEO
  const locationKeywords = [
    `cool roof tiles ${locationName}`,
    `heat reflective tiles ${locationName}`,
    `roof tiles dealer ${locationName}`,
    `best roof tiles ${locationName}`,
    `terrace tiles ${locationName}`,
    `waterproof tiles ${locationName}`,
    `Royal Kingdom Tiles ${locationName}`,
    `cool tiles price ${locationName}`,
    `roof cooling solution ${locationName}`,
    `summer cooling tiles ${locationName}`,
    `heat protection tiles ${locationName}`,
    `white tiles for terrace ${locationName}`,
    `rooftop tiles ${locationName}`,
    `building cooling tiles ${locationName}`,
    `factory roof tiles ${locationName}`
  ];

  const defaultKeywords = [
    ...HIGH_RANKING_KEYWORDS,
    ...locationKeywords,
    'Royal Kingdom Tiles',
    'T. Karthik',
    BUSINESS_INFO.address.city,
    'Tamil Nadu tiles',
    'silver plus tiles',
    'gold tiles',
    'elite silver tiles',
    'elite gold tiles',
    'economy tiles',
    'dual layer technology',
    'best cool roof tiles in India',
    'top rated roof tiles',
    'affordable roof tiles',
    'industrial roof tiles',
    'residential roof tiles',
    'commercial building tiles'
  ].join(', ');

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const canonicalUrl = `https://${domain}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Helper function to update or create meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to update or create link tag
    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic Meta Tags for SEO
    updateMeta('description', finalDescription);
    updateMeta('keywords', finalKeywords);
    updateMeta('author', BUSINESS_INFO.ownerName);
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('bingbot', 'index, follow');
    updateMeta('revisit-after', '7 days');
    updateMeta('rating', 'general');
    updateMeta('distribution', 'global');
    updateMeta('language', 'English');
    updateMeta('coverage', 'India');
    updateMeta('target', 'all');

    // Open Graph Meta Tags for Social Sharing
    updateMeta('og:title', finalTitle, true);
    updateMeta('og:description', finalDescription, true);
    updateMeta('og:type', type === 'product' ? 'product' : 'website', true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:image', image, true);
    updateMeta('og:image:width', '1200', true);
    updateMeta('og:image:height', '630', true);
    updateMeta('og:image:alt', `Royal Kingdom Tiles - Premium Cool Roof Tiles in ${locationName}`, true);
    updateMeta('og:site_name', 'Royal Kingdom Tiles', true);
    updateMeta('og:locale', 'en_IN', true);
    updateMeta('og:phone_number', BUSINESS_INFO.phone, true);
    updateMeta('og:street-address', BUSINESS_INFO.address.full, true);
    updateMeta('og:locality', BUSINESS_INFO.address.city, true);
    updateMeta('og:region', BUSINESS_INFO.address.state, true);
    updateMeta('og:postal-code', BUSINESS_INFO.address.pincode, true);
    updateMeta('og:country-name', 'India', true);

    // Twitter Card Meta Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDescription);
    updateMeta('twitter:image', image);
    updateMeta('twitter:site', '@royalkingdomtiles');
    updateMeta('twitter:creator', '@royalkingdomtiles');

    // Geo Meta Tags for Local SEO (Critical for Local Rankings)
    updateMeta('geo.region', 'IN-TN');
    updateMeta('geo.placename', `${locationName}, ${BUSINESS_INFO.address.state}`);
    updateMeta('geo.position', '13.1067;80.1122');
    updateMeta('ICBM', '13.1067, 80.1122');
    updateMeta('place:location:latitude', '13.1067');
    updateMeta('place:location:longitude', '80.1122');

    // Business Information Meta Tags
    updateMeta('business:contact_data:street_address', BUSINESS_INFO.address.full);
    updateMeta('business:contact_data:locality', BUSINESS_INFO.address.city);
    updateMeta('business:contact_data:region', BUSINESS_INFO.address.state);
    updateMeta('business:contact_data:postal_code', BUSINESS_INFO.address.pincode);
    updateMeta('business:contact_data:country_name', 'India');
    updateMeta('business:contact_data:phone_number', BUSINESS_INFO.phone);
    updateMeta('business:contact_data:website', `https://${domain}`);
    updateMeta('business:contact_data:email', BUSINESS_INFO.email);

    // Canonical URL
    updateLink('canonical', canonicalUrl);

    // Alternate language links (for future expansion)
    updateLink('alternate', canonicalUrl);

    // JSON-LD Structured Data (Multiple Schemas for Better Rankings)
    const structuredDataArray = [];

    // 1. Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `https://${domain}/#organization`,
      name: 'Royal Kingdom Tiles',
      alternateName: ['RK Tiles', 'Royal Kingdom Cool Roof Tiles'],
      url: `https://${domain}`,
      logo: {
        '@type': 'ImageObject',
        url: `https://${domain}/logo.png`,
        width: 200,
        height: 200
      },
      image: image,
      description: 'India\'s leading manufacturer of premium cool roof tiles, heat reflective tiles & waterproof tiles.',
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.line1 + ', ' + BUSINESS_INFO.address.line2,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.pincode,
        addressCountry: 'IN'
      },
      founder: {
        '@type': 'Person',
        name: BUSINESS_INFO.ownerName
      },
      taxID: BUSINESS_INFO.gstin,
      sameAs: [
        'https://www.facebook.com/royalkingdomtiles',
        'https://www.instagram.com/royalkingdomtiles',
        'https://www.youtube.com/royalkingdomtiles',
        'https://www.linkedin.com/company/royalkingdomtiles',
        'https://twitter.com/royalkingdom'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: BUSINESS_INFO.phone,
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Tamil', 'Hindi', 'Telugu', 'Kannada', 'Malayalam']
        },
        {
          '@type': 'ContactPoint',
          telephone: BUSINESS_INFO.phone,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Tamil', 'Hindi']
        }
      ]
    };
    structuredDataArray.push(organizationSchema);

    // 2. LocalBusiness Schema (Critical for Local SEO)
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `https://${domain}/#localbusiness`,
      name: `Royal Kingdom Tiles ${locationName}`,
      image: image,
      description: `Premium cool roof tiles dealer in ${locationName}. Reduce indoor temperature by 10-15°C with our heat reflective tiles. Free consultation & installation support.`,
      url: canonicalUrl,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      priceRange: '₹45-₹120 per sqft',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.line1 + ', ' + BUSINESS_INFO.address.line2,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.1067,
        longitude: 80.1122
      },
      areaServed: [
        { '@type': 'City', name: locationName },
        { '@type': 'State', name: 'Tamil Nadu' },
        { '@type': 'Country', name: 'India' }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '256',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Rajesh Kumar' },
          datePublished: '2024-11-15',
          reviewBody: 'Excellent cool roof tiles! Our terrace temperature reduced by 12°C. Highly recommended.',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Priya Sharma' },
          datePublished: '2024-10-20',
          reviewBody: 'Best quality tiles at affordable price. Installation was quick and professional.',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cool Roof Tiles Collection',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Product', name: 'Silver Plus Cool Roof Tiles', description: 'Advanced dual layer heat reflective tiles' }
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Product', name: 'Gold Cool Roof Tiles', description: 'Premium waterproof tiles with 90% heat reflection' }
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Product', name: 'Elite Silver Cool Roof Tiles', description: 'Ultra-premium heat resistant tiles' }
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Product', name: 'Elite Gold Cool Roof Tiles', description: 'Top-tier thermal insulation tiles' }
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Product', name: 'Economy Cool Roof Tiles', description: 'Budget-friendly cooling tiles' }
          }
        ]
      }
    };
    structuredDataArray.push(localBusinessSchema);

    // 3. Product Schema (if product page)
    if (type === 'product' && productName) {
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': `https://${domain}/#product-${productName.toLowerCase().replace(/\s+/g, '-')}`,
        name: `${productName} Cool Roof Tiles`,
        image: image,
        description: `${productName} premium cool roof tiles from Royal Kingdom Tiles. Advanced dual-layer technology for maximum heat reflection and waterproofing.`,
        brand: {
          '@type': 'Brand',
          name: 'Royal Kingdom Tiles'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Royal Kingdom Tiles'
        },
        offers: {
          '@type': 'Offer',
          url: canonicalUrl,
          priceCurrency: 'INR',
          price: productPrice || '65',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Royal Kingdom Tiles'
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'IN'
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' },
              transitTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 7, unitCode: 'DAY' }
            }
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '89',
          bestRating: '5'
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Heat Reflection', value: '90%' },
          { '@type': 'PropertyValue', name: 'Waterproof', value: 'Yes' },
          { '@type': 'PropertyValue', name: 'Warranty', value: '10 Years' },
          { '@type': 'PropertyValue', name: 'Temperature Reduction', value: '10-15°C' }
        ]
      };
      structuredDataArray.push(productSchema);
    }

    // 4. FAQ Schema (Great for Featured Snippets)
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `What are cool roof tiles and how do they work in ${locationName}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Cool roof tiles from Royal Kingdom Tiles use advanced dual-layer technology to reflect up to 90% of solar heat. In ${locationName}'s hot climate, our tiles can reduce indoor temperature by 10-15°C, significantly lowering AC costs and improving comfort.`
          }
        },
        {
          '@type': 'Question',
          name: 'What is the price of cool roof tiles in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Royal Kingdom Tiles offers cool roof tiles starting from ₹45 per sqft for Economy range, up to ₹120 per sqft for Elite Gold. Prices vary based on coverage area, quality, and installation requirements. Contact us at +91 7200660261 for exact quotes.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much can I save on electricity with cool roof tiles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Customers using Royal Kingdom Tiles cool roof tiles report 20-40% reduction in electricity bills due to lower AC usage. The tiles reduce indoor temperature by 10-15°C, meaning your AC works less to maintain comfort. Most customers see ROI within 2-3 years.'
          }
        },
        {
          '@type': 'Question',
          name: 'Are Royal Kingdom Tiles waterproof?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! All Royal Kingdom Tiles products are 100% waterproof with our dual-layer technology. They provide complete protection against water seepage, leakage, and dampness. Our tiles come with a 10-year warranty against water damage.'
          }
        },
        {
          '@type': 'Question',
          name: `Where can I buy cool roof tiles in ${locationName}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `You can buy premium cool roof tiles from Royal Kingdom Tiles in ${locationName}. Visit our showroom at ${BUSINESS_INFO.address.full} or call ${BUSINESS_INFO.phone} for home delivery across ${locationName} and all India. WhatsApp us for instant quotes!`
          }
        },
        {
          '@type': 'Question',
          name: 'What is the warranty on Royal Kingdom Tiles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Royal Kingdom Tiles offers industry-leading warranty: Economy range - 5 years, Silver Plus & Gold - 7 years, Elite Silver & Elite Gold - 10 years. Warranty covers heat reflection performance, waterproofing, and material defects.'
          }
        }
      ]
    };
    structuredDataArray.push(faqSchema);

    // 5. BreadcrumbList Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://${domain}`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: locationName,
          item: `https://${domain}/${currentLocation?.slug || 'chennai'}`
        }
      ]
    };
    structuredDataArray.push(breadcrumbSchema);

    // 6. WebSite Schema with SearchAction
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `https://${domain}/#website`,
      url: `https://${domain}`,
      name: 'Royal Kingdom Tiles',
      description: 'India\'s #1 Cool Roof Tiles Manufacturer - Heat Reflective & Waterproof Tiles',
      publisher: { '@id': `https://${domain}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          // We don't have a dedicated /search route; use location-aware catalog with a query param.
          urlTemplate: `https://${domain}/${currentLocation?.slug || 'chennai'}/tiles?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
    structuredDataArray.push(websiteSchema);

    // Remove existing structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

    // Add all structured data schemas
    structuredDataArray.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
    };
  }, [finalTitle, finalDescription, finalKeywords, canonicalUrl, currentLocation, image, type, productName, productPrice, locationName]);

  return null;
};

export default SEO;

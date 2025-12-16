import React from 'react';
import { Link } from 'react-router-dom';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface CardGridProps {
  cards: Card[];
}

export const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <ul className="flex flex-wrap list-none m-0 p-0">
      {cards.map((card) => (
        <li
          key={card.id}
          className="flex p-4 w-full md:w-1/2 lg:w-1/3"
        >
          <div className="bg-white rounded shadow-[0_20px_40px_-14px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden group hover:shadow-2xl transition-shadow duration-300 w-full">
            {/* Card Image */}
            <div
              className="relative overflow-hidden bg-center bg-no-repeat bg-cover rounded-t transition-all duration-500 ease-in-out group-hover:contrast-100 contrast-75"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="pb-[56.25%] md:pb-[66.6%]" />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-gray-700 text-xl font-light tracking-[2px] uppercase mb-3">
                {card.title}
              </h3>
              <p className="flex-1 text-gray-600 text-sm leading-relaxed mb-5">
                {card.description}
              </p>
              <Link to={card.buttonLink}>
                <button className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 lowercase hover:bg-gray-50 transition-colors">
                  {card.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Example usage component
export const ExampleCardSection: React.FC = () => {
  const sampleCards: Card[] = [
    {
      id: 1,
      image: 'https://picsum.photos/800/600?random=401',
      title: 'Flex',
      description: 'This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.',
      buttonText: 'button',
      buttonLink: '#'
    },
    {
      id: 2,
      image: 'https://picsum.photos/800/600?random=402',
      title: 'Flex Grow',
      description: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
      buttonText: 'button',
      buttonLink: '#'
    },
    {
      id: 3,
      image: 'https://picsum.photos/800/600?random=403',
      title: 'Flex Shrink',
      description: 'This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.',
      buttonText: 'button',
      buttonLink: '#'
    },
    {
      id: 4,
      image: 'https://picsum.photos/800/600?random=404',
      title: 'Flex Basis',
      description: 'This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."',
      buttonText: 'button',
      buttonLink: '#'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <CardGrid cards={sampleCards} />
      </div>
    </section>
  );
};

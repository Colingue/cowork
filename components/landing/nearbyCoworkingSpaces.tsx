// components/NearbyCoworkingSpaces.tsx
import React from 'react';
import CoworkingCard from '../spaces/coworkingCard';

export default function NearbyCoworkingSpaces() {
  const coworkingSpaces = [
    {
      title: 'Espace Coworking Paris',
      price: 20,
      availablePlaces: 10,
      description:
        'Un espace moderne au cœur de Paris, idéal pour les professionnels.',
      image: '/img/paris.jpg',
      address: 'Paris'
    },
    {
      title: 'Coworking Lyon',
      price: 42,
      availablePlaces: 5,
      description: 'Bureaux partagés avec toutes les commodités nécessaires.',
      image: '/img/lyon.jpg',
      address: 'Lyon'
    },
    {
      title: 'Bordeaux Workspace',
      price: 25,
      availablePlaces: 8,
      description:
        'Un espace de coworking confortable et bien situé à Bordeaux.',
      image: '/img/bordeaux.jpg',
      address: 'Bordeaux'
    },
    {
      title: 'Marseille Hub',
      price: 14,
      availablePlaces: 12,
      description: 'Espaces de travail collaboratifs avec vue sur la mer.',
      image: '/img/marseille.jpg',
      address: 'Marseille'
    }
  ];

  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-8 text-center'>
          Espaces de Coworking Près de Chez Vous
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {coworkingSpaces.map((space, index) => (
            <CoworkingCard
              key={`space-${space.title}`}
              title={space.title}
              price={space.price}
              availablePlaces={space.availablePlaces}
              image={space.image}
              address={space.address}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

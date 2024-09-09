'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import Button from '../elements/button';

export default function QuoteSection() {
  const quotes = [
    {
      text: "CoWork m'a permis de trouver l'espace de coworking parfait en quelques clics. La plateforme est intuitive et propose des options adaptées à mes besoins.",
      name: 'Camille Leroy'
    },
    {
      text: "Grâce à CoWork, j'ai pu réserver rapidement un espace pour un événement professionnel. Les informations fournies étaient claires et précises.",
      name: 'Antoine Mercier'
    },
    {
      text: "La facilité d'utilisation de CoWork est impressionnante. J'ai trouvé un espace de travail près de chez moi et j'ai pu gérer mes réservations sans aucun souci.",
      name: 'Élodie Petit'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className='pt-16 bg-white'>
      <div className='mx-auto'>
        {/* Carousel des citations */}
        <Slider {...settings} className='mb-28'>
          {quotes.map((quote, index) => (
            <div key={index} className='text-center'>
              <Image
                src={'/img/quote-left-solid.svg'}
                alt='Quote Icon'
                width={48}
                height={48}
                className='mx-auto mb-4 fill-gray-400'
              />
              <p className='text-2xl font-semibold text-gray-800 mb-4 lg:w-1/2 lg:mx-auto'>
                &quot;{quote.text}&quot;
              </p>
              <p className='text-lg text-gray-600'>- {quote.name}</p>
            </div>
          ))}
        </Slider>

        {/* Images des personnes */}
        <div className='grid lg:grid-cols-5 grid-cols-2'>
          <div className='bg-blue-500 w-full aspect-square flex items-center justify-center text-white text-xl font-bold'>
            <img src='/img/person1.png' className='w-full object-contain' />
          </div>
          <div className='bg-blue-500 w-full aspect-square flex items-center justify-center text-white text-xl font-bold'>
            <img src='/img/person2.png' className='w-full object-contain' />
          </div>
          <div className='bg-blue-500 w-full aspect-square flex items-center justify-center text-white text-xl font-bold'>
            <img src='/img/person3.png' className='w-full object-contain' />
          </div>
          <div className='p-8 bg-blue-600 w-full aspect-square font-bold flex flex-col justify-between overflow-hidden'>
            <p className='md:text-2xl xl:text-3xl font-light text-white'>
              Plus de <span className='font-bold'>500</span> utilisateurs
              satisfaits
            </p>
            <Button variant='secondary' className='mt-4 md:text-base text-xs'>
              Faites-en partie
            </Button>
          </div>

          <div className='lg:block hidden bg-blue-500 w-full aspect-square flex items-center justify-center text-white text-2xl font-bold'>
            <img src='/img/person4.png' className='w-full object-contain' />
          </div>
        </div>
      </div>
    </section>
  );
}

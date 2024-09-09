// components/CoworkingCard.tsx
import Image from 'next/image';
import React from 'react';

type CoworkingCardProps = {
  title: string;
  price: number;
  availablePlaces: number;
  image: string;
  address: string;
};

export default function CoworkingCard({
  title,
  price,
  availablePlaces,
  address,
  image
}: Readonly<CoworkingCardProps>) {
  return (
    <div className='aspect-square'>
      <div className='relative aspect-square rounded-lg overflow-hidden'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          alt='coworking space image'
        />
      </div>

      <div className='p-2 flex justify-between items-end'>
        <div>
          <h2 className='font-semibold'>{title}</h2>

          <p className='text-gray-500'>{address}</p>
          <p className='text-gray-500 mb-2'>
            {availablePlaces} places disponibles
          </p>
        </div>
        <p className='text-lg font-bold mb-1'>{price} €</p>
      </div>
    </div>
  );
}

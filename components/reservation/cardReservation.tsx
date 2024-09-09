'use client';

import Image from 'next/image';
import Button from '../elements/button';
import Link from 'next/link';
import { useState } from 'react';
import Dialog from '../elements/dialog';
import { deleteReservation } from '@/app/actions';
import toast, { Toaster } from 'react-hot-toast';

export default function CardReservation({
  id,
  title,
  people,
  price,
  image,
  spaceId,
  address
}: Readonly<{
  id: string;
  title: string;
  people: number;
  price: number;
  image: string;
  spaceId: number;
  address: string;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickToDelete = async () => {
    try {
      await deleteReservation(id);

      toast.success('Réservation annulée!');
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <div className='flex max-w-xl'>
      <div className='flex w-9/12'>
        <div className='rounded-lg overflow-hidden relative w-36 h-36 mr-4'>
          <Image
            src={image}
            layout='fill'
            objectFit='cover'
            alt='reservation cowork image'
          />
        </div>
        <div>
          <h2 className='text-lg font-medium'>{title}</h2>

          <p className='text-sm font-medium text-gray-500'>{address}</p>
          <p className=' font-medium mb-4'>{people} personnes</p>
          <div className='mb-4 flex items-baseline'>
            <p className='text-sm mr-2'>Prix: </p>
            <p className='text-lg font-medium'>{price} €</p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <Link href='/spaces/[id]' as={`/spaces/${spaceId}`}>
          <Button variant='primary' className='mb-4'>
            Voir
          </Button>
        </Link>
        <Button onClick={() => setIsOpen(true)} variant='outline'>
          Annuler
        </Button>
      </div>

      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title='Annuler la réservation'
        textButton='Confirmer'
        description='Vous allez annuler la réservation. En confirmant vous vous engagez à lanulation'
        onClick={onClickToDelete}
      />
      <Toaster />
    </div>
  );
}

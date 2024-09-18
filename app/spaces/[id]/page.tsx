import ReservationContainer from '@/components/spaces/reservationContainer';
import Advantages from '@/components/spaces/spaceDetails/advantages';
import MapDetail from '@/components/spaces/spaceDetails/mapDetail';
import ToKnow from '@/components/spaces/spaceDetails/toKnow';
import prisma from '@/src/lib/prisma';
import { Share } from 'lucide-react';
import Image from 'next/image';
import SpaceLikeButton from '@/components/spaces/spaceLikeButton';
export default async function Space({
  params
}: Readonly<{ params: { id: string } }>) {
  const space = await prisma.space.findUnique({
    where: { id: params.id }
  });

  if (!space) {
    return <div>Space not found</div>;
  }

  return (
    <div className='lg:max-w-6xl lg:mx-auto mx-4 py-8'>
      <div className='mb-4 flex justify-between'>
        <h1 className='text-2xl font-bold'>{space.name}</h1>
        <div className='flex gap-2'>
          <button className='flex items-center gap-2 p-2 rounded-md hover:bg-slate-100'>
            <Share size={18} />
            <u className='text-gray-800 text-sm font-medium'>Partager</u>
          </button>
          <SpaceLikeButton spaceId={space.id} />
        </div>
      </div>
      <div className='mb-8 lg:h-[500px] h-[300px] relative'>
        <Image
          src={space?.image ?? 'https://placehold.co/600x400'}
          alt='Space image'
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
      </div>

      <div className='lg:flex'>
        <div className='lg:w-3/5 lg:mr-20'>
          <p className='text-xl font-bold '>
            Espace de coworking, {space.city}
          </p>
          <p className='mb-8'>
            Réservation en ligne · Paiement en ligne · Payable en €
          </p>

          <div className='border-t border-gray-300 mb-8'></div>

          <p className='font-medium text-xl mb-8'>Contact</p>
          <div className='flex mb-8 gap-8'>
            <div>
              <p className='font-medium'>Email</p>
              <p>colin.noiret@gmail.com</p>
            </div>
            <div>
              <p className='font-medium'>Téléphone</p>
              <p>0632799859</p>
            </div>
          </div>

          <div className='border-t border-gray-300 mb-8'></div>

          <p className='mb-8'>{space?.description}</p>

          <div>
            <Advantages
              advantages={[
                { name: 'Wifi haut débit' },
                { name: 'Bon emplacement' },
                { name: 'Bon emplacement' },
                { name: 'Wifi haut débit' },
                { name: 'Bon emplacement' },
                { name: 'Wifi haut débit' },
                { name: 'Wifi haut débit' },
                { name: 'Bon emplacement' }
              ]}
            />
          </div>
        </div>
        <div className='lg:w-2/5'>
          <ReservationContainer price={space.priceMin} />
        </div>
      </div>
      <div className='border-t border-gray-300 mb-8'></div>

      <MapDetail addressName={`${space.address}, ${space.city}`} />
      <ToKnow />
    </div>
  );
}

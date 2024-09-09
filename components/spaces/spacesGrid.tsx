import prisma from '@/src/lib/prisma';
import CoworkingCard from './coworkingCard';
import Link from 'next/link';

export default async function SpacesGrid() {
  const spaces = await prisma.space.findMany();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      {spaces.map((space) => (
        <Link href={`/spaces/${space.id}`} key={space.id}>
          <CoworkingCard
            key={space.id}
            title={space.name}
            price={space.priceMin}
            availablePlaces={5}
            address={space.address}
            image={space.image || 'https://via.placeholder.com/300'}
          />
        </Link>
      ))}
    </div>
  );
}

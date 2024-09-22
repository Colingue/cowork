import CoworkingCard from './coworkingCard';
import Link from 'next/link';
import { Space } from '@prisma/client';
import { CircleSlash2 } from 'lucide-react';

type SpacesGridProps = {
  spaces: Space[];
};

export default async function SpacesGrid({
  spaces
}: Readonly<SpacesGridProps>) {
  return spaces.length > 0 ? (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8'>
      {spaces.map((space) => (
        <Link href={`/spaces/${space.id}`} key={space.id}>
          <CoworkingCard
            key={space.id}
            title={space.name}
            price={space.priceMin}
            availablePlaces={5}
            address={space.address}
            image={space.image ?? 'https://via.placeholder.com/300'}
          />
        </Link>
      ))}
    </div>
  ) : (
    <div className='flex flex-col text-center text-gray-500 mt-28'>
      <CircleSlash2 className='mx-auto mb-4' size={48} />
      <h2 className='text-2xl font-semibold mb-2'>No spaces found</h2>
      Please try again later.
    </div>
  );
}

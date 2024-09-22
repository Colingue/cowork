import SkeletonGrid from '@/components/elements/skeletons/skeletonGrid';
import Await from '@/components/layouts/await';
import SpacesGrid from '@/components/spaces/spacesGrid';
import prisma from '@/src/lib/prisma';
import { Suspense } from 'react';

export default async function Favourites() {
  const promise = prisma.favorite.findMany({
    include: {
      space: true
    }
  });

  return (
    <div className='mx-8 lg:mx-20 py-6'>
      <h1 className='text-3xl font-semibold mb-6'>Favoris</h1>
      <Suspense fallback={<SkeletonGrid />}>
        <Await promise={promise}>
          {(favorites) => (
            <SpacesGrid spaces={favorites.map((favorite) => favorite.space)} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}

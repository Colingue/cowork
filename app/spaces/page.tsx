import SpacesGrid from '@/components/spaces/spacesGrid';
import { Suspense } from 'react';
import SkeletonGrid from '@/components/elements/skeletons/skeletonGrid';

export default function Spaces() {
  return (
    <div className='mx-8 lg:mx-20 py-10 '>
      <h1 className='text-3xl font-bold mb-4'>Coworking Spaces</h1>
      <Suspense fallback={<SkeletonGrid />}>
        <SpacesGrid />
      </Suspense>
    </div>
  );
}

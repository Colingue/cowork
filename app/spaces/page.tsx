import SpacesGrid from '@/components/spaces/spacesGrid';
import { Suspense } from 'react';
import SkeletonGrid from '@/components/elements/skeletons/skeletonGrid';
import HeaderSpacesType from '@/components/spaces/headerSpacesType';
import prisma from '@/src/lib/prisma';
import Await from '@/components/layouts/await';
import { v4 as uuidv4 } from 'uuid';

export default async function Spaces({
  searchParams
}: Readonly<{
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  const type =
    typeof searchParams?.type === 'string' ? searchParams.type : undefined;

  const promise = prisma.space.findMany({ where: { type } });

  return (
    <div className='mx-8 lg:mx-20 py-6' key={uuidv4()}>
      <HeaderSpacesType type={type} />
      <Suspense fallback={<SkeletonGrid />}>
        <Await promise={promise}>
          {(spaces) => <SpacesGrid spaces={spaces} />}
        </Await>
      </Suspense>
    </div>
  );
}

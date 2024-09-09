import prisma from '@/src/lib/prisma';
import Image from 'next/image';

type CardInfoSpaceProps = {
  id: string;
  children?: React.ReactNode;
};

export default async function CardInfoSpace({
  id,
  children
}: Readonly<CardInfoSpaceProps>) {
  const space = await prisma.space.findUnique({
    where: {
      id: id
    }
  });

  return (
    <div className='p-4 border'>
      <div className='flex'>
        <div className='w-32 h-32 rounded-lg overflow-hidden relative mr-4'>
          <Image
            src={space?.image ?? ''}
            alt='A rectangular image contained within a square'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-semibold'>{space?.name}</h2>
          <p className='text-sm text-gray-700'>{space?.description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

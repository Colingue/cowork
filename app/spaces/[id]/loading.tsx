import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <div className='lg:max-w-6xl mx-auto py-8'>
      <div className='mb-4 flex justify-between'>
        <Skeleton />
      </div>
      <div className='mb-8 h-[500px] relative'>
        <Skeleton className='absolute inset-0 w-full h-full' />
      </div>
    </div>
  );
}

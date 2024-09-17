import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse'>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className='aspect-square flex flex-col'>
          <div className='relative w-full h-full'>
            <Skeleton className='absolute inset-0 w-full h-full' />
          </div>
          <div className='p-2'>
            <Skeleton height={20} width={`80%`} />
            <Skeleton height={20} width={`60%`} className='mt-2' />
            <Skeleton height={20} width={`40%`} className='mt-2' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGrid;

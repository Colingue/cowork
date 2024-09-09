import Image from 'next/image';

type CardProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

export default function Card({
  children,
  title,
  description,
  image
}: Readonly<CardProps>) {
  return (
    <div className='p-4'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='h-40 w-full relative'>
          <Image src={image} alt={title} layout='fill' objectFit='cover' />
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <p className='text-gray-600'>{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

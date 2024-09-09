import { LucideWifi } from 'lucide-react';

type AdvantagesProps = {
  advantages: any;
};

export default function Advantages({ advantages }: Readonly<AdvantagesProps>) {
  return (
    <div className='mb-8'>
      <p className='font-medium text-xl mb-8'>
        Ce que propose cet espace de coworking
      </p>
      <div className='grid grid-cols-2 grid-rows-4 text-gray-600 gap-6'>
        {advantages.map((advantage: any) => (
          <div className='flex' key={advantage.name}>
            <LucideWifi className='mr-4' />
            <p>{advantage.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { Proportions, Ratio, ScreenShare, SquareUser } from 'lucide-react';
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';

type SpaceType = {
  name: string;
  icon: ReactElement;
};

export default function HeaderSpacesType({
  type
}: Readonly<{ type?: string }>) {
  const router = useRouter();

  const spacesType: SpaceType[] = [
    {
      icon: <SquareUser />,
      name: 'Private Office'
    },
    {
      icon: <Ratio />,
      name: 'Shared Desk'
    },
    {
      icon: <Proportions />,
      name: 'Dedicated Desk'
    },
    {
      icon: <ScreenShare />,
      name: 'Virtual Office'
    }
  ];

  return (
    <div className='flex justify-center gap-4'>
      {spacesType.map((spaceType) => (
        <div
          key={spaceType.name}
          className={`flex-col flex items-center text-center p-2 text-gray-500 gap-2 group cursor-pointer hover:text-gray-700 ${
            type === spaceType.name ? 'text-gray-700' : ''
          }`}
          onClick={() => {
            router.push(`/spaces?type=${spaceType.name}`);
            router.refresh();
          }}
        >
          {spaceType.icon}
          <p className='text-xs font-semibold'>{spaceType.name}</p>
          <div
            className={`border-b-2 ${
              type === spaceType.name
                ? 'border-gray-700 opacity-100'
                : 'border-gray-400 opacity-0'
            }
            w-full group-hover:opacity-100 transition-opacity duration-200`}
          ></div>
        </div>
      ))}
    </div>
  );
}

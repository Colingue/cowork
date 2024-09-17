'use client';

import Link from 'next/link';
import { useState } from 'react';
import ButtonSignOut from '../auth/buttonSignOut';
import { User } from 'next-auth';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import MenuTabs from './menuTabs';

type HeaderMenuProps = {
  user: User;
};

export default function HeaderMenu({ user }: Readonly<HeaderMenuProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative inline-block text-left'>
      <div
        onClick={toggleMenu}
        className='cursor-pointer flex border border-gray-300 p-2 items-center gap-4 rounded-full hover:shadow-md'
      >
        <Menu className='ml-2' size={20} />

        {user.image && user.name && (
          <Image
            src={user.image}
            alt={user.name}
            width={30}
            height={30}
            className=' rounded-full'
          />
        )}
      </div>

      {isMenuOpen && <MenuTabs user={user} />}
    </div>
  );
}

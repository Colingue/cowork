'use client';

import Link from 'next/link';
import { useState } from 'react';
import ButtonSignOut from '../auth/buttonSignOut';
import { User } from 'next-auth';
import Image from 'next/image';

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
      <div onClick={toggleMenu} className='cursor-pointer'>
        {user.image && user.name && (
          <Image
            src={user.image}
            alt={user.name}
            width={20}
            height={20}
            className='w-10 h-10 rounded-full object-cover'
          />
        )}
      </div>

      {isMenuOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
          <ul className='py-1'>
            <li>
              <Link
                href={`/profile/${user.id}`}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
              >
                Profil
              </Link>
            </li>
            <li>
              <ButtonSignOut className='block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full' />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

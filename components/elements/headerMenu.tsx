'use client';

import { useRef, useState } from 'react';
import { User } from 'next-auth';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import MenuTabs from './menuTabs';
import { motion } from 'framer-motion';
import useOutsideClick from '@/hooks/useOutsideClick';

type HeaderMenuProps = {
  user: User;
};

export default function HeaderMenu({ user }: Readonly<HeaderMenuProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsMenuOpen(false));

  return (
    <div className='relative inline-block text-left' ref={wrapperRef}>
      <motion.button
        whileTap={{ scale: 0.97 }}
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
      </motion.button>

      {isMenuOpen && <MenuTabs user={user} />}
    </div>
  );
}

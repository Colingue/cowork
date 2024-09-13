'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import ButtonSignIn from '../auth/buttonSignIn';

export default function HambergerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((o) => !o);
  return (
    <div className='lg:hidden block'>
      <Menu className='cursor-pointer' onClick={toggleIsOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
            className='fixed left-0 top-0 w-3/4 p-8 bg-white z-20 h-full'
          >
            <div className='mb-8'>
              <div className='text-xl font-bold text-blue-600 mb-4'>
                <Link href='/'>CoWork</Link>
              </div>
              <Link
                onClick={toggleIsOpen}
                href='/spaces'
                className='text-gray-700 hover:text-blue-600 font-semibold'
              >
                Coworking
              </Link>
              <div className='border-b my-4' />
              <Link
                onClick={toggleIsOpen}
                href='/reservations'
                className='text-gray-700 hover:text-blue-600 font-semibold'
              >
                Reservations
              </Link>
            </div>
            <ButtonSignIn />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

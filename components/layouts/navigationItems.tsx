'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationItems() {
  const pathname = usePathname();

  return (
    <nav className='space-x-8 hidden md:flex font-medium'>
      <Link
        href='/spaces'
        className={` py-2 px-4 rounded-full ${
          pathname === '/spaces'
            ? 'text-gray-800 font-semibold'
            : 'text-gray-500 hover:bg-slate-100'
        }`}
      >
        Coworking
      </Link>
      <Link
        href='/reservations'
        className={` py-2 px-4 rounded-full ${
          pathname === '/reservations'
            ? 'text-gray-800 font-semibold'
            : 'text-gray-500 hover:bg-slate-100'
        }`}
      >
        Reservations
      </Link>
    </nav>
  );
}

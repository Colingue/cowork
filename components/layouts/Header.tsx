import Link from 'next/link';
import ButtonSignIn from '../auth/buttonSignIn';
import { auth } from '@/auth';
import HeaderMenu from '../elements/headerMenu';
import HambergerMenu from '../elements/hambergerMenu';
export default async function Header() {
  const session = await auth();
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-xl font-bold text-blue-600'>
          <Link href='/'>CoWork</Link>
        </div>
        {/* Navigation Items */}
        <nav className='space-x-8 hidden md:flex'>
          <Link href='/spaces' className='text-gray-700 hover:text-blue-600'>
            Coworking
          </Link>
          <Link
            href='/reservations'
            className='text-gray-700 hover:text-blue-600'
          >
            Reservations
          </Link>
        </nav>
        {session?.user ? (
          <div className='hidden lg:block'>
            <HeaderMenu user={session.user} />
          </div>
        ) : (
          <div>
            <ButtonSignIn />
          </div>
        )}

        <HambergerMenu />
      </div>
    </header>
  );
}

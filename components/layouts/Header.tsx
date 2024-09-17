import Link from 'next/link';
import ButtonSignIn from '../auth/buttonSignIn';
import { auth } from '@/auth';
import HeaderMenu from '../elements/headerMenu';
import HambergerMenu from '../elements/hambergerMenu';
import NavigationItems from './navigationItems';
import Logo from '../elements/logo';

export default async function Header() {
  const session = await auth();
  return (
    <header className='bg-white'>
      <div className='container mx-auto py-3 flex items-center justify-between'>
        {/* Logo */}
        <Logo />
        <NavigationItems />
        <div className='hidden lg:block'>
          {session?.user ? (
            <HeaderMenu user={session.user} />
          ) : (
            <ButtonSignIn />
          )}
        </div>

        <HambergerMenu />
      </div>
      <div className='border-b border-gray-200'></div>
    </header>
  );
}

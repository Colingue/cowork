import Link from 'next/link';
import ButtonSignOut from '../auth/buttonSignOut';
import { User } from 'next-auth';

type MenuTabsProps = {
  user: User;
};

export default function MenuTabs({ user }: Readonly<MenuTabsProps>) {
  return (
    <div className='shadow-md bg-white rounded-md absolute right-0 text-sm inline-block w-56 font-medium'>
      <div className='py-2'>
        <Link
          href={`/profile/${user.id}`}
          className='block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold'
        >
          Profil
        </Link>
        <Link
          href={`/profile/${user.id}`}
          className='px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold flex'
        >
          Notifications
          <div className='bg-red-500 w-2 h-2 rounded-full ml-1'></div>
        </Link>
        <Link
          href={`/profile/${user.id}`}
          className='block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold'
        >
          Favoris
        </Link>
      </div>
      <div className='border-t border-gray-200'></div>
      <div className='py-2'>
        <Link
          href={`/profile/${user.id}`}
          className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
        >
          Centre d&apos;aide
        </Link>
        <ButtonSignOut className='w-full text-left px-4 py-2 text-gray-700 font-normal hover:bg-gray-100' />
      </div>
    </div>

    // <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
    //   <ul className='py-1'>
    //     <li>
    //       <Link
    //         href={`/profile/${user.id}`}
    //         className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
    //       >
    //         Profil
    //       </Link>
    //     </li>
    //     <li>
    //       <ButtonSignOut className='block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full' />
    //     </li>
    //   </ul>
    // </div>
  );
}

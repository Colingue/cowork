import { Laptop } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className=' flex gap-2 items-center text-xl font-bold text-blue-600'>
      <Laptop size={24} className='text-blue-600' />
      <Link href='/'>CoWork</Link>
    </div>
  );
}

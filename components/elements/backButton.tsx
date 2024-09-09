'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='hover:bg-slate-100 p-3 rounded-full absolute -left-14'
    >
      <ChevronLeft />
    </button>
  );
}

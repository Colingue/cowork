import { auth } from '@/auth';
import Button from '@/components/elements/button';
import prisma from '@/src/lib/prisma';
import { CheckIcon, Wallet } from 'lucide-react';
import Image from 'next/image';

export default async function Page({
  params
}: Readonly<{ params: { id: string } }>) {
  const { id } = params;
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  });

  const isCurrentUser = session?.user?.id === id;

  return (
    <div className='lg:max-w-5xl w-full mx-auto py-10'>
      <div className='flex gap-20'>
        <div className='w-1/3'>
          <div className='shadow-lg rounded-xl flex items-center gap-10 h-56 mb-8'>
            <div className='text-center flex-grow gap-2 flex flex-col items-center'>
              {session?.user?.image && (
                <div className='rounded-full overflow-hidden w-24 mx-auto'>
                  <Image
                    src={session.user.image}
                    alt='profile image'
                    width={100}
                    height={100}
                  />
                </div>
              )}
              <p className='text-2xl font-bold'>{session?.user?.name}</p>
              <p>Voyager</p>
            </div>
            <div className='w-28'>
              <p className='font-bold'>1</p>
              <p className='text-xs'>mois sur Cowork</p>
            </div>
          </div>

          {isCurrentUser && (
            <div className='border rounded-xl p-6'>
              <p className='text-xl font-semibold mb-4'>
                Vérifications effectuées par {user?.name}
              </p>
              <div className='flex items-center gap-2'>
                <CheckIcon color='#222222' />
                <p>Adresse e-mail</p>
              </div>

              <div className='border-b my-8' />

              <p className='text-xl font-semibold mb-6'>
                Procédez à la vérification de votre identité
              </p>

              <p className='text-sm mb-4'>
                Avant de réserver ou d'accueillir des voyageurs sur Airbnb, vous
                devez effectuer cette procédure.
              </p>

              <Button variant='outline'>Vérifier mon identité</Button>
            </div>
          )}
        </div>
        <div className='w-2/3'>
          <h1 className='text-2xl font-bold mb-8'>
            Information sur {user?.name}
          </h1>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex items-center gap-2'>
              <Wallet color='#222222' />
              <p>Je vis à : Néris-les-bains</p>
            </div>
            <div className='flex items-center gap-2'>
              <Wallet color='#222222' />
              <p>Je vis à : Néris-les-bains</p>
            </div>
            <div className='flex items-center gap-2'>
              <Wallet color='#222222' />
              <p>Je vis à : Néris-les-bains</p>
            </div>
            <div className='flex items-center gap-2'>
              <Wallet color='#222222' />
              <p>Je vis à : Néris-les-bains</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

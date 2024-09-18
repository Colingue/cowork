import { auth } from '@/auth';
import Button from '@/components/elements/button';
import CardReservation from '@/components/reservation/cardReservation';
import prisma from '@/src/lib/prisma';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return <div>Not found</div>;
  }

  const reservations = await prisma.booking.findMany({
    where: {
      userId: user.id
    },
    include: {
      space: true
    }
  });

  return (
    <div className='mx-auto py-20 w-4/5 max-w-6xl'>
      <h1 className='text-3xl font-semibold mb-6'>Réservations</h1>
      <div className='border-b border-gray-200 mb-6'></div>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation.id} className='mb-6'>
            <p className='font-medium text-xl mb-4'>
              {dayjs(reservation.startDate).format('DD MMM.')}-{' '}
              {dayjs(reservation.startDate).format('DD MMM.')}
            </p>
            <CardReservation
              id={reservation.id}
              image={reservation.space.image || ''}
              title={reservation.space.name}
              people={reservation.peopleNumber}
              price={reservation.space.priceMax}
              spaceId={reservation.spaceId}
              address={reservation.space.address}
            />
          </div>
        ))
      ) : (
        <div>
          <p className='text-xl font-medium'>
            Pas de voyage réservé... pour l&rsquo;instant !
          </p>
          <p className='mt-1'>
            Il est temps de ressortir vos valises et de préparer votre prochaine
            aventure.
          </p>
          <Link href='/spaces'>
            <Button variant='outline' className='mt-6 mb-10 !w-fit'>
              Lancer une recherche
            </Button>
          </Link>
          <div className='border-b border-gray-200 mb-6'></div>
          <p className='text-sm'>
            Vous ne trouvez pas votre réservation ici ?{' '}
            <u className='font-semibold'>Accéder au Centre d&rsquo;aide</u>
          </p>
        </div>
      )}
    </div>
  );
}

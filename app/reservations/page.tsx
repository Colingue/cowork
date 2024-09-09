import { auth } from '@/auth';
import CardReservation from '@/components/reservation/cardReservation';
import prisma from '@/src/lib/prisma';
import dayjs from 'dayjs';

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
      <h1 className='text-3xl font-medium mb-6'>Mes réservations</h1>
      {reservations.map((reservation) => (
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
      ))}
    </div>
  );
}

import Button from '@/components/elements/button';
import SumReservationPrice from '@/components/elements/sumReservationPrice';
import CardInfoSpace from '@/components/reservation/cardInfoSpace';
import prisma from '@/src/lib/prisma';
import Link from 'next/link';

export default async function ReservationConfirmation({
  params
}: Readonly<{ params: { reservationId: string } }>) {
  const { reservationId } = params;

  const reservation = await prisma.booking.findUnique({
    where: {
      id: reservationId
    },
    include: {
      space: true
    }
  });

  console.log('reservation', reservation);

  if (!reservation) {
    return <div>Not found</div>;
  }

  return (
    <div className='lg:max-w-5xl mx-auto'>
      <h1 className='text-3xl font-medium mb-6'>
        Votre réservation est confirmée!
      </h1>

      <div className='mb-6'>
        <CardInfoSpace id={reservation.space.id} />
      </div>

      <Link href='/reservations'>
        <Button variant='primary'>Voir mes reservations</Button>
      </Link>
    </div>
  );
}

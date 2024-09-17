'use client';

import { createReservation } from '@/app/actions';
import Button from '../elements/button';
import { useRouter } from 'next/navigation';

export default function ReservationPayButton({
  spaceId,
  startDate,
  endDate,
  userId,
  status,
  peopleNumber
}: Readonly<{
  spaceId: string;
  startDate: string;
  endDate: string;
  userId: string;
  status: string;
  peopleNumber: number;
}>) {
  const router = useRouter();
  const onSubmit = async () => {
    const createdBooking = await createReservation(
      spaceId,
      startDate,
      endDate,
      userId,
      status,
      peopleNumber
    );

    router.push(`/reservation/${createdBooking.id}/confirmation`);
  };

  return (
    <Button variant='primary' onClick={onSubmit}>
      Payer
    </Button>
  );
}

'use client';

import { useState } from 'react';
import Button from '../elements/button';
import DatePicker from '../elements/datePicker';
import NumberPicker from '../elements/numberPicker';
import SumReservationPrice from '../elements/sumReservationPrice';
import { useParams, useRouter } from 'next/navigation';

type ReservationContainerProps = {
  price: number;
};

export default function ReservationContainer({
  price
}: Readonly<ReservationContainerProps>) {
  const { id } = useParams();

  const [people, setPeople] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const days =
    Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;
  const canReserve = people > 0 && days > 0;
  const router = useRouter();

  const onClickReserve = () => {
    router.push(
      `/reservation/space/${id}?people=${people}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&price=${price}`
    );
  };

  return (
    <div className='sticky top-10 rounded-xl shadow-md p-4 mb-8'>
      <p className='text-blue-600 mb-4'>
        <b className='text-xl'>€ {price}</b> / jour
      </p>
      <div className='mb-4 flex'>
        <DatePicker title='Début' date={startDate} onChange={setStartDate} />
        <DatePicker title='Fin' date={endDate} onChange={setEndDate} />
      </div>
      <div className='mb-4'>
        <NumberPicker
          title='Personnes'
          subtitle='Sous titres'
          onChange={setPeople}
          value={people}
        />
      </div>
      <Button variant='primary' disabled={!canReserve} onClick={onClickReserve}>
        Réserver
      </Button>
      <p className='text-center px-4 text-sm mt-4'>
        Aucun montant ne vous sera débité pour le moment
      </p>
      {canReserve && (
        <SumReservationPrice days={days} price={price} person={people} />
      )}
    </div>
  );
}

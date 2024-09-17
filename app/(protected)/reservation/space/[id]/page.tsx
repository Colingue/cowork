import CardInfoSpace from '@/components/reservation/cardInfoSpace';
import dayjs from 'dayjs';
import { auth } from '@/auth';
import ReservationPayButton from '@/components/reservation/reservationPayButton';
import SumReservationPrice from '@/components/elements/sumReservationPrice';
import BackButton from '@/components/elements/backButton';
import RedirectToLogin from '@/components/auth/redirectToLogin';

export default async function Page({
  params,
  searchParams
}: Readonly<{
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  const { id } = params;

  const session = await auth();

  if (!id || !searchParams?.endDate || !searchParams?.startDate) {
    return <div>Not found</div>;
  }

  if (!session?.user?.id) {
    return <RedirectToLogin />;
  }

  const days =
    Math.ceil(
      (dayjs(searchParams.endDate as string)
        .toDate()
        .getTime() -
        dayjs(searchParams.startDate as string)
          .toDate()
          .getTime()) /
        (1000 * 60 * 60 * 24)
    ) + 1;

  return (
    <div className='lg:max-w-5xl lg:mx-auto mx-8 pt-20 flex lg:flex-row flex-col-reverse'>
      <div className='lg:w-1/2 mr-10'>
        <div className='flex items-center relative'>
          <BackButton />
          <h1 className='text-3xl font-medium'>Confirmer et payer</h1>
        </div>
        <h2 className='text-xl font-medium mb-4'>Votre réservation</h2>
        <div className='mb-8'>
          {searchParams?.startDate && searchParams?.endDate && (
            <div className='mb-4'>
              <p className='text-lg font-medium'>Dates</p>
              <div className='flex'>
                <p>
                  {dayjs(searchParams.startDate as string).format('DD MMM.')}
                </p>
                -
                <p>{dayjs(searchParams.endDate as string).format('DD MMM.')}</p>
              </div>
            </div>
          )}

          <div>
            <p className='text-lg font-medium'>Nombre de personnes</p>
            {searchParams?.people} personnes
          </div>
        </div>
        <div className='border-b border-gray-300 mb-8'></div>
        <div className='mb-4'>
          <h2 className='text-xl font-medium mb-4'>
            Renseignez votre numéro de téléphone pour réserver
          </h2>
          <input
            type='tel'
            className='border border-gray-300 p-2 w-full mb-2'
            placeholder='Téléphone'
          />
          <p className='text-xs text-gray-600'>
            Nous vous appellerons ou vous enverrons un SMS pour confirmer votre
            numéro. Les frais standards d&apos;envoi de messages et
            d&apos;échange de données s&apos;appliquent.
          </p>
        </div>
        <ReservationPayButton
          spaceId={id}
          startDate={searchParams.startDate as string}
          endDate={searchParams.endDate as string}
          userId={session.user.id}
          status='pending'
          peopleNumber={parseInt(searchParams.people as string)}
        />
      </div>

      <div className='lg:w-1/2'>
        <CardInfoSpace id={id}>
          <SumReservationPrice
            days={days}
            person={parseInt(searchParams.people as string)}
            price={parseInt(searchParams.price as string)}
          />
        </CardInfoSpace>
      </div>
    </div>
  );
}

type SumReservationPriceProps = {
  price: number;
  person: number;
  days: number;
};

export default function SumReservationPrice({
  price,
  person,
  days
}: Readonly<SumReservationPriceProps>) {
  const priceWithoutTax = price * person * days;
  const total = price * days * person + 5;

  return (
    <div className='bg-white rounded-xl p-4 '>
      <div className='text-gray-500'>
        <div className='flex justify-between'>
          <u>
            {price}€ * {person} personnes * {days} jours
          </u>
          <p>{priceWithoutTax}€</p>
        </div>

        <div className='flex justify-between pt-3'>
          <u>Fraix cowork</u>
          <p>5€</p>
        </div>
      </div>
      <div className='border-t border-gray-300 my-4'></div>
      <div>
        <div className='flex justify-between font-semibold '>
          <p>Total</p>
          <p>{total}€</p>
        </div>
      </div>
    </div>
  );
}

'use client';

type NumberPickerProps = {
  title: string;
  subtitle?: string;
  value: number;
  onChange: (value: number) => void;
};

export default function NumberPicker({
  title,
  subtitle = '',
  value,
  onChange
}: Readonly<NumberPickerProps>) {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='font-semibold'>{title}</p>
        <p className='text-sm'>{subtitle}</p>
      </div>
      <div className='flex items-center gap-2 w-32 justify-between'>
        <button
          className='border-gray-300 hover:border-gray-700 border rounded-full h-8 w-8 flex items-center justify-center font-bold text-2xl'
          onClick={decrement}
        >
          -
        </button>
        <span>{value}</span>
        <button
          className='border-gray-300 hover:border-gray-700 border rounded-full h-8 w-8 flex items-center justify-center font-bold text-2xl'
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

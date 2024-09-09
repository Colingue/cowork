type DatePickerProps = {
  date: Date;
  onChange: (date: Date) => void;
  title?: string;
};

export default function DatePicker({
  title,
  date,
  onChange
}: Readonly<DatePickerProps>) {
  return (
    <div className='w-full p-2 border border-gray-300 rounded-lg'>
      {title && <p className='uppercase font-bold text-xs'>{title}</p>}
      <input
        value={date.toISOString().split('T')[0]}
        onChange={(e) => onChange(new Date(e.target.value))}
        type='date'
      />
    </div>
  );
}

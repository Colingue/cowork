import Link from 'next/link';
import Button from '../elements/button';

export default function Hero() {
  return (
    <section
      className='relative bg-cover bg-center h-[75vh]'
      style={{ backgroundImage: "url('/img/hero_img.webp')" }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='bg-white p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto'>
          <h1 className='text-4xl  text-gray-800 mb-12'>
            Trouvez l&apos;espace de coworking idéal pour travailler en toute
            sérénité.
          </h1>

          <div className='flex flex-col justify-center mb-6 mx-10'>
            <select className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <option value=''>Choisissez votre région</option>
              <option value='paris'>Paris</option>
              <option value='lyon'>Lyon</option>
              <option value='marseille'>Marseille</option>
              <option value='bordeaux'>Bordeaux</option>
              <option value='toulouse'>Toulouse</option>
            </select>
            <Button className='mt-6'>Rechercher</Button>
          </div>

          <p className='text-sm text-gray-500'>
            Ou{' '}
            <Link href='#' className='text-blue-600 hover:underline'>
              inscrivez-vous
            </Link>{' '}
            pour proposer votre espace de coworking.
          </p>
        </div>
      </div>
    </section>
  );
}

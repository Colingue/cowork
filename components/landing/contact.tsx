import Button from '../elements/button';

export default function Contact() {
  return (
    <section
      className='relative bg-cover bg-center lg:h-[75vh]'
      style={{ backgroundImage: "url('/img/coworking_contact.jpg')" }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='bg-white p-8 rounded-lg shadow-lg text-center lg:w-7/12 mx-auto'>
          <div className='lg:w-1/2 lg:mx-auto mb-8'>
            <h1 className='text-4xl  text-gray-800 mb-4'>
              Dites-nous ce dont vous avez besoin
            </h1>
            <p className='text-sm text-gray-500'>
              Nous vous mettons en relation avec les meilleurs espaces de
              coworking de votre région.
            </p>
          </div>
          <div className='flex flex-col justify-center mb-6'>
            <input
              type='text'
              placeholder='Nom'
              className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
            />
            <input
              type='email'
              placeholder='Email'
              className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
            />
            <textarea
              placeholder='Message'
              className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
            ></textarea>
            <div className='flex flex-col w-80 mx-auto'>
              {' '}
              <Button className='mt-6'>Envoyer</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

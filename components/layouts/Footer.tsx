import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Section d'Informations */}
          <div className='mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-2'>CoWork</h2>
            <p className='text-gray-400'>
              Votre espace de coworking pour un travail collaboratif et
              productif.
            </p>
            <p className='text-gray-400 mt-2'>
              123 Rue de l&apos;Innovation, Paris, France
            </p>
            <p className='text-gray-400'>
              Email:{' '}
              <Link
                href='mailto:contact@cowork.com'
                className='text-blue-400 hover:text-blue-600'
              >
                contact@cowork.com
              </Link>
            </p>
          </div>

          {/* Liens Rapides */}
          <div className='mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-2'>Liens Rapides</h2>
            <ul>
              <li>
                <Link
                  href='/coworking'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Coworking
                </Link>
              </li>
              <li>
                <Link
                  href='/reservations'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  href='/subscriptions'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  href='/events'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Suivez-Nous */}
          <div>
            <h2 className='text-lg font-bold mb-2'>Suivez-Nous</h2>
            <ul className='flex space-x-4'>
              <li>
                <Link
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-blue-600'
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-blue-600'
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-gray-500 text-sm mt-8'>
          &copy; {new Date().getFullYear()} CoWork. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

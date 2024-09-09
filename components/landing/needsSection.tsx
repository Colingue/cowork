'use client';
import Link from 'next/link';
import Button from '../elements/button';
import Card from '../elements/card';
import Slider from 'react-slick';

export default function NeedsSection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const cardsData = [
    {
      title: 'Bureaux',
      description: 'Des bureaux modernes et fonctionnels pour votre équipe.',
      image: '/img/office.webp'
    },
    {
      title: 'Salles de Réunion',
      description: 'Des salles équipées pour vos réunions professionnelles.',
      image: '/img/meeting_room.webp'
    },
    {
      title: 'Espaces Communes',
      description: 'Des espaces partagés pour collaborer en toute sérénité.',
      image: '/img/common_area.webp'
    },
    {
      title: 'Événements',
      description: 'Organisez vos événements dans des espaces adaptés.',
      image: '/img/events.webp'
    }
  ];

  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/3 lg:mb-0'>
          <h2 className='lg:text-6xl text-2xl font-bold text-gray-800 mb-4'>
            Pour tous vos besoins
          </h2>

          <Link href='/coworking' className='lg:mt-4'>
            Tous les services
          </Link>
        </div>
        <div className='w-full lg:w-2/3'>
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              >
                <Button variant='outline' className='mt-4'>
                  En savoir plus
                </Button>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

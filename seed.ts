import { faker } from '@faker-js/faker';
import prisma from './src/lib/prisma';

async function main() {
  const imagesUrl = [
    'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3712597/pexels-photo-3712597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
  const numberOfSpaces = 3; // Définir combien d'espaces vous voulez créer

  for (let i = 0; i < numberOfSpaces; i++) {
    const spaceType = faker.helpers.arrayElement([
      'Private Office',
      'Shared Desk',
      'Dedicated Desk',
      'Virtual Office'
    ]);
    const priceMin = faker.number.int({ min: 50, max: 500 });
    const priceMax = faker.number.int({
      min: priceMin + 10,
      max: priceMin + 500
    });

    await prisma.space.create({
      data: {
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        image: imagesUrl[i],
        type: spaceType,
        priceMin: priceMin,
        priceMax: priceMax,
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        contactEmail: faker.internet.email(),
        contactPhone: faker.phone.number()
      }
    });
  }

  console.log(`Created ${numberOfSpaces} fake coworking spaces.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

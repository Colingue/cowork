import { faker } from '@faker-js/faker';
import prisma from './src/lib/prisma';

async function main() {
  const numberOfSpaces = 10; // Définir combien d'espaces vous voulez créer

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
        image: faker.image.url(),
        type: spaceType,
        priceMin: priceMin,
        priceMax: priceMax,
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        contactEmail: 'colin.noiret@gmail.com',
        contactPhone: '0632799859'
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

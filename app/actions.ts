'use server';

import prisma from '@/src/lib/prisma';
import { Booking } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function createReservation(
  spaceId: string,
  startDate: string,
  endDate: string,
  userId: string,
  status: string,
  people: number
): Promise<Booking> {
  const response = await prisma.booking.create({
    data: {
      spaceId: spaceId,
      startDate: startDate,
      endDate: endDate,
      userId: userId,
      status: status,
      peopleNumber: people
    }
  });

  return response;
}

export async function deleteReservation(reservationId: string): Promise<any> {
  await prisma.booking.delete({
    where: {
      id: reservationId
    }
  });

  revalidatePath('/');
}

export async function addFavorite(
  spaceId: string,
  userId: string
): Promise<any> {
  await prisma.favorite.create({
    data: {
      spaceId: spaceId,
      userId: userId
    }
  });

  revalidatePath('/');
}

export async function removeFavorite(
  spaceId: string,
  userId: string
): Promise<any> {
  await prisma.favorite.delete({
    where: {
      spaceId_userId: {
        spaceId: spaceId,
        userId: userId
      }
    }
  });

  revalidatePath('/');
}

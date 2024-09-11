/*
  Warnings:

  - Added the required column `contactEmail` to the `spaces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `spaces` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "spaces" ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactPhone" TEXT NOT NULL;

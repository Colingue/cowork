/*
  Warnings:

  - A unique constraint covering the columns `[space_id,user_id]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "favorites_space_id_user_id_key" ON "favorites"("space_id", "user_id");

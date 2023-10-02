/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `officers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "officers_email_key" ON "officers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

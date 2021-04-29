/*
  Warnings:

  - Added the required column `name` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Clinic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

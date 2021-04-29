/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Adminstration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Adminstration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Adminstration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adminstration" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Adminstration.cpf_unique" ON "Adminstration"("cpf");

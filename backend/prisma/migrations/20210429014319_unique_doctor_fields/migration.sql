/*
  Warnings:

  - A unique constraint covering the columns `[crm]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Doctor.crm_unique" ON "Doctor"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor.cpf_unique" ON "Doctor"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor.rg_unique" ON "Doctor"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor.phone_unique" ON "Doctor"("phone");

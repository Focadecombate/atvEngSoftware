/*
  Warnings:

  - The primary key for the `Appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Clinic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_pkey",
DROP COLUMN "id",
ADD PRIMARY KEY ("patientId", "doctorId", "Date");

-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "phone" TEXT NOT NULL;

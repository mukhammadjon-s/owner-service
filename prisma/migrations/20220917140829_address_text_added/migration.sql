/*
  Warnings:

  - Added the required column `address` to the `warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "warehouse" DROP CONSTRAINT "warehouse_addressId_fkey";

-- AlterTable
ALTER TABLE "warehouse" ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "addressId" DROP NOT NULL;

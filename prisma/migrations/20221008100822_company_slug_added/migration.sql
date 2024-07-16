/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "company_slug_key" ON "company"("slug");

-- CreateEnum
CREATE TYPE "ComnpanyStatus" AS ENUM ('ACTIVE', 'BLOCKED', 'PENDING', 'PAUSED');

-- CreateEnum
CREATE TYPE "TimeTableStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "WarehouseStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "EmployeeStatus" AS ENUM ('ACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "HolderType" AS ENUM ('LLC', 'IE', 'SEE');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('ALL', 'PREORDER', 'END_PRODUCT');

-- CreateEnum
CREATE TYPE "LangEnum" AS ENUM ('UZ', 'RU', 'En');

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT,
    "legalName" TEXT NOT NULL,
    "logo" TEXT,
    "mfo" TEXT,
    "holderType" "HolderType" NOT NULL DEFAULT 'LLC',
    "directorFullName" TEXT,
    "bankName" TEXT,
    "branchName" TEXT,
    "branchCode" TEXT,
    "oked" TEXT,
    "inn" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "tgPhone" TEXT,
    "address" TEXT,
    "email" TEXT,
    "orderType" "OrderType" NOT NULL DEFAULT 'END_PRODUCT',
    "legalAddress" TEXT,
    "addressId" INTEGER,
    "type" TEXT,
    "status" "ComnpanyStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "home" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "domofon" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,
    "postalCode" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timeTable" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "day" INTEGER,
    "status" "TimeTableStatus" NOT NULL DEFAULT 'ACTIVE',
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "timeTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companyTranslations" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "itemId" INTEGER NOT NULL,
    "lang" "LangEnum" NOT NULL DEFAULT 'UZ',
    "description" TEXT NOT NULL,

    CONSTRAINT "companyTranslations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warehouse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "status" "WarehouseStatus" NOT NULL DEFAULT 'ACTIVE',
    "addressId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "status" "EmployeeStatus" NOT NULL DEFAULT 'ACTIVE',
    "position" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_addressId_key" ON "company"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "timeTable_companyId_key" ON "timeTable"("companyId");

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeTable" ADD CONSTRAINT "timeTable_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "warehouse" ADD CONSTRAINT "warehouse_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "warehouse" ADD CONSTRAINT "warehouse_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "officers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "taxId" VARCHAR(11) NOT NULL,
    "phone" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "officers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insurers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "registerNumber" VARCHAR(6) NOT NULL,
    "taxId" VARCHAR(14) NOT NULL,
    "phone" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "officerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "insurers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "taxId" VARCHAR(11) NOT NULL,
    "birtyhday" TIMESTAMP(3) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "insurerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authorizations" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "officerId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authorizations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "officers_taxId_key" ON "officers"("taxId");

-- CreateIndex
CREATE UNIQUE INDEX "insurers_registerNumber_key" ON "insurers"("registerNumber");

-- CreateIndex
CREATE UNIQUE INDEX "insurers_taxId_key" ON "insurers"("taxId");

-- CreateIndex
CREATE UNIQUE INDEX "users_taxId_key" ON "users"("taxId");

-- AddForeignKey
ALTER TABLE "insurers" ADD CONSTRAINT "insurers_officerId_fkey" FOREIGN KEY ("officerId") REFERENCES "officers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_insurerId_fkey" FOREIGN KEY ("insurerId") REFERENCES "insurers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "authorizations" ADD CONSTRAINT "authorizations_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "authorizations" ADD CONSTRAINT "authorizations_officerId_fkey" FOREIGN KEY ("officerId") REFERENCES "officers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

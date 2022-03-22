-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('Customer', 'Owner');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nickname" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "phone" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "role" "UserRoleType" DEFAULT E'Customer';

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "locationRaw" TEXT NOT NULL DEFAULT E'',
    "category" TEXT NOT NULL DEFAULT E'',
    "owner" TEXT,
    "reservationPrice" DOUBLE PRECISION NOT NULL,
    "info" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_mode" TEXT,
    "image_id" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "reservationFee" INTEGER NOT NULL,
    "refund" INTEGER,
    "user" TEXT,
    "restaurant" TEXT,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "timestamp" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "edited" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL DEFAULT E'',
    "content" TEXT NOT NULL DEFAULT E'',
    "likes" INTEGER DEFAULT 0,
    "restaurant" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_User_bookmarks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Restaurant_images" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Review_images" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Restaurant_owner_idx" ON "Restaurant"("owner");

-- CreateIndex
CREATE INDEX "Reservation_user_idx" ON "Reservation"("user");

-- CreateIndex
CREATE INDEX "Reservation_restaurant_idx" ON "Reservation"("restaurant");

-- CreateIndex
CREATE INDEX "Review_user_idx" ON "Review"("user");

-- CreateIndex
CREATE INDEX "Review_restaurant_idx" ON "Review"("restaurant");

-- CreateIndex
CREATE UNIQUE INDEX "_User_bookmarks_AB_unique" ON "_User_bookmarks"("A", "B");

-- CreateIndex
CREATE INDEX "_User_bookmarks_B_index" ON "_User_bookmarks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Restaurant_images_AB_unique" ON "_Restaurant_images"("A", "B");

-- CreateIndex
CREATE INDEX "_Restaurant_images_B_index" ON "_Restaurant_images"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Review_images_AB_unique" ON "_Review_images"("A", "B");

-- CreateIndex
CREATE INDEX "_Review_images_B_index" ON "_Review_images"("B");

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_restaurant_fkey" FOREIGN KEY ("restaurant") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurant_fkey" FOREIGN KEY ("restaurant") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_bookmarks" ADD FOREIGN KEY ("A") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_bookmarks" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Restaurant_images" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Restaurant_images" ADD FOREIGN KEY ("B") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Review_images" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Review_images" ADD FOREIGN KEY ("B") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

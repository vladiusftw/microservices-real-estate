/*
  Warnings:

  - You are about to drop the `PropertyImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `PropertyImage` DROP FOREIGN KEY `PropertyImage_propertyId_fkey`;

-- DropTable
DROP TABLE `PropertyImage`;

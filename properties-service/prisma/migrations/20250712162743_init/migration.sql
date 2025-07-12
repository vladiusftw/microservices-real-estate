-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `numRooms` INTEGER NOT NULL,
    `numBathrooms` INTEGER NOT NULL,
    `size` INTEGER NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `isRent` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Property_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `propertyId` INTEGER NOT NULL,

    UNIQUE INDEX `PropertyImage_url_key`(`url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyAmenity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PropertyAmenity_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PropertyToPropertyAmenity` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PropertyToPropertyAmenity_AB_unique`(`A`, `B`),
    INDEX `_PropertyToPropertyAmenity_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PropertyImage` ADD CONSTRAINT `PropertyImage_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PropertyToPropertyAmenity` ADD CONSTRAINT `_PropertyToPropertyAmenity_A_fkey` FOREIGN KEY (`A`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PropertyToPropertyAmenity` ADD CONSTRAINT `_PropertyToPropertyAmenity_B_fkey` FOREIGN KEY (`B`) REFERENCES `PropertyAmenity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

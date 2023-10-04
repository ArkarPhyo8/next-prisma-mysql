-- CreateTable
CREATE TABLE `workers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `workers_id_key`(`id`),
    UNIQUE INDEX `workers_name_key`(`name`),
    UNIQUE INDEX `workers_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

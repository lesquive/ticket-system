/*
  Warnings:

  - You are about to alter the column `lat` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `long` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "gender" TEXT,
    "avatar" TEXT,
    "company_name" TEXT,
    "phone" TEXT,
    "time_zone" TEXT,
    "lat" REAL,
    "long" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("avatar", "company_name", "createdAt", "email", "first_name", "gender", "id", "last_name", "lat", "long", "phone", "time_zone", "updatedAt") SELECT "avatar", "company_name", "createdAt", "email", "first_name", "gender", "id", "last_name", "lat", "long", "phone", "time_zone", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

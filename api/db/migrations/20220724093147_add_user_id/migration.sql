/*
  Warnings:

  - Added the required column `userId` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Made the column `user` on table `Idea` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "user" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Idea" ("body", "createdAt", "id", "title", "user") SELECT "body", "createdAt", "id", "title", "user" FROM "Idea";
DROP TABLE "Idea";
ALTER TABLE "new_Idea" RENAME TO "Idea";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

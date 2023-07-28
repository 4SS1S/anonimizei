/*
  Warnings:

  - Added the required column `expires` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL;

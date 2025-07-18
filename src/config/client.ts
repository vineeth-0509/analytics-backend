// /src/config/prisma.ts
// import { PrismaClient } from "../generated/prisma";
import { PrismaClient } from "@prisma/client";

// Ensures a single instance of Prisma Client is used across the application.
const prisma = new PrismaClient();

export default prisma;

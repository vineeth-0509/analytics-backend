"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /src/config/prisma.ts
// import { PrismaClient } from "../generated/prisma";
const client_1 = require("@prisma/client");
// Ensures a single instance of Prisma Client is used across the application.
const prisma = new client_1.PrismaClient();
exports.default = prisma;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = {
    info: (message, ...args) => {
        console.log(`[INFO] ${new Date().toISOString()} | ${message}`, ...args);
    },
    error: (message, ...args) => {
        console.log(`[error] ${new Date().toISOString()} | ${message}`, ...args);
    },
    warn: (message, ...args) => {
        console.log(`[warn] ${new Date().toISOString()} | ${message}`, ...args);
    }
};
exports.default = logger;

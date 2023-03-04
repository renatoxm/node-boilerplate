"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
var pino_1 = __importDefault(require("pino"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var isDevelopment = process.env.NODE_ENV === 'development';
var logger = isDevelopment
    ? (0, pino_1.default)({
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
            },
        },
    })
    : (0, pino_1.default)();
exports.default = logger;

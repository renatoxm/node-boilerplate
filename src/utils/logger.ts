/* eslint-disable indent */
import pino from 'pino'
import dotenv from 'dotenv'
dotenv.config()

const isDevelopment = process.env.NODE_ENV === 'development'

const logger = isDevelopment
  ? pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    })
  : pino()

export default logger

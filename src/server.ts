import app from './app'
import logger from './utils/logger'
import config from './config'

const PORT = config.PORT

const server = app.listen(4000, () => {
  logger.info('Server started listening at http://localhost:4000')
})

server.on('error', (error: Error) => {
  logger.error(`Server error: ${error.message}`)
})

const signals = ['SIGTERM', 'SIGINT']

async function gracefulShutdown(signal: string) {
  logger.info(`Received ${signal}. Starting graceful shutdown...`)
  await server.close()
  logger.info('Server disconnected. Shutting down.')
  process.exit(0)
}

for (const signal of signals) {
  process.on(signal, () => {
    gracefulShutdown(signal).catch(error => {
      logger.error(`Error during graceful shutdown: ${error.message}`)
      process.exit(1)
    })
  })
}

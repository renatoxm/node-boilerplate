import app from '~/app'
import logger from './utils/logger'

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  logger.info(`server listenning at http://localhost:${PORT}`)
})

const signals = ['SIGTERM', 'SIGINT']

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    server.close()
    logger.info('Server disconnected')
  })
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i])
}

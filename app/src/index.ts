import app from './framework/server'
import logger from './interfaces/tools/logger'

process.on('uncaughtException', (e: Error): void => {
  logger.error('Uncaugth Exception :', e)
})
process.on('unhandledRejection', (reason, p): void => {
  logger.error('Unhandled Rejection.')
  logger.debug('Promise', p)
  logger.debug('Reason :', reason)
})

app.on('application:booted', app.init)
app.boot()

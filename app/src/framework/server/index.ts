import Koa from 'koa'
import router from './routes/router'
import config from '../../interfaces/tools/config/config'
import logger from '../../interfaces/tools/logger'

export interface CustomApp extends Koa {
  boot: () => void
  init: () => void
}
const koaApp: Koa = new Koa()
const app = koaApp as CustomApp

app.boot = async (): Promise<void> => {
  logger.info('Environment variables loaded.')

  const { default: middlewaresHandler } = await import('./middlewares')
  await middlewaresHandler.register(app)

  app.use(router.routes())

  logger.info('Application booting process ended.')
  app.emit('application:booted')
}

app.init = (): void => {
  const PORT = parseInt(config.get('PORT'), 10) || 8080
  app.listen(PORT)
  logger.info(`Server started on port: ${PORT}`)

  app.emit('application:started')
}

app.on('error', (err: Error): void => {
  logger.error(err.toString())
  logger.debug(err.stack || '')
})

export default app

import { Middleware } from 'koa'
import { CustomApp } from '..'
import logger from '../../../interfaces/tools/logger'
import { isDirectory, getFullPath } from '../../../interfaces/tools/functions'
import middlewareConfiguration, { MiddlewareConfiguration } from './config'

export interface MiddlewareModule {
  name: string
  middlewareModule: Promise<{ default: Middleware }>
}

export interface MiddlewareHandler {
  __getAllActiveMiddlewares: (middlewareConfiguration: MiddlewareConfiguration) => MiddlewareModule[]
  register: (app: CustomApp) => Promise<void>
}

const middlewaresHandler: MiddlewareHandler = {
  __getAllActiveMiddlewares: (middlewareConfiguration): MiddlewareModule[] => {
    const activeMiddlewares: MiddlewareModule[] = []

    Object.keys(middlewareConfiguration).forEach((middlewareFolder): void => {
      const middlewarePath = getFullPath(__dirname, middlewareFolder)
      if (isDirectory(middlewarePath) && middlewareConfiguration[middlewareFolder].active) {
        activeMiddlewares.push({
          name: middlewareFolder,
          middlewareModule: import(middlewarePath),
        })
      }
    })

    return activeMiddlewares
  },

  register: (app): Promise<void> => {
    return new Promise(
      async (resolve, reject): Promise<void> => {
        logger.info('Registering middlewares.')
        const defers = middlewaresHandler.__getAllActiveMiddlewares(middlewareConfiguration)

        try {
          const middlewares = await Promise.all(defers.map((x): Promise<{ default: Middleware }> => x.middlewareModule))
          middlewares.forEach((middleware, index): void => {
            app.use(middleware.default)
            logger.verbose(`registered "${defers[index].name}"`)
          })
        } catch (error) {
          logger.error(error)
          reject(error)
        }

        resolve()
      },
    )
  },
}

export default middlewaresHandler

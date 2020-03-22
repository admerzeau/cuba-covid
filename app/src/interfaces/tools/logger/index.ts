import winston, { format, Logger } from 'winston'
import config from '../config/config'
import correlator from '../store'
import { TransformableInfo } from 'logform'

interface WinstonLogger extends Logger {
  mute: () => void
  unmute: () => void
}

export const formatLog = (info: TransformableInfo): string =>
  `${info.timestamp} ${correlator.getId() || 'NO ID'} ${info.level}: ${info.message}`

// Log levels precedence [error, warn, info, verbose, debug, silly]
const logger: Logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: format.combine(format.timestamp(), format.align(), format.colorize(), format.printf(formatLog)),
      level: config.get('LOG_LEVEL').toString(),
      handleExceptions: true,
    }),
  ],
})

const appLogger = logger as WinstonLogger
appLogger.mute = function(): void {
  this.level = 'none'
}
appLogger.unmute = function(): void {
  this.level = config.get('LOG_LEVEL').toString()
}

export default appLogger

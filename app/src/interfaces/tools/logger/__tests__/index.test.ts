process.env.LOG_LEVEL = 'debug'
import logger, { formatLog } from '../index'
import { TransformableInfo } from 'logform'

describe('Winston logger tests', (): void => {
  beforeEach((): void => {
    logger.level = 'debug'
  })

  it('should get correct message format', (): void => {
    const nowTime = Date.now()
    const msg: TransformableInfo = {
      timestamp: nowTime,
      level: 'info',
      message: 'test msg',
    }

    const resultingMessage = formatLog(msg)
    expect(resultingMessage).toBe(`${nowTime} NO ID info: test msg`)
  })

  it('should mute the logger', (): void => {
    logger.mute()
    expect(logger.level).toBe('none')
  })

  it('should unmute the logger', (): void => {
    expect(logger.level).toBe('debug')

    logger.mute()
    expect(logger.level).toBe('none')

    logger.unmute()
    expect(logger.level).toBe('debug')
  })
})

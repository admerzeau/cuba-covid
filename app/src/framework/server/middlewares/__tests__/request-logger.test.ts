import { createMockContext } from '@shopify/jest-koa-mocks'
import logger from '../../../../interfaces/tools/logger'
import loggerMiddleware from '../requests-logger/index'

describe('LoggerMiddleware Middeware', (): void => {
  beforeAll((): void => {
    logger.mute()
  })

  afterAll((): void => {
    logger.unmute()
  })

  it('should call logger.info after call is returning', async (done): Promise<void> => {
    const mockedContext = createMockContext()
    const loggerSpy = jest.spyOn(logger, 'info')

    await loggerMiddleware(mockedContext, jest.fn())
    expect(loggerSpy).toBeCalled()
    done()
  })
})

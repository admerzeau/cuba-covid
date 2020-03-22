import { createMockContext } from '@shopify/jest-koa-mocks'
import logger from '../../../../interfaces/tools/logger'
import errorsHandler from '../errors-handler/index'

describe('ErrorsHandler Middeware', (): void => {
  beforeAll((): void => {
    logger.mute()
  })

  afterAll((): void => {
    logger.unmute()
  })

  it('should capture an error thrown from inside any call process', async (done): Promise<void> => {
    const errorMsg = 'DUMMY_ERROR'
    const mockedContext = createMockContext()
    mockedContext.app.emit = jest.fn()

    await errorsHandler(
      mockedContext,
      (): Promise<void> =>
        new Promise((res, rej): void => {
          rej(new Error(errorMsg))
        }),
    )
    expect(mockedContext.status).toEqual(500)
    expect(mockedContext.body.message).toEqual(errorMsg)
    done()
  })
})

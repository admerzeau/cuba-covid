import { createMockContext } from '@shopify/jest-koa-mocks'
import logger from '../../../../interfaces/tools/logger'
import correlationalIdMiddleware from '../correlational-id'

describe('Correlational Id Middeware', (): void => {
  beforeAll((): void => {
    logger.mute()
  })

  afterAll((): void => {
    logger.unmute()
  })

  it('should set x-correlational-id header on response after call', async (done): Promise<void> => {
    const mockedContext = createMockContext()

    await correlationalIdMiddleware(mockedContext, jest.fn())

    expect(mockedContext.response.header).toHaveProperty('x-correlational-id')
    done()
  })
})

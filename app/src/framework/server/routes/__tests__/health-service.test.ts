/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createMockContext } from '@shopify/jest-koa-mocks'
import logger from '../../../../interfaces/tools/logger'
import healthService from '../health-service'

const getMock = jest.fn(() => ({ body: 'SUCCESS' }))
jest.mock('../../../../interfaces/controllers/health', () => {
  return jest.fn().mockImplementation(() => {
    return { get: getMock }
  })
})

describe('Health Service', (): void => {
  beforeAll((): void => {
    logger.mute()
  })

  afterAll((): void => {
    logger.unmute()
  })

  it('Should get health', async (done): Promise<void> => {
    const mockedContext = createMockContext()

    await healthService(mockedContext, jest.fn())
    expect(getMock).toBeCalled()
    expect(mockedContext.body).toBe('SUCCESS')
    done()
  })
})

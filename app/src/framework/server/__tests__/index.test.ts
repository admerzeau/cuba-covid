import app from '../'
import logger from '../../../interfaces/tools/logger'
jest.mock('koa')

describe('Server', (): void => {
  beforeAll((): void => {
    logger.mute()
  })

  afterAll((): void => {
    logger.unmute()
  })

  it('should have boot and init phase', async (): Promise<void> => {
    expect(app.boot).toBeDefined()
    expect(app.init).toBeDefined()
  })

  it('should boot', async (): Promise<void> => {
    jest.spyOn(app, 'emit')

    await app.boot()

    expect(app.emit).toHaveBeenCalledWith('application:booted')
  })

  it('should init', async (): Promise<void> => {
    jest.spyOn(app, 'emit')

    await app.init()

    expect(app.emit).toHaveBeenCalledWith('application:started')
  })
})

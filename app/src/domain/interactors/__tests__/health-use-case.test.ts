import HealthUseCase from '../health-use-case'
import Response from '../../entities/response'

describe('Health use case', (): void => {
  let healthInteractor: HealthUseCase = null

  beforeEach((): void => {
    healthInteractor = new HealthUseCase()
  })

  it('should works', async (): Promise<void> => {
    let response: Response = await healthInteractor.execute()
    expect(response.body).toStrictEqual({ message: 'The API is healthy' })
  })
})

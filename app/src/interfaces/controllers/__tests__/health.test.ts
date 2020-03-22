import HealthUseCase from '../../../domain/interactors/health-use-case'
import HealthController from '../health'
jest.mock('../../../domain/interactors/health-use-case')

const mockedHealthUseCase = HealthUseCase as jest.Mock<HealthUseCase>

describe('HealthController', (): void => {
  it('should work', async (): Promise<void> => {
    let response = await new HealthController().get()

    expect(mockedHealthUseCase).toBeCalled()
    expect(response).toBeUndefined()
  })
})

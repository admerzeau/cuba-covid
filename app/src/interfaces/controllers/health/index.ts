import HealthUseCase from '../../../domain/interactors/health-use-case'
import Response from '../../../domain/entities/response'

export default class HealthController {
  public constructor() {}

  public async get(): Promise<Response> {
    const health = new HealthUseCase()

    let response: Response = await health.execute()
    return response
  }
}

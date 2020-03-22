import Interactor from './interactor'
import Response from '../entities/response'

export default class GetHealth implements Interactor {
  public constructor() {}
  public async execute(): Promise<Response> {
    let response: Response = { body: { message: 'The API is healthy' } }
    return response
  }
}

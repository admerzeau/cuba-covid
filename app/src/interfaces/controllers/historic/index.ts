import HistoricUseCase from '../../../domain/interactors/historic-use-case'
import Response from '../../../domain/entities/response'
import StaticProvider from '../../tools/communication/static-provider/static-provider'

export default class HistoricController {
  public constructor() {}

  public async get(): Promise<Response> {
    const historic = new HistoricUseCase(new StaticProvider())

    let response: Response = await historic.execute()
    return response
  }
}

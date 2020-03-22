import Interactor from './interactor'
import Response from '../entities/response'
import DataProvider from '../interfaces/data-provider'

export default class GetHistoric implements Interactor {
  public constructor(private readonly dataProvider: DataProvider) {}
  public async execute(): Promise<Response> {
    const response = await this.dataProvider.request()
    return { body: response }
  }
}

import Request from '../entities/request'
import Response from '../entities/response'

export default interface Interactor {
  execute(input: Request, code: string): Promise<Response>
}

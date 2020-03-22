import { Middleware } from 'koa'
import Response from '../../../../domain/entities/response'
import HistoricController from '../../../../interfaces/controllers/historic'

const historicService: Middleware = async (ctx): Promise<void> => {
  let response: Response = await new HistoricController().get()

  ctx.body = response.body
}

export default historicService

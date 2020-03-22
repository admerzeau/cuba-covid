import { Middleware } from 'koa'
import Response from '../../../../domain/entities/response'
import HealthController from '../../../../interfaces/controllers/health'

const healthService: Middleware = async (ctx): Promise<void> => {
  let response: Response = await new HealthController().get()

  ctx.body = response.body
}

export default healthService

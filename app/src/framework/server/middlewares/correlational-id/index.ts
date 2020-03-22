import { Middleware } from 'koa'
import uuid from 'uuid'
import correlation from '../../../../interfaces/tools/store'

const correlationalIdMiddleware: Middleware = async (ctx, next): Promise<void> => {
  const correlationalIdHeaderName = 'X-Correlational-Id'

  const correlationalId = ctx.get(correlationalIdHeaderName) || uuid.v4()
  ctx.set(correlationalIdHeaderName, correlationalId)

  await correlation.withId(correlationalId, next)
}

export default correlationalIdMiddleware

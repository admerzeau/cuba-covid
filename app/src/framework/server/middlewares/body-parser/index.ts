import koaBodyparser from 'koa-bodyparser'
import { Middleware } from 'koa'

const bodyParserMiddleware: Middleware = koaBodyparser({
  jsonLimit: '2mb',
})

export default bodyParserMiddleware

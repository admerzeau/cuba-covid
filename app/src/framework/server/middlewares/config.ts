export interface MiddlewareConfiguration {
  [s: string]: { active: boolean }
}

const middlewareConfiguration: MiddlewareConfiguration = {
  'correlational-id': { active: true },
  'errors-handler': { active: true },
  cors: { active: true },
  'body-parser': { active: true },
  'requests-logger': { active: true },
  'response-time': { active: true },
  'not-found': { active: true },
  // request: { active: true },
}

export default middlewareConfiguration

import Daily from './daily'

export default interface Historic {
  latest: Daily
  history: Daily[]
}

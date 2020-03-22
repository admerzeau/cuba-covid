import Historic from '../entities/historic'

export default interface DataProvider {
  request(): Promise<Historic>
}

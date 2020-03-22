/* eslint-disable @typescript-eslint/no-explicit-any */
import cls from 'cls-hooked'

const store = cls.createNamespace('2588feab-6d80-406a-835d-0e07c15615db')

type MiddlewareResult = Promise<any>
type Next = () => MiddlewareResult

const withId = async (id: string, next: Next): MiddlewareResult => {
  return await store.runAndReturn(
    async (): MiddlewareResult => {
      store.set('correlator', id)
      return await next()
    },
  )
}

const getId = (): string => store.get('correlator')

export default {
  withId,
  getId,
}

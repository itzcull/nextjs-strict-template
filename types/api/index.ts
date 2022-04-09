export const ALL_METHODS = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
  'PATCH',
  'HEAD',
  'OPTIONS',
] as const

export declare type AllHttpMethods = typeof ALL_METHODS[number]

export const ALLOWED_METHODS: AllHttpMethods[] = ['GET']

export type ContextFunction<Body = any, Output = any> = (
  params: Record<string, string>,
  querys: Record<string, string | string[]>,
  payload: Body
) => Output

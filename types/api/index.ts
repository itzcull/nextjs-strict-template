export const METHODS = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
  'PATCH',
  'HEAD',
  'OPTIONS',
] as const

export declare type HttpMethods = typeof METHODS[number]

export type ContextFunction<Body = any, Output = any> = (
  params: Record<string, string>,
  querys: Record<string, string>,
  payload: Body
) => Output

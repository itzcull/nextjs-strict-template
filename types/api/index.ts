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

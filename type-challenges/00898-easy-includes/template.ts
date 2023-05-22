import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer R, ...infer Reset] ? Equal<R, U> extends true ? true : Includes<Reset, U> : false

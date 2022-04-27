import type { Equal, Expect } from '@type-challenges/utils'

// example 1: Get a type inside Promise wrapper
type MyAwaited<T> = T extends Promise<infer R> ? R : T

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<string | number>

type cases = [ 
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
] // Passed!

// example 2: Nested Promise
type MyAwaitedNested<T> = T extends Promise<infer R> ? MyAwaitedNested<R> : T

type ZZ = Promise<Promise<string>>

type nestedCase = [
  Expect<Equal<MyAwaitedNested<ZZ>, string>>
] // Passed!

// example 3: Get a base type of array type
type NS = number[]
type TNumber<T> = T extends (infer R)[] ? R : T

type arrayCase = [
  Expect<Equal<TNumber<NS>, number>>
] // Passed!
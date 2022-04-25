import type { Equal, Expect } from '@type-challenges/utils'

// Example: Get a type inside a wrapped type.

type MyAwaited<T> = T extends Promise<infer R> ? R : T

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<string | number>

type cases = [ 
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
] // Passed!

// Nested Promise
type MyAwaitedNested<T> = T extends Promise<infer R> ? MyAwaitedNested<R> : T

type ZZ = Promise<Promise<string>>

type nestedCase = [
  Expect<Equal<MyAwaitedNested<ZZ>, string>>
] // Passed!
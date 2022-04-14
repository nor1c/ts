// 
type Flatten<T> = T extends Array<infer R> ? R : T
type f1 = Flatten<number[]> // number
type f2 = Flatten<string[]> // string

// 
type T1<T> = T extends (infer R)[] ? R : T
type t1 = T1<number[]> // number
type t2 = T1<string> // string
type t3 = T1<never> // never

// infer in promise
type unboxFromPromise<T> = T extends Promise<infer R> ? R : T
type prom1 = Promise<number[]>
type unbox1 = unboxFromPromise<prom1> // number[]

type unboxFromPromise2<T> = T extends Promise<(infer R)[]> ? R : T
type prom2 = Promise<number[]>
type unbox2 = unboxFromPromise2<prom2> // number

// infer in function return
type Fun1<T> = T extends (...args: number[]) => infer R ? R : T
type fun1 = (a: string) => number
type rFun1 = Fun1<fun1> // number

type Fun2<T> = T extends (a: number) => infer R ? R : T
type fun2 = (a: number) => number
type rFun2 = Fun2<fun2> // number

// multiple candidate
type M1<T> = T extends { a: infer R, b: infer R } ? R : T
type m1 = M1<{ a: number, b: string }> // number | string

// recursive conditional type
type Flatten2<T extends readonly unknown[]> = T extends unknown[] ? _Flatten<T>[] : readonly _Flatten<T>[]
type _Flatten<T> = T extends readonly (infer R)[] ? _Flatten<R> : T

declare function flatRecurisve<T extends readonly unknown[]>(x: T): Flatten2<T>

const t1 = flatRecurisve(['apple', ['orange', 'pear', 100], [[4, [true]]]] as const) // type: readonly ('apple', 'orange', 'pear', 100, 4, true)

// 
type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : T

type Num = GetReturnType<number> // number
type Str = GetReturnType<string> // string
type Bools = GetReturnType<boolean[]> // boolean[]
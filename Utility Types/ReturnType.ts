// ReturnType<Type>

type T0 = ReturnType<() => string> // string

type T1 = ReturnType<(s: string) => void> // void

type T2 = ReturnType<<T>() => T> // unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T> // number[]

function t2<T extends U, U extends number[]>(a: T): T {
    return a
}
type RT2 = ReturnType<typeof t2> // number[]

declare function f1(): { a: number; b: string }
type T4 = ReturnType<typeof f1> // { a: number; b: string }

type T5 = ReturnType<any> // any

type T6 = ReturnType<never> // never
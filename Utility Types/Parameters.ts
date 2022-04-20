// Parameters<Type>

type T0 = Parameters<() => string> // type: []

type T1 = Parameters<(x: string) => string> // type: [x: string]

type T2 = Parameters<<T>(arg: T) => T> // type: [arg: unknown]

declare function f1 (arg: { a: number, b: string }): void
type T3 = Parameters<typeof f1> // type: [arg: { a: number, b: string }]

type T4 = Parameters<any> // type: unknown[]

type T5 = Parameters<never> // type: never
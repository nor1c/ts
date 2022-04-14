type ToArray<T> = T extends any ? T[] : never

type tStr = ToArray<string> // string[]
type tStrNum = ToArray<string | number> // string[] | number[]

// comparison
type T1<T> = T[]
type t1 = T1<string | number> // (string | number)[]
const t1d: t1 = ['a string', 2, 3]

type T2<T> = T extends any ? T[] : never
type t2 = T2<string | number> // string[] | number[]
const t2d: t2 = ['a string', 2, 3] // error
const t2dStr: t2 = ['a string', 'another string']
const t2dNum: t2 = [1, 2, 3, 4]

// avoid desired behaviour
type T3<T> = [T] extends any? T[] : never
type t3 = T3<string | number> // (string | number)[]
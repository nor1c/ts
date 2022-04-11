// example 1
function LoggerAndReturn<T>(thing: T): T {
  return thing
}
const message: string = LoggerAndReturn<string>('Hello World')

// example 2
function map<Input, Output>(arr: Input[], func: (args: Input) => Output): Output[] {
  return arr.map(func)
}
console.log(map(['1', '2', '3'], x => parseInt(x))) // map(string[], string => parseInt(string) => number) => number[]

// example 3
function longer<T extends { length: number }>(a: T, b: T): T {
  if (a.length > b.length) {
    return a
  } else {
    return b
  }
}
console.log(longer('bobby', 'rudy'))
console.log(longer([1, 2, 3], [1, 2, 3, 4]))

// specifying type arguments
function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}
console.log(combine([1, 2, 3], [4, 5, 6]))
// console.log(combine([1, 2, 3], ['hello'])); // error
console.log(combine<string | number>([1, 2, 3], ['hello'])) // ok

// use fewer type parameters
function filter1<T>(arr: T[], func: (args: T) => boolean): T[] {
  return arr.filter(func)
}
function filter2<T, Func extends (args: T) => boolean>(arr: T[], func: Func): T[] {
  return arr.filter(func)
}
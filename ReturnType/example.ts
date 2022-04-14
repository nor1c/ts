type Predicate = (n: number) => boolean
type K = ReturnType<Predicate>

function f (n: number): boolean {
  return !!n
}
type F = ReturnType<f> // 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'
type F2 = typeof f // (n: number) => boolean
type F3 = ReturnType<typeof f> // boolean

// another example
function f2 () {
  return {
    x: 10,
    y: 3
  }
}
type F4 = ReturnType<typeof f2> // { x: number, y: number }
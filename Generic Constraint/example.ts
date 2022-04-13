interface LengthWise {
  length: number
}

function logging<T extends LengthWise>(arg: T): T {
  return arg
}

logging([1, 2, 3])
logging({ length: 10, value: 3 })
logging(10)

// using type parameters
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const xGP = { a: 1, b: 2, c: 3 }

getProp(xGP, 'a')
getProp(xGP, 'm') // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c"'.
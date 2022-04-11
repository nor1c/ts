// 
function sum ({ a, b, c }: { a: number, b: number, c: number }): number {
  return a+b+c
}
console.log(sum({ a: 1, b: 2, c: 3 }))

// 
type ABC = { a: number, b: number, c: number }
type fSum = ({ a, b, c }: ABC) => number
const sum2: fSum = ({ a, b, c }) => {
  return a+b+c
}
console.log(sum2({ a: 1, b: 2, c: 3 }))
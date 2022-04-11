function makeDate (timestamp: number): Date
function makeDate (d: number, m: number, y: number): Date
function makeDate (dOrTimestamp: number, m?: number, y?: number): Date {
  if (typeof m !== 'undefined' && typeof y !== 'undefined') {
    return new Date(y, m, dOrTimestamp)
  } else {
    return new Date(dOrTimestamp)
  }
}

console.log(makeDate(12345678))
console.log(makeDate(5, 5, 5))


function fn (a: number): number
function fn (b: string): number // signature is not compatible
function fn (c: number): number {
  return c
}
type t1 = [string, number, number?]

const collOfTuples: t1[] = [
  ['Jack', 150],
  ['Andy', 250, 150]
]
console.log(collOfTuples) // [['Jack', 150], ['Andy', 250, 150]]

const tMix: [t1, string] = [collOfTuples[1], 'just a test']
console.log(tMix) // [['Andy', 250, 150], 'just a test']

const [name, number1, number2] = collOfTuples[1]
console.log(name) // Andy
console.log(number2) // 150

type tupleSpread = [string, ...number[], boolean]
const tSpread: tupleSpread = ['Jack', 1, 2, 3, true]
console.log(tSpread) // ['Jack', 1, 2, 3, true]

// optional properties
type OptTuple = [string, number, number?]
const optTuple: OptTuple = ['Jack', 150]
console.log(optTuple) // ['Jack', 150]

// rest elements
type RestElTuple = [string, ...number[]]
const restElTuple: RestElTuple = ['Jack', 1, 2, 3] // ['Jack', 1, 2, 3]

function restElTupleInFunc (...args: [string, ...number[]]): void {
  console.log(args)
}
restElTupleInFunc('a string', 1, 2, 3) // ['a string', 1, 2, 3]

// readonly
function roTuples (args: readonly [string, number]) {
  args[0] = 'Jack' // Cannot assign to '0' because it is a read-only property.
}
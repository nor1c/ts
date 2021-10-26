/**
 * Declaration
 * Use declare namespace to describe types or values accessed by dotted notation.
 */
declare namespace myLib {
  function makeGreeting(s: string): string
  let numberOfGreetings: number
}

// code
let result = myLib.makeGreeting('hello, world')
console.log('The computed greeting is:', result)

let count = myLib.numberOfGreetings
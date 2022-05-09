/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 * 
 * The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
 */

// example 1
function* generatorFn () {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFn()

console.log(generator.next().value) // 1
console.log(generator.next().value) // 2
console.log(generator.next().value) // 3

// example 2: Fibonacci
function* fibonacci () {
  let [prev, curr] = [0, 1] // initial values

  while (true) { // infinite loop
    [prev, curr] = [curr, prev + curr] // update prev and curr
    yield curr // yield the current value
  }
}

function print (n: number) {
  let i = 0

  for (const fib of fibonacci()) { // fib is a Generator object
    if (i++ >= n) break // stop after n

    console.log(fib)
  }
} // 1 1 2 3 5 8 13 21 34 55
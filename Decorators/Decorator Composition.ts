/**
 * When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. 
 * In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).
 * 
 * As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:
 * - The expressions for each decorator are evaluated top-to-bottom.
 * - The results are then called as functions from bottom-to-top.
 */

// example
function first () {
  console.log('first() factory evaluated')

  return function () {
    console.log('first() called');
  }
}

function second () {
  console.log('second() factory evaluated')

  return function () {
    console.log('second() called');
  }
}

class ExampleClass {
  @first()
  @second()
  method () {}
}

const eC = new ExampleClass()
eC.method()

// result:
/** 
  first() factory evaluated
  second() factory evaluated
  second() called
  first() called
*/

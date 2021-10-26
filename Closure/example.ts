function outerFunction(arg: string) {
  let variableInOuterFunction = arg

  function bar() {
    console.log(variableInOuterFunction)
  }

  bar()
}

outerFunction('hello closure')

// It allows you to compose objects easily e.g. the revealing module pattern:
function createCounter() {
  let val = 0

  return {
    increment() { val++ },
    getVal() { return val }
  }
}

let counter = createCounter()
counter.increment()
console.log(counter.getVal()) // output: 1
counter.increment()
console.log(counter.getVal()) // output: 2
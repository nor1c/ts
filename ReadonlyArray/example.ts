// forming a readonly array type
const readOnlyArray: ReadonlyArray<string> = ['a', 'b', 'c']
readOnlyArray[0] = 'test' // Index signature in type 'readonly string[]' only permits reading.

// as parameters
function pushSomething (arr: ReadonlyArray<string>) {
  const copy = arr.slice()
  console.log(copy);

  arr.push('something') // Property 'push' does not exist on type 'readonly string[]'.
}

pushSomething(['a', 'b', 'c'])

// shorthand syntax
function pushSomething2 (arr: readonly string[]) {
  arr.push('something') // Property 'push' does not exist on type 'readonly string[]'. 
}
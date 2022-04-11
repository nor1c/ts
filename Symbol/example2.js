const sym = Symbol('my test')
const sym2 = Symbol('another test')

let obj = {
  [sym]: 'just a test',
  [sym2]: 'just another test'
}

console.log(obj)

const sym3 = Symbol('my test')
obj[sym3] = 'another my test?'

console.log(obj) // now there are 2 key with the same name as "my test"
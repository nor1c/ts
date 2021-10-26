let foo: Record<string, any> = {}
let bar = foo

foo.baz = 'foo baz'
console.log(bar) // output: { baz: 'foo baz' }
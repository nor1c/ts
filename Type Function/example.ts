function doSomething (f: Function) {
  return f(1, 2, 3, 'something else')
}

doSomething(function (...args: any) {
  console.log(args)
}) // [1, 2, 3, 'something else']
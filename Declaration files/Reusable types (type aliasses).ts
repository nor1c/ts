// Anywhere a greeting is expected, you can provide a string, a function returning a string, or a Greeter instance.

// declaration
// You can use a type alias to make a shorthand for a type:
type GreetingLike = string | (() => string) | MyGreeter
declare function greet(g: GreetingLike): void

// code
function getGreeting() {
  return 'howdy'
}
class MyGreeter extends Greeter {}

greet('hello') // accept string
greet(getGreeting) // accept function '(() => string)'
greet(new MyGreeter()) // accept MyGreeter
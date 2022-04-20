abstract class Base {
  abstract getName(): string

  printName () {
    console.log('Hello, ' + this.getName())
  }
}
const b = new Base() // error: Cannot create an instance of an abstract class.ts(2511)

class Derived extends Base {
  getName(): string {
    return 'world'
  }
}
const d = new Derived()
d.printName() // output: Hello, world

// abstract construct signature
// wrong
function greet (ctor: typeof Base) {
  const instance = new ctor() // error: Cannot create an instance of an abstract class.ts(2511)
}

// solution
function greetS (ctor: new () => Base) {
  const instance = new ctor() // OK!
  instance.printName()
}
greetS(Derived) // output: Hello, world
greetS(Base) // error: Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
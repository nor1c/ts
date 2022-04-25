function classDec (target: Function) {
  console.log(typeof target) // function

  console.log(target) // class Person { constructor(name) {... }
  console.log(target.prototype) // Person: {}
}

function methodDec (target: any, memberName: string, descriptor: PropertyDescriptor) {
  console.log(typeof target) // object
  
  console.log(target) // Person: {}
  console.log(memberName) // printName

  console.log(target[memberName]) // function printName() {...}

  console.log(descriptor) // { value: function printName() {...}, writable: true, enumerable: true, configurable: true }
  console.log(descriptor.value) // function printName() {...}

  descriptor.value = (...args: any[]) => { // args takes parameters from method that uses this decorator
    console.log(args)
  }
}

function paramDec (target: any, memberName: string, propIndex: number) {
  console.log(typeof target) // function

  console.log(target) // class Person { constructor(name) {... }
  console.log(memberName) // undefined
  
  console.log(target[memberName]) // undefined

  console.log(propIndex) // 0
}

function propDec (target: any, memberName: string) {
  console.log(target) // object
  console.log(target.prototype) // undefined
  console.log(memberName) // id
  console.log(target[memberName]) // []

  let value: number
  const setter = (newValue: number) => {
    value = newValue
  }

  const getter = () => value

  Object.defineProperty(target, memberName, {
    set: setter,
    get: getter
  })
}

@classDec
class Person {
  @propDec
  id: number

  name: string

  constructor (@paramDec name: string) {
    this.name = name
  }

  @methodDec
  printName () {
    console.log(this.name)
  }

  @methodDec
  test (param0: any, param1: number) {}
}

const person = new Person('Fauzi')

person.printName()
person.test('just a test', 1) // [just a test, 1]

person.id = 100
console.log(person.id) // 100
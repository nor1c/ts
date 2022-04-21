/**
 * Decorators used in an method receives the following parameters: 
   - For static properties, the constructor function of the class, for all other properties, the prototype of the class.
   - The name of the member.

 * @params target: Function | Object, memberName: string
 */

const deprecated = (deprecatedReason: string) => {
  return (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    return {
      get () {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${memberName} is deprecated. ${deprecatedReason}`);
        }

        Object.defineProperty(this, memberName, {
          value: wrapperFn,
          writable: true,
          configurable: true
        })

        return wrapperFn
      }
    }
  }
}

class Person {
  static staticMember = true

  instanceMember: string = 'hello'

  @deprecated('Use another static method')
  static deprecatedStaticMethod () {
    console.log('inside deprecated static method, statisMember =', this.staticMember)
  }

  @deprecated('Use another instance method')
  deprecatedMethod () {
    console.log('inside deprecated method, instanceMember =', this.instanceMember)
  }
}

const person = new Person()
person.deprecatedMethod()

Person.deprecatedStaticMethod()

/**
 * Output
    (warning) Method deprecatedMethodStatic is deprecated with reason: Use another static method
    inside deprecated static method, staticMember = true
    
    (warning) Method deprecatedMethod is deprecated with reason: Use another instance method
    inside deprecated instance method, instanceMember = hello
 */


// example 2
function log (logIt: boolean = true) {
  return (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = (...args: any[]) => { // scope here is basically change the code inside original method in class Printer
      console.log(...args) // 'Ahmad', 'Fauzi'
      console.log(args) // ['John', 'Doe']

      logIt && console.log('log: start') // will print if logIt is true
      originalMethod(...args) // calling code inside the original method which is: console.log(`${firstName} ${lastName}`)
      logIt && console.log('log: end') // will print if logIt is true
    }
  }
}

class Printer {
  @log()
  printName (firstName: string, lastName: string) {
    console.log(`${firstName} ${lastName}`)
  }
}

const printer = new Printer()
printer.printName('John', 'Doe')
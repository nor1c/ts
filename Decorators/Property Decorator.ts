// decorator in class property
function memberName (target: Function, memberName: string) {
  console.log(memberName) // output: "name"
  console.log(target[memberName]) // output: undefined (this will always be undefined because at runtime, in the compiled JavaScript code, the decorator runs before the instance property is set to its default value.)
}

class Seal {
  @memberName
  name: string = 'Seal'
}
const seal = new Seal()

// example use case
function allowList (allowList: string[]) {
  return (target: any, memberName: string) => {
    let currentValue: any = target[memberName]

    Object.defineProperty(target, memberName, {
      set: (newValue: any) => {
        if (!allowList.includes(newValue)) {
          return
        }
        currentValue = newValue
      },
      get: () => currentValue
    })
  }
}

class Person {
  @allowList(['John', 'Mark'])
  name: string = 'John'
}

const person = new Person()
console.log(person.name) // output: John

person.name = 'Dex'
console.log(person.name) // output: John (never set to Dex because it is not in the allow list)

person.name = 'Mark'
console.log(person.name) // output: Mark
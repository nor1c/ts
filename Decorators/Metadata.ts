import "reflect-metadata"

function propType (target: any, propKey: string) {
  const t = Reflect.getMetadata('design:type', target, propKey)
  console.log('Type of this property is ' + t.name) // output: Type of this property is String
}

function methodParamType (target: any, methodName: string) {
  const tys = Reflect.getMetadata('design:paramtypes', target, methodName)

  const types = tys.map(tp => tp.name).join(', ')

  console.log('Type of parameters in this method is: ' + types) // output: Type of parameters in this method is: String, Number, Object, Boolean
}

function methodReturnType (target: any, methodName: string) {
  const t = Reflect.getMetadata('design:returntype', target, methodName)

  console.log('Return type of this method is ' + t.name) // output: Return type of this method is Number
}

class Person {
  notDefined: string

  @propType
  name: string

  age: number
  address: string

  #privateYear: number

  setName (name: string) {
    this.name = name
  }

  @methodReturnType
  @methodParamType
  printSomething (
    param0: string,
    param1: number,
    param2: any,
    param3: boolean
  ): number {
    // ...
  }
}

// Reflect.has
const person = new Person()
console.log(Reflect.has(person, 'name')) // output: false

person.setName('fauzi')
console.log(Reflect.has(person, 'name')) // output: true

console.log(Reflect.has(person, 'notDefined')) // output: false
console.log(Reflect.has(person, 'privateYear')) // output: false
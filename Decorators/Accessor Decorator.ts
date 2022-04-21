/**
 * Decorators used in an accessor receives the following parameters: 
   - For static properties, the constructor function of the class, for all other properties, the prototype of the class.
   - The name of the member.

 * @params target: Function | Object, memberName: string
 */

/**
 * This allows you to specify the enumerable flag when calling your decorator.
 */
const enumerable = (value: boolean) => {
  return (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = value
  }
}

class Person {
  firstName: string = 'John'
  lastName: string = 'Doe'

  @enumerable(true)
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person()

person.fullName
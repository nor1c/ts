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
// 
interface SomeType {
  readonly name: string
  age: number
  readonly increaseable: {
    increment: number
  }
}

// 
const sT: SomeType = {
  name: 'John',
  age: 30,
  increaseable: {
    increment: 1
  }
}

sT.name = 'Rick' // Error: Cannot assign to 'name' because it is a read-only property.
sT.age = 35
sT.increaseable.increment++ // works

console.log(sT)

// change via aliasing
interface Person {
  name: string
  age: number
}

interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}

const writablePerson: Person = {
  name: 'Jack',
  age: 35
}

let readonlyPerson: ReadonlyPerson = writablePerson
console.log(readonlyPerson.age) // 35
writablePerson.age++
console.log(readonlyPerson.age) // 36
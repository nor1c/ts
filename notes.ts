// .isArray
const isArrayArr = [1, 2, 3]
console.log(Array.isArray(isArrayArr)) // true
console.log(Array.isArray(isArrayArr[0])) // false, because it's a number



/**
 * Interface vs Type
 * 
 * Interface is extendable, type not
 * Type cannot be re-opened or add new properties
 */
// Extending an interface
interface IAnimal {
  name: string
}
interface IBear extends IAnimal {
  honey: boolean
}
const iExBear: IBear = {
  name: 'Bear',
  honey: true
}

// Extending type via intersections
type TAnimal = {
  name: string
}
type TBear = TAnimal & {
  honey: boolean
}
const tExBear: TBear = {
  name: 'Bear',
  honey: true
}

// Adding new fields to an existing interface (in type you will get a `Duplicate identifier 'Window'` error)
interface IWindow {
  title: string
}
interface IWindow {
  ts: boolean
}
const iExWindow: IWindow = {
  title: 'Hello world',
  ts: true
}




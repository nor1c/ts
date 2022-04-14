type IPerson = {
  name: string
  age: number
  alive: boolean
}

type Age = IPerson['age'] // type: number

type NameAge = IPerson['name' | 'age'] // type: string | number

type IKeyOfNameAge = IPerson[keyof IPerson] // type: string | number | boolean

type IAliveName = 'alive' | 'name'
type IPersonAliveName = IPerson[IAliveName] // type: boolean | string

// 
const myArray = [
  { name: 'John', age: 30 },
  { name: 'Alex', age: 26 }
]

type IMyArray = typeof myArray[number] // type: { name: string, age: number }
type IMyArrayAge = IMyArray['age'] // type: number
type IMyArrayAge2 = typeof myArray[number]['age'] // type: number

// using type alias
type key = 'age'
type IPersonAge = IPerson[key] // type: number
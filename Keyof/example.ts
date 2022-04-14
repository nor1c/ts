type Point = { x: number, y: number }
type P = keyof Point
const p: P = 'x' // 'x' | 'y'

//
type Arrayish = { [n: number]: unknown }
type aIsh = keyof Arrayish // type aIsh = number

type Mapish = { [k: string]: boolean }
type mIsh = keyof Mapish // type mIsh = string | number

// 
interface User {
  name: string
  age: number
}

function getData<T, K extends keyof T>(data: T[], key: K): T[K][] {
  return data.map(item => item[key])
}

const users: User[] = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Jane',
    age: 20
  },
  {
    name: 'Joe',
    age: 10
  }
]

const allUserAges = getData(users, "age") // (data, "age" | "name")
console.log(allUserAges)
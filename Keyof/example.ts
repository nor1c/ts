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
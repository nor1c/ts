// remove readonly
type CreateMutable<T> = {
  -readonly [Property in keyof T]: T[Property]
}

type LockedAccount = {
  readonly name: string
  readonly age: number
}

type UnlockedAccount = CreateMutable<LockedAccount> // { name: string, age: number }

// remove optional parameter
type Concrete<T> = {
  [P in keyof T]-?: T[P]
}

type MaybeUser = {
  id: string
  name?: string
  age?: number
}

type User = Concrete<MaybeUser> // { id: string, name: string, age: number }
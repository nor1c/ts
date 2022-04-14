type FeatureMapper<T> = {
  [P in keyof T]: boolean
}
type FeatureFlag = {
  darkMode(): void
  newUserProfile(): void
}
type FeatureOptions = FeatureMapper<FeatureFlag> // { darkMode: boolean, newUserProfile: boolean }

// mapping modifiers
type MutateFeatureMapper<T> = {
  +readonly [P in keyof T]: boolean
}
type FeatureOptionsModified = MutateFeatureMapper<FeatureFlag> // { readonly darkMode: boolean, readonly newUserProfile: boolean }

// Key remapping via as
type MappedTypeWithNewKey<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
}
interface Person {
  name: string
  age: number
}
type LazyPerson = MappedTypeWithNewKey<Person> // { getName: () => string, getAge: () => number }

// filter out keys in key remapping
type Animal = {
  kind: 'mammal' | 'bird',
  name: string
}
type RemoveKindType<T> = {
  [P in keyof T as Exclude<P, 'kind'>]: T[P]
}
type PersonWithoutKind = RemoveKindType<Animal> // { name: string }

// 
type EventConfig<T extends { kind: string }> = {
  [E in T['kind']]: (event: T) => void
}
type SquareEvent = { kind: 'square', x: number, y: number }
type Config = EventConfig<SquareEvent>
const c1: Config = {
  square({ kind, x, y }) {
    return x*y
  }
}
const square1 = c1.square({ kind: 'square', x: 10, y: 10 }) // 100

// 
type ExtractPII<T> = {
  [P in keyof T]: T[P] extends { pii: true } ? true : false
}
type DBFields = {
  id: { format: 'incrementing' }
  name: { type: string, pii: true }
}
type ExtractedPiiType = ExtractPII<DBFields> // { id: false, name: true }
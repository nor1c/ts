interface Animal {
  live(): void
}

interface Dog extends Animal {
  bark(): void
}

type IAnimalDog = Dog extends Animal ? number : string // type: number

type IAnimalRegExp = RegExp extends Animal ? number : string // type: string

// 
// problem:
interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}

function createLabel (id: number): IdLabel
function createLabel (name: string): NameLabel
function createLabel (nameOrId: number | string): IdLabel | NameLabel
function createLabel (nameOrId: number | string): IdLabel | NameLabel {
  throw 'unimplemented'
}
const ll1 = createLabel(1) // type: IdLabel
const ll2 = createLabel('name') // type: NameLabel

// solution:
type IdOrName<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabel2<T extends number | string>(nameOrId: T): IdOrName<T> {
  throw 'unimplemented'
}
const l1 = createLabel2(2) // type: IdLabel
const l2 = createLabel2('a string') // type: NameLabel
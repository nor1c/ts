// extending interface
interface A {
  a: string
}
interface B extends A {
  b: string
}

let bData: B = {
  a: 'a',
  b: 'b'
}

// 
interface Animal {
  swim: boolean
}
interface Bird {
  fly: boolean
}
interface Duck extends Animal, Bird {
  quack: boolean
}

const newDuck: Duck = {
  swim: true
  fly: true,
  quack: true
}
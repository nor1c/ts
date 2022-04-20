// return this
class Box {
  contents: string = ''

  set (value: string) {
    this.contents = value
    return this
  }
}
const b = new Box()
const bs = b.set('hello') // type of bs: Box

class ClearableBox extends Box {
  clear () {
    this.contents = ''
  }
}
const c = new ClearableBox()
const cs = c.set('hello') // type of cs: ClearableBox

// return nothing (void)
class Box1 {
  contents: string = ''

  set (value: string) {
    this.contents = value
  }
}
const b1 = new Box1()
const b1s = b1.set('hello') // type of b1s: void

// use case type annotations
class Box2 {
  content: string = ''

  sameAs (context: this) {
      return context.content === this.content   
  }
}

class DerivedBox extends Box {

}

class NonDerivedBox {
  content: string = 'something'

  sameAs () {
      return false
  }
}

const box = new Box2()
const dBox = new DerivedBox()
const ndBox = new NonDerivedBox()

console.log(box.sameAs(dBox)) // true
console.log(box.sameAs(ndBox)) // false
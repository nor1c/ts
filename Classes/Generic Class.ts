class Box<T> {
  contents: T
  constructor (value: T) {
    this.contents = value
  }
}

const b = new Box('hello!') // b is a Box<string>
const someClass = class<T> {
  content: T
  constructor (value: T) {
    this.content = value
  }
}

const sC = new someClass('hello!')
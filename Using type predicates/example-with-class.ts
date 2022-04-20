class Box<T> {
  value?: T

  hasValue(): this is { value: T } {
    return this.value !== undefined
  }
}

const box1 = new Box()

console.log(box1.hasValue()) // false

box1.value = 'something'
console.log(box1.hasValue()) // true

if (box1.hasValue()) {
  console.log(box1.value) // something
}
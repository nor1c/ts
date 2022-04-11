class Box<T> {
  value?: T

  hasValue(): this is { value: T } {
    return this.value !== undefined
  }
}

const box1 = new Box()
box1.value = 'something'

if (box1.hasValue()) {
  console.log(box1.value)
}
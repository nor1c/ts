// basic example
type Constructor = new (...args: any[]) => {}

function Scale<T extends Constructor>(baseClass: T) {
  return class extends baseClass {
    _scale!: number

    set scale (newScale: number) {
      this._scale = newScale
    }
    get scale () {
      return this._scale
    }
  }
}

class ScallC {}
const Scaler = Scale(ScallC)

const scaler = new Scaler()

console.log(scaler.scale) // output: undefined

scaler.scale = 2
console.log(scaler.scale) // output: 2
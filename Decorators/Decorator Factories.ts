// passing parameter(s) to the decorator
function sealed (isSealed: boolean) {
  console.log(isSealed) // output: true

  return (target: Function) => {
    console.log(target) // output: class Seal {}
    console.log(target.prototype) // output: Seal {}
  }
}

@sealed(true)
class Seal {}
const seal = new Seal()
function sealed () {
  console.log('sealed() factory evaluated')
}

@sealed
class Seal {}
const seal = new Seal() // output: sealed() factory evaluated

// 
function sealed (target: Function) {
  console.log(target) // output: class Seal {}
  console.log(target.prototype) // output: Seal {}
}

@sealed
class Seal2 {}
const seal2 = new Seal2()
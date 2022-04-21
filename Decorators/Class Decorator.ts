/**
 * Your decorator function will receive a single parameter, the 'target', which will be of type 'Function'. 
 * This will be the constructor of the class that the decorator was applied to.
 * 
 * @param target: Function
 */

// example 1
function sealed () {
  console.log('sealed() factory evaluated')
}

@sealed
class Seal {}
const seal = new Seal() // output: sealed() factory evaluated

// example 2
function sealed2 (target: Function) {
  console.log(target) // output: class Seal {}
  console.log(target.prototype) // output: Seal {}
}

@sealed2
class Seal2 {}
const seal2 = new Seal2()

// example 3
function classDec<T extends { new (...args: any[]): {} }> (target: T) {
  return class extends target {
    print () {
      console.log('printed')
    }
  }
}

@classDec
class Test {}

(new Test()).print() // output: printed
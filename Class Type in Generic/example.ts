function classGeneric<T>(c: { new (): T }): T {
  return new c()
}

class gClassSample {
  constructor () {
    console.log('Class C called.');
  }
}

classGeneric(gClassSample)

//
class ZooKeper {
  nametag: string = 'Mikle'
}

class Animal {
  numLegs: number = 4
}

class Lion extends Animal {
  keeper: ZooKeper = new ZooKeper()
}

function cGCreateInstance<T>(c: { new (): T }): T {
  return new c()
}

cGCreateInstance(Lion).keeper.nametag
cGCreateInstance(Lion).numLegs
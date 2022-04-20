class MyClass {
  static x: number = 1
  private static y: number = 2

  static getX () {
    return this.x
  }
}

console.log(MyClass.x) // 1
console.log(MyClass.getX()) // 1

console.log(MyClass.y) // error: Property 'y' is private and only accessible within class 'MyClass'.ts(2341)

// static members are inherited
class Derived extends MyClass {
  static myX = MyClass.x
}
console.log(Derived.myX) // 1
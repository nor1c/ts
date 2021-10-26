/**
  abstract can be thought of as an access modifier. 
  We present it separately because opposed to the previously mentioned modifiers it can be on a class as well as any member of the class. 
  Having an abstract modifier primarily means that such functionality cannot be directly invoked and a child class must 
  provide the functionality.
*/

// Abstract classes cannot be directly instantiated. 
// Instead the user must create some class that inherits from the abstract class.
abstract class FooCommand {}
class BarCommand extends FooCommand {}

const fooCommand: FooCommand = new FooCommand() // Cannot create an instance of an abstract class.ts(2511)
const barCommand = new BarCommand() // You can create an instance of a class that inherits from an abstract class.

// Abstract members cannot be directly accessed and a child class must provide the functionality.
abstract class FooCommands {
  abstract execute(): string
}
class BarErrorCommand extends FooCommands {} 
// Non-abstract class 'BarErrorCommand' does not implement inherited abstract member 'execute' from class 'FooCommands'.ts(2515)
// 'BarErrorCommand' needs implement abstract member 'execute'.

class BarACommand extends FooCommands {
  execute() {
    return 'BarACommand executed!'
  }
}
const barACommand = new BarACommand()
barACommand.execute() // output: BarACommand executed!
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction) // output: {Up: 0, Down: 1, Left: 2, Right: 3}

enum DirectionWithCustomIndex {
  Up = 5,
  Down,
  Left = 10,
  Right
}
console.log(DirectionWithCustomIndex) // output: {Up: 5, Down: 6, Left: 10, Right: 11} (auto-incrementing)

// example usage in function
enum UserResponse {
  Yes,
  No
}

function respond (recipient: string, message: UserResponse): any {
  console.log(`${recipient} responded with "${message}"`)
}
respond('John', UserResponse.Yes) // output: 'John responded with "0"' (which is: Yes)

// string enum
enum StrDirections { // every enum member must have initializer
  Up = 'UP',
  Down = 'DOWN',
}

// mixed enum
enum MixedDirections {
  Up = 'UP',
  Down = 1
} // OK!

// constant enum members
enum ConstantEnum {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write
}

// computed enum members
enum ComputedEnum {
  G = '123'.length
}

// enums at runtime
enum E {
  X,
  Y,
  Z
}

function f (obj: { Y: number }) {
  return obj.Y
}
console.log(f(E)) // output: 1

// enums at compile time
enum LogLevel {
  ERROR = 'error',
  LOG = 'logging',
  WARN = 'warning',
  DEBUG = 'debugging'
}
type LogLevelStrings = keyof typeof LogLevel

const tl: LogLevelStrings = "ERROR" // auto suggestions: ERROR, LOG, WARN, DEBUG
console.log(LogLevel[tl]) // output: 'error'

// reverse mapping
enum Enum {
  A
}

let a = Enum.A
let nameOfA = Enum[a] // output: 'A'
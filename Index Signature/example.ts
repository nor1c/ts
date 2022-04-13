// error
interface IWithSignaturedIndexString {
  [index: string]: string

  name: string
  age: number // Property 'age' of type 'number' is not assignable to 'string' index type 'string'.
}

// OK
interface INumberString {
  [index: string]: string | number
  
  name: string
  age: number
}

// OK
interface INumberStringBooleanFunction {
  [index: string]: string | number | boolean | Function

  name: string
  age: number
  isAdmin: boolean
  sayHello: Function
}

// with readonly
interface INumberStringReadonly {
  readonly [index: string]: string | number

  name: string
  age: number
}
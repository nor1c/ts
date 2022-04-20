class MyClass {
  [s: string]: boolean

  numVal = 0 // error: Property 'numVal' of type 'number' is not assignable to string index type 'boolean'.ts(2411)
  strVal = 'a string' // error: Property 'strVal' of type 'string' is not assignable to string index type 'boolean'.ts(2411)
  boolVal = true // OK
  
  check (s: string) { // error: Property 'check' of type '(s: string) => boolean' is not assignable to 'string' index type 'boolean'.ts(2411)
    return true
  }
}

class MyClass2 {
  [s: string]: boolean | ((s: string) => boolean)

  numVal = 0 // error: Property 'numVal' of type 'number' is not assignable to string index type 'boolean | ((s: string) => boolean)'.ts(2411)
  boolVal = true // OK

  check (s: string) {
    return true
  } // OK
}
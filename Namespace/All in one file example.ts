namespace Validation {
  interface StringValidator {
    isAcceptable (s: string): boolean
  }
  
  const lettersRegexp = /^[A-Za-z]+$/
  export class LetterOnlyValidator implements StringValidator {
    isAcceptable (s: string) {
      return lettersRegexp.test(s)
    }
  }

  const numberRegexp = /^[0-9]+$/
  export class ZipCodeValidator implements StringValidator {
    isAcceptable (s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}

let strings = ['Hello', '98052', '101']

let validators: { [s: string]: Validation.StringValidator } = {}

validators['ZIP code'] = new Validation.ZipCodeValidator()
validators['Letters only'] = new Validation.LetterOnlyValidator()

for (let s of strings) {
  for (let name in validators) {
    console.log(
      `'${s}' - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}

// result:
/**
  [LOG]: "'Hello' - does not match ZIP code" 
  [LOG]: "'Hello' - matches Letters only" 
  [LOG]: "'98052' - matches ZIP code" 
  [LOG]: "'98052' - does not match Letters only" 
  [LOG]: "'101' - does not match ZIP code" 
  [LOG]: "'101' - does not match Letters only" 
 */
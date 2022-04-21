/**
 * The decorator function used with parameters receives the following parameters:
   - For static properties, the constructor function of the class. For all other properties, the prototype of the class.
   - The name of the member.
   - The index of the parameter in the method’s parameter list.

 * @params target: Function | Object, memberName: string, parameterIndex: number
 */

function print (target: Object, propertyKey: string, parameterIndex: number) {
  console.log(`Decorating param ${parameterIndex} in ${propertyKey}`)
}

class Printer {
  printNow (param0: any, @print param1: any) {
    console.log(`Now printing ${param0} ${param1}`)
  }
}

const printer = new Printer()

printer.printNow('page', 2) // Now printing page 2
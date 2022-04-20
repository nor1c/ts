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
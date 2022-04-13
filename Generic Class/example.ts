class GenClass<T> {
  data: T
  printData: (d: T) => T
}

const gC = new GenClass<number>()
gC.data = 1
gC.printData = (d: number) => d
gC.printData(2)
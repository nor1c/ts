const func = () => 123

type returnTypeOfFunc = ReturnType<typeof func> // number

// self-made ReturnType
type selfMadeReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const test1 = () => 'a string'
type typeOfTest1 = selfMadeReturnType<typeof test1> // string

const test2 = () => 123
type typeOfTest2 = selfMadeReturnType<typeof test2> // number

// only accept a string and return never if it's other than a string like a number, boolean, Object, etc.
type inferAsString<T> = T extends ((...args: any) => infer R extends string) ? R : never

const testAsString1 = () => 'awdawd' // string
type typeOfTAS1 = inferAsString<typeof testAsString1> // string

const testAsString2 = () => 123 // number
type typeOfTAS2 = inferAsString<typeof testAsString2> // never

const testAsString3 = 'a string' // a string
type typeOfTAS3 = inferAsString<typeof testAsString3> // never
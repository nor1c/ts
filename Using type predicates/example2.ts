function isSameType<T>(param1: unknown, param2: T): param1 is T {
  return typeof param1 === typeof param2
}

declare const something: unknown
if (isSameType(something, 'this is a string')) {
  typeof something // string, because the given param2 is a string
}

if (isSameType(something, 10)) {
  typeof something // number, because the given param2 is a number
}
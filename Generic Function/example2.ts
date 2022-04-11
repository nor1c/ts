function generic<T extends [...string[]]>(value: [...T]): T {
  return value
}

console.log(generic(['a', 'b', 'c'])) // function generic<[string, string, string]>(value: [string, string, string]): [string, string, string]
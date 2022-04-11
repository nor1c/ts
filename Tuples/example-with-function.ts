function printEmployee (...args: [string, number, Date]) {
  return args
}

const jack = printEmployee('Jack', 35, new Date())
console.log(jack) // ['Jack', 150, Thu Jan 01 1970 00:00:00 GMT+0100 (CET)]


// with parameter destructing
function printEmployeeDes ([name, age, joinDate]: [string, number, Date]) {
  return [name, age, joinDate]
}

const andy = printEmployeeDes(['Andy', 35, new Date()])
console.log(andy) // ['Andy', 35, Thu Jan 01 1970 00:00:00 GMT+0100 (CET)]
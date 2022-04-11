/** symbols are unique */
const sym1 = Symbol('key')
const sym2 = Symbol('key')

// console.log(sym1 === sym2) // always return 'false' since the types 'typeof sym1' and 'typeof sym2' have no overlap


/** as object properties */
const oKey = Symbol()

const objSym = {
  [oKey]: 'value'
}
console.log(objSym) // {[Symbol()]: 'value'}
console.log(objSym[oKey]) // value


/** combined with computed property declaration */
const getClassNameSymbol = Symbol()

class C {
  [getClassNameSymbol]() {
    return "C"
  }
}
const c = new C()
console.log(c[getClassNameSymbol]()) // C
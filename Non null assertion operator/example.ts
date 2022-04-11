function nonNullAssertionOperator(x?: number | null) {
  console.log(x.toFixed()) // object is possibly 'null' or 'undefined'

  if (typeof x !== 'undefined' && x !== null) {
    console.log(x.toFixed()) // 500
  }

  console.log(x!.toFixed()) // 500
}

nonNullAssertionOperator(500)
console.log('undefined:', nonNullAssertionOperator()) // cannot read property toFixed of undefined
console.log('null:', nonNullAssertionOperator(null)) // cannot read property toFixed of null
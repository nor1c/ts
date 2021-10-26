// Fact is you will need to deal with both. Interestingly in JavaScript with ==, null and undefined are only equal to each other:

// Both null and undefined are only `==` to themselves and each other:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true


// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

// Recommend `== null` to check for both undefined or null. You generally don't want to make a distinction between the two.
function foo(arg: string | null | undefined) {
  if (arg != null) {
    // arg must be a string as `!=` rules out both null and undefined. 
  }
}
// You could also do == undefined, but == null is more conventional/shorter.

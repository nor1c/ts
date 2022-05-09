/**
 * Summary: for...of is a loop that iterates over the values of an array (it's only work for array only, Object is not supported).
 */

const arr1 = [1, 2, 3]
for (const val of arr1) {
  console.log(val)
} // 1 2 3

const arr2 = [1, 'a string', true, () => {}]
for (const val of arr2) {
  console.log(val)
} // 1 'a string' true [Function]
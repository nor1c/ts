/**
 * Summary: for...in is a loop that iterates over the properties of an object.
 * If it's array, it will iterate over the index.
 * If it's object, it will iterate over the properties.
 */

const arr1 = [1, 2, 3]
for (const val in arr1) {
  console.log(val)
} // 0 1 2 (return index)

const arr2 = [2, 'a string', true, () => {}]
for (const val in arr2) {
  console.log(val)
} // 0 1 2 3 (return index)

const obj1 = {
  'key1': 'val1',
  'key2': 'val2'
}
for (const val in obj1) {
  console.log(val)
} // key1 key2 (return key)

for (const prop in obj1) {
  console.log([prop, obj1[prop]])
} // [ 'key1', 'val1' ] [ 'key2', 'val2' ]
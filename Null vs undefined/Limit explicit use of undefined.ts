// Because TypeScript gives you the opportunity to document your structures separately from values instead of stuff like:
function foo(){
  // if Something
  return { a: 1, b: 2 }
  // else
  return { a: 1, b: undefined };
}

// you should use a `type annotation`:
function boo(): { a: number, b?: number }{
  // if Something
  return { a: 1, b: 2 };
  // else
  return { a: 1 };
}
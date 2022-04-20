// opposite of Partial
interface Props {
  a?: number
  b?: string
}

const obj: Props = {
  a: 5
} // OK!

const obj2: Required<Props> = { // error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.ts(2741)
  a: 5
}

const obj3: Required<Props> = {
  a: 5,
  b: 'five'
} // OK!
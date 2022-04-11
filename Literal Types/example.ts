/** with var or let */
let changingString = 'Hello World'
changingString = 'Halo Dunia'

changingString // let changingString: string


/** with const */
const constantString = 'Hello World'

constantString // const constantString: 'Hello World'


/** combine with non-literal type */
type Options = {
  width: number
}
function configure(x: Options | 'auto') {}

configure({ width: 500 })
configure("auto")
configure('unallowed type') // error is not assignable


/** literal interface */
function handleRequest(url: string, method: 'GET' | 'POST') {}

const req = { url: 'https://example.com', method: 'GET' } // the type of prop method here inferred to be string
handleRequest(req.url, req.method) // type string isn't assignable to type "'GET' | 'POST'"

// the fix
handleRequest(req.url, req.method as 'GET') // fix 1, using as 'GET' in function call

const req2 = { url: 'https://example.com', method: 'POST' as 'POST' } // fix 2, using as 'POST' in data definition
handleRequest(req2.url, req2.method)

const req3 = { url: 'https://example.com', method: 'GET' } as const // fix 3, using 'as count'
handleRequest(req3.url, req3.method)
class Params {
  constructor (
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // ...
  }
}

const a = new Params(1, 2, 3)
a.x
a.y // error: Property 'y' is protected and only accessible within class 'Params' and its subclasses.ts(2445)
a.z // error: Property 'z' is private and only accessible within class 'Params'.ts(2341)
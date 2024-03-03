### Important and Useful

#### > `typeof`

Untuk mendapatkan tipe dari sebuah nilai atau ekspresi

Contoh 1:
```ts
const x = 10
type XType = typeof x // number
```

Contoh 2:
```ts
type Person = {
  name: string
  age: number
}

// tidak dapat langsung `typeof Person['age']` akan menyebabkan error 'Person' only refers to a type, but is being used as a value here.

// harus diassign ke variable terlebih dahulu
const person: Person = {
  name: 'A. Fauzi',
  age: 26
}

const TypeOFPersonAge = typeof person['age'] // number
```

#### > `instanceof`

Untuk memeriksa apakah sebuah objek adalah instance dari suatu tipe tertentu


Contoh:
```ts
const person = {
  name: 'John'
}

person instanceof Object // true
person instanceof Array // false
person instanceof Date // false
```

#### > `keyof`

Untuk mendapatkan key dari suatu objek

Contoh:
```ts
type Person = {
  name: string,
  age: number
}

type PersonKey = keyof Person // "name", "age"
```

#### > `in`

Digunakan konstruksi mapped types untuk menghasilkan type baru berdasarkan semua properti yang ada dalam referensi

Contoh:
```ts
type MappedTypes<T> = {
  [P in keyof T]: T[P] | null
}
```

#### > `extends`

Pembuatan Generic type untuk memberikan constraint pada tipe parameter generic. Memungkinkan kita untuk membatasi tipe yang diterima oleh parameter generik.

Contoh 1:
```ts
type MyType<T extends string> = {
  value: T
}

const contohValid: MyType<"hello"> = { value: "hello" }
const contohInvalid: MyType<123> = { value: 123 }
```

Contoh 2:
```ts
interface Printable {
  print(): void
}

function printObjek<T extends Printable>(obj: T) {
  obj.print() // <- notice kita bisa menggunakan .print() pada obj, karena T extends dari interface Printable
}
```

#### > `keyof typeof`

Mendapatkan tipe union dari keys dari tipe hasil dari ekspresi yang dievaluasi pada saat runtime

Contoh:
```ts
type TUser = {
    name: string
    age: number
}

type User = keyof typeof TUser // string | number | symbol

const user: User = 'true' // ok
const user: User = true // false
const user: User = 123 // ok
```

<hr>

### Learning Resources

- TypeScript Official Documentation: https://www.typescriptlang.org/docs/
- TypeScript Clean Code Principles: https://github.com/labs42io/clean-code-typescript
- TypeScript Deep Dive by Basarat: https://basarat.gitbook.io/typescript/
- TypeScript Challenges: https://tsch.js.org/

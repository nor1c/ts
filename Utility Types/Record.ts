interface CatInfo {
  age: number
  breed: string
}

type CatName = 'niffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  niffy: { age: 3, breed: 'tabby' },
  boris: { age: 4, breed: 'tabby' },
  mordred: { age: 5, breed: 'tabby' }
}

cats.niffy // { age: 3, breed: 'tabby' }
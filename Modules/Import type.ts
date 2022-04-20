// @filename: animal.ts
export type Cat = {
  breed: string
  yearOfBirth: number
}

export type Dog = {
  breeds: string[]
  yearOfBirth: number
}

export const createCatName = () => 'fluffy'

// @filename: valid.ts
import { Cat, Dog } from './animal.ts'
export type Animals = Cat | Dog

// @filename: app.ts
import { createCatName } from './animal.ts'
const name = createCatName()


// inline type imports
// @filename: app.ts
import { createCatName, type Cat, type Dog } from './animal.ts'

export type Animals = Cat | Dog
const name = createCatName()
type OrNull<T> = T | null

type OneOrMany<T> = T | T[]

type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>
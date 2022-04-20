// NonNullable<Type>

type T0 = NonNullable<string | null | undefined> // string
type T1 = NonNullable<string | null | number> // string | number
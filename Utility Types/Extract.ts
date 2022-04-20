// Extract<Type, Union>

type T0 = Extract<'a' | 'b' | 'c', 'a'> // 'a'
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f' | 'unregistered'> // 'a'
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'c'> // 'a' | 'c'

type T3 = Extract<string | boolean | (() => void), Function> // () => void
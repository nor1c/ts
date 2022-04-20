// Exclude<UnionType, ExcludeMembers>

type ABC = 'a' | 'b' | 'c'
type T0 = Exclude<ABC, 'a'> // 'b' | 'c'
type T1 = Exclude<ABC, 'a' | 'c'> // 'b'

type T2 = Exclude<string | number | (() => void), Function> // string | number
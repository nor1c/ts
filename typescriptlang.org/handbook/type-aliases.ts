type Car = {
  manufacture: string
  type: 'sport' | 'suv' | 'sedan' | 'off-road' | 'hatchback'
  model: string
}

// extending types
type Honda = Car & {
  productionYear: number
}

const lancer: Car = {
  manufacture: 'Mitsubishi',
  type: 'sedan',
  model: 'Lancer Evolution X'
}
console.log(lancer);

const civic: Honda = {
  manufacture: 'Honda',
  type: 'hatchback',
  model: 'Civic',
  productionYear: 2012,
}
console.log(civic);


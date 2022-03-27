interface IStore {
  name: string
  profit: number
  getName(): string
  getProfit(): number
}

/**
 * Store Class
 */
class Store implements IStore {
  name: string
  profit: number

  constructor (name: string, profit: number) {
    this.name = name
    this.profit = profit
  }

  getName(): string {
    return this.name
  }

  getProfit(): number {
    return this.profit
  }
}

/**
 * FashionProduct Class
 */
class FashionProduct {
  private store: Store
  private name: string
  private price: number

  constructor (store: Store, name: string, price: number) {
    this.name = name
    this.price = price
    this.store = store
  }

  sell(): void {
    console.log(`${this.name} harganya adalah ${this.store.getProfit() + this.price}`)
  }
}

// create new store
const storeOne = new Store('Example Store', 100000)

// new fashion product
const fashionOne = new FashionProduct(storeOne, 'Shirt', 28000)
fashionOne.sell()
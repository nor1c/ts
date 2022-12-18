interface IPaymentProcessor {
  makePayment(item: string, unitPrice: number, qty: number): void
}

// Stripe Payment Logic
class Stripe {
  private buyerName: string

  constructor(buyerName: string) {
      this.buyerName = buyerName
  }

  pay(item: string, totalPrice: number) {
      console.log(`${this.buyerName} bought a ${item} at price $${totalPrice}`)
  }
}

class StripePaymentProcessor implements IPaymentProcessor {
  private stripe: Stripe

  constructor(buyerName: string) {
      this.stripe = new Stripe(buyerName)
  }

  makePayment(item: string, unitPrice: number, qty: number) {
      this.stripe.pay(item, qty * unitPrice)
  }
}

// Paypal Payment Logic
class Paypal {
  private buyerName: string

  constructor(buyerName: string) {
      this.buyerName = buyerName
  }

  pay(item: string, totalPrice: number) {
      console.log(`${this.buyerName} bought a ${item} at price $${totalPrice}`)
  }
}

class PaypalPaymentProcessor implements IPaymentProcessor {
  private stripe: Stripe

  constructor(buyerName: string) {
      this.stripe = new Stripe(buyerName)
  }

  makePayment(item: string, unitPrice: number, qty: number) {
      this.stripe.pay(item, qty * unitPrice)
  }
}

// Our Store
class Store {
  private paymentProcessor: StripePaymentProcessor | PaypalPaymentProcessor

  constructor(paymentProcessor: StripePaymentProcessor | PaypalPaymentProcessor) {
      this.paymentProcessor = paymentProcessor
  }

  purchaseBike(qty: number) {
      const price = 100

      this.paymentProcessor.makePayment('bike', price, qty)
  }
}

// 
const activePaymentMethod: 'stripe' | 'paypal' = 'stripe'

const customerName: string = 'John'

let cart: Store
if (activePaymentMethod === 'stripe') {
  cart = new Store(new StripePaymentProcessor(customerName))
} else {
  cart = new Store(new PaypalPaymentProcessor(customerName))
}

cart.purchaseBike(3) // John bought a bike at price $300
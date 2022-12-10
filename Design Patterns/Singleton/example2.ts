class PrivateSingleton {
  constructor() {
    return {
      message: 'This is an instance.'
    }
  }
}

class Singleton2 {
  private static instance: PrivateSingleton

  constructor() {
    throw new Error('Use Singleton.getInstance() instead')
  }

  public static getInstance(): PrivateSingleton {
    if (!Singleton2.instance) {
      Singleton2.instance = new PrivateSingleton()
    }

    return Singleton2.instance
  }
}

const s1 = Singleton2.getInstance()
console.log(s1)
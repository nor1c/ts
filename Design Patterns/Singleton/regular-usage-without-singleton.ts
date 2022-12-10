/**
 * This is an example of how to use class without a singleton or regularly used
 */

class Animal {
  private name: string
  private ability: string

  constructor (name: string, ability: string) {
    this.name = name
    this.ability = ability
  }
}

const horse = new Animal('horse', 'run fast')
const fish = new Animal('golden fish', 'swimming')

if (horse === fish) {
  console.log('Horse and fish objects contain the same instance.')
} else {
  console.log('A horse and fish objects has different instances.') // called
}

/**
 * Let's try in a Singleton pattern
 */
class AnimalSingleton {
  private static instance: AnimalSingleton

  public name: string
  public ability: string

  constructor(name: string, ability: string) {
    this.name = name
    this.ability = ability
  }

  public static getInstance(name: string, ability: string): AnimalSingleton {
    if (!AnimalSingleton.instance) {
      AnimalSingleton.instance = new AnimalSingleton(name, ability)
    }

    return AnimalSingleton.instance
  }
}

const sHorse = AnimalSingleton.getInstance('horse', 'run fast')
const sFish = AnimalSingleton.getInstance('golden fish', 'swimming')

if (sHorse === sFish) {
  console.log('Singleton works, both variables contain the same instance.') // called
} else {
  console.log('Singleton failed, variables contain different instances.')
}
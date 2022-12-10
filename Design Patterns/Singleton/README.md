### Resources
- https://refactoring.guru/design-patterns/singleton

<hr>

### Quick Explanation

Basically it uses the same class instance on different class objects

<br>
Commonly used:

```ts
class Animal() {
  ..
}
const horse = new Animal() // created new Animal instance
const fish = new Animal() // created another new Animal instance
```

<br>
With singleton:

```ts
class Animal() {
  ..getInstance() {
    if (!Animal.instance) {
      Animal.instance = new Animal()
    }
    return Animal.instance
  }
}
const horse = Animal.getInstance() // created a new instance, since there's no instance created before
const fish = Animal.getInstance() // use an instance created in horse object
```
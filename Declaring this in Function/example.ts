const user = {
  id: 123,
  name: 'Jack',
  isAdmin: false,
  becomeAdmin: function () {
    this.isAdmin = true
  }
}

console.log(`Is ${user.name} admin? ${user.isAdmin}`) // Is Jack admin? false

// turn into admin
user.becomeAdmin()
console.log(`Is ${user.name} admin? ${user.isAdmin}`) // Is Jack admin? true
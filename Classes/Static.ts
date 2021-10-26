class Something { 
  static instances = 0
   
  constructor() {
    Something.instances++
  }
}

new Something() // 0+1: 1
new Something() // 1+1: 2
console.log(Something.instances) // output: 2
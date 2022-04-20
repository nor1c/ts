// implements clauses
interface Pingable {
  ping(): void
}

class Sonar implements Pingable {
  ping(): void {
    console.log('pong')
  }
}

class Ball implements Pingable { // error: Class 'Ball' incorrectly implements interface 'Pingable'.
  pong(): void {}
}

// 
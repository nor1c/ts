class Thing {
  _size!: number

  get size() {
    return this._size
  }

  set size(value: string | number) {
    let num = Number(value)

    this._size = num
  }
}

const t = new Thing()

// set
t.size = 2

// get
console.log(t.size) // 2
function myLoop (data: number[], callback: (item: number, index?: number) => void): void {
  for (let i = 0; i < data.length; i++) {
    callback(data[i], i)
  }
}

myLoop([1, 2, 3], (d, i) => console.log(d)) // 1 2 3
myLoop([1, 2, 3], (d, i) => console.log(d, i)) // 1 0, 2 1, 3 2
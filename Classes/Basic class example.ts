class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y)
  }
}

const point1 = new Point(1, 2) // 1 as x, 2 as y
const point2 = new Point(2, 3)
const finalPoint = point1.add(point2) // x=1+2, y=2+3 { x: 3, y: 5 }
console.log(finalPoint) // output: Point { x: 3, y: 5 }



// Function programming:
// that class generates this following JavaScript on ES5 emit:
let FPoint = (function () {
  function FPoint(x, y) {
    this.x = x
    this.y = y
  }

  FPoint.prototype.add = function (point) {
    return new FPoint(this.x + point.x, this.y + point.y)
  }

  return FPoint
}) ()
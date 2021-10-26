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

class Point3D extends Point {
  z: number

  constructor(x: number, y: number, z: number) {
    super(x, y) // call Point constructor
    this.z = z
  }

  add(point: Point3D) {
    let point2D: Point = super.add(point)
    return new Point3D(point2D.x, point2D.y, this.z + point.z)
  }
}

const point4 = new Point3D(1, 2, 3)
const point5 = point4.add(point4)
console.log(point5) // output: { x: 2, y: 4, z: 6 }

// process 1: x:1+1, y:2+2 = { x: 2, y: 4 }
// process 2: 2, 4, 3+3 = { x: 2, y: 4, y: 6 }
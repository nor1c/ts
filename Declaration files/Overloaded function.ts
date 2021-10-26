// The getWidget function accepts a number and returns a Widget, or accepts a string and returns a Widget array.

// declaration
declare function getWidget(n: number): Widget
declare function getWidget(s: string): Widget[]

// code
let x: Widget = getWidget(43) // output: Widget
let arr: Widget[] = getWidget('all of them') // output: Widget<Array<string>>
namespace Animal {
  export const hasFoot = true
  const unexportedMember = 'unexported'

  export class Turtle {}
}

namespace Animal {
  export interface ILion {
    foot: number,
    eatMeat: boolean
  }
  export class Lion {}
  export function lionHasFoot () {
    return hasFoot // OK!, because it's exported by 'Animal'
  }

  export function unExportedMembers () {
    return unexportedMember // error: 'unexportedMember' is not exported by 'Animal'
  }
}
type Fish = {
  name: string
  swim: () => {}
}

type Bird = {
  name: string
  fly: () => {}
}

function isFish (pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim() !== undefined
}

const fish1: Fish = {
  name: 'a fish 1',
  swim: () => {
    return 'it swim'
  }
}

console.log(fish1.swim())
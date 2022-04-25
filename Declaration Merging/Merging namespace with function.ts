function buildLabel (name: string): string {
  return buildLabel.prefix + name
}

namespace buildLabel {
  export let suffix = ''
  export let prefix = 'Hello, '
}

console.log(buildLabel('Fauzi')) // output: Hello, Fauzi
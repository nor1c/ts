/**
 * When specifying a greeting, you must pass a GreetingSettings object. This object has the following properties:
 * 1 - greeting: Mandatory string
 * 2 - duration: Optional length of time (in milliseconds)
 * 3 - color: Optional string, e.g. ‘#ff00ff’
 */

// declaration
// Use an interface to define a type with properties.
interface GreetingSettings {
  greeting: string
  duration?: number
  color?: string
}

greet({
  greeting: 'hello world',
  duration: 4000
})
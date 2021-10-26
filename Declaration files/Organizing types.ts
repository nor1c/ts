// The greeter object can log to a file or display an alert. You can provide LogOptions to .log(...) and alert options to .alert(...)

// declaration
// Use namespaces to organize types.
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean
  }
  interface AlertOptions {
    modal?: boolean
    title?: string
    color?: string
  }
}

// code
const g = new Greeter('hello')
g.log({ verbose: true })
g.alert({ modal: false, title: 'Current greeting' })

// You can also create nested namespaces in one declaration:
declare namespace GreetingLib.Options {
  // Refer to via GreetingLib.Options.Log
  interface Log {
    verbose?: boolean;
  }
  interface Alert {
    modal: boolean;
    title?: string;
    color?: string;
  }
}
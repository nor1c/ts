const deprecated = (deprecatedReason: string) => {
  return (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    return {
      get () {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${memberName} is deprecated. ${deprecatedReason}`);
        }

        Object.defineProperty(this, memberName, {
          value: wrapperFn,
          writable: true,
          configurable: true
        })

        return wrapperFn
      }
    }
  }
}

class Person {
  static staticMember = true

  instanceMember: string = 'hello'

  @deprecated('Use another static method')
  static deprecatedStaticMethod () {
    console.log('inside deprecated static method, statisMember =', this.staticMember)
  }

  @deprecated('Use another instance method')
  deprecatedMethod () {
    console.log('inside deprecated method, instanceMember =', this.instanceMember)
  }
}

const person = new Person()
person.deprecatedMethod()

Person.deprecatedStaticMethod()

/**
 * Output
    (warning) Method deprecatedMethodStatic is deprecated with reason: Use another static method
    inside deprecated static method, staticMember = true
    
    (warning) Method deprecatedMethod is deprecated with reason: Use another instance method
    inside deprecated instance method, instanceMember = hello
 */
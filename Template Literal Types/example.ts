type World = 'world'
type Greeting = `Hello ${World}` // type: Hello world

// 
type EmailLocaleIDs = 'welcome_email' | 'email_heading'
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff'

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id` // type: welcome_email_id | email_heading_id | footer_title_id | footer_sendoff_id

type Lang = 'en' | 'ja' | 'cn'
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}` // type: en_welcome_email_id | en_email_heading_id | en_footer_title_id | en_footer_sendoff_id | ja_welcome_email_id | ja_email_heading_id | ja_footer_title_id | ja_footer_sendoff_id | cn_welcome_email_id | cn_email_heading_id | cn_footer_title_id | cn_footer_sendoff_id

// 
type PropEventSource<T> = {
  on (eventName: `${string & keyof T}Changed`, cb: (newVal: any) => void): void,
  onWithSameReturnType<Key extends string & keyof T> (eventName: `${Key}Changed`, cb: (newVal: T[Key]) => void): void
}

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>

const person = makeWatchedObject({
  firstName: 'Ahmad',
  lastName: 'Fauzi',
  age: 25
})

person.on('firstNameChanged', () => {}) // eventName suggestion: firstNameChanged | lastNameChanged | ageChanged
person.on('unregistered', () => {}) // error: Argument of type '"unregistered"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

person.onWithSameReturnType('ageChanged', newVal => { // (parameter) newVal: number
  return newVal
})

//
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<'my-app'> // type: "ID-MY-APP"
type MessageOf<T extends { message: string }> = T['message']

interface Email {
  message: string
  provider: string
}

type TEmailMessage = MessageOf<Email> // type: string

// conditional
type MessageOf2<T> = T extends { message: string } ? T['message'] : never

type TEmailMessage2 = MessageOf2<Email> // type: string

interface Dog {
  bark(): void
}
type TDogMessage = MessageOf2<Dog> // type: never
interface Todo {
  title: string
}

const todo1: Readonly<Todo> = {
  title: 'Todo 1'
}

todo1.title = 'edited' // error: Property 'title' is a readonly type in type 'Readonly<{ title: string; }>'.ts(2542)
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'> // { title: string; completed: boolean; }

const todo2: TodoPreview = {
  title: 'Todo 1',
  completed: false
}

todo2 // type: TodoPreview
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: Date
}

type TodoPreview = Omit<Todo, 'createdAt'> // { title: string; description: string; completed: boolean; }
const todo1: TodoPreview = {
  title: 'Todo 1',
  description: 'todo 1 desc',
  completed: true
} // OK!

type TodoInfo = Omit<Todo, 'createdAt' | 'completed'> // { title: string; description: string; }
const todo2: TodoInfo = {
  title: 'Todo 1',
  description: 'todo 1 desc'
} // OK!
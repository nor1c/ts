interface Todo {
  title: string
  description: string
}

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1: Todo = {
  title: 'Todo 1',
  description: 'Doing todo 1'
}

updateTodo(todo1, {
  description: 'Doing todo 1 - updated' // missing title is OK!
}) // { title: 'Todo 1', description: 'Doing todo 1 - updated' }
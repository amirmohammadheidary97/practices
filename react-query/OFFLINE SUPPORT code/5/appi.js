const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let todos = [
  { id: '1', title: 'Learn JavaScript', done: true },
  { id: '2', title: 'Go shopping', done: false },
  { id: '3', title: 'Learn React ', done: true },
  { id: '4', title: 'Learn React Query', done: false },
]

export async function fetchTodos(sort) {
  await sleep(750)
  return Promise.resolve(
    structuredClone(todos).sort((a, b) => {
      if (String(a[sort]).toLowerCase() < String(b[sort]).toLowerCase()) {
        return -1
      }
      if (String(a[sort]).toLowerCase() > String(b[sort]).toLowerCase()) {
        return 1
      }
      return 0
    })
  )
}

export async function toggleTodo(id) {
  await sleep(750)
  todos = todos.map((t) => t.id === id ? { ...t, done: !t.done } : t)
  return Promise.resolve(todos.find(t => t.id === id))
}

export async function addTodo(newTitle) {
  await sleep(750)
  const newTodo = {
    id: String(todos.length + 1),
    title: newTitle,
    done: false,
  }
  todos.push(newTodo)
  return Promise.resolve(newTodo)
}

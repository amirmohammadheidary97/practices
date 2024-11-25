const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const todos = [
  { id: '1', title: 'Learn JavaScript', done: true },
  { id: '2', title: 'Go shopping', done: false },
  { id: '3', title: 'Learn React ', done: true },
  { id: '4', title: 'Learn React Query', done: false },
]


let attempt = 1

export async function fetchTodos() {
  await sleep(1000) 

  if (attempt > 3) {
    return Promise.resolve(structuredClone(todos))
  }

  attempt++
  
  throw new Error('Error fetching todos - please try again')
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchTodos() {
  await sleep(1000)

  throw new Error('no todos were found.')
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchRepoData(name) {
  await sleep(500)
  const response = await fetch(`https://api.github.com/repos/${name}`)

  if (!response.ok) {
    throw new Error('fetch failed')
  }

  return response.json()
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchIssues(search, signal) {
  const searchParams = new URLSearchParams()
  searchParams.append('q', `${search} is:issue repo:TanStack/query`)
  const url = `https://api.github.com/search/issues?${searchParams}`
  const response = await fetch(url, { signal })
  await sleep(500)
  if (!response.ok) {
    throw new Error('fetch failed')
  }
  return response.json()
}

// Artificially delay the response so we can better see loading states.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const globalFetch = window.fetch
window.fetch = async (...args) => {
  await delay(1000)
  return globalFetch(...args)
}

export const PAGE_SIZE = 4

export async function fetchRepos(sort, page) {
  const response = await fetch(
    `https://api.github.com/orgs/TanStack/repos?sort=${sort}&per_page=${PAGE_SIZE}&page=${page}`
  )
  
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`)
  }

  return response.json()
}

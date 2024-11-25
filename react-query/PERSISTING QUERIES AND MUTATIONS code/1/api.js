// Artificially delay the response so we can better see loading states.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const globalFetch = window.fetch
window.fetch = async (...args) => {
  await delay(1000)
  return globalFetch(...args)
}

export async function fetchPosts() {
  const url = `https://dev.to/api/articles`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

export async function fetchPost(path) {
  const url = `https://dev.to/api/articles${path}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  return response.json()
}

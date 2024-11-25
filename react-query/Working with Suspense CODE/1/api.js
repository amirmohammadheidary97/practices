export async function fetchIssues(search) {
    const searchParams = new URLSearchParams()
    searchParams.append('q', `${search} is:issue repo:TanStack/query`)
    const url = `https://api.github.com/search/issues?${searchParams}`
  
    const response = await fetch(url)
  
    if (!response.ok) {
      throw new Error('fetch failed')
    }
  
    return response.json()
  }
  
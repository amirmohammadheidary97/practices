export async function fetchRepos() {
    const response = await fetch('https://api.github.com/orgs/TanStack/repos')
    
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`)
    }
  
    return response.json()
  }
  
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchMilestone(id) {
  await sleep(250)
  const response = await fetch(
    `https://api.github.com/repos/TanStack/query/milestones/${id}`
  )
  if (!response.ok) {
    throw new Error('fetch failed')
  }
  return response.json()
}

export async function fetchUserDetails(username) {
  await sleep(500)
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) {
    throw new Error('fetch failed')
  }
  return response.json()
}

import { useQuery } from '@tanstack/react-query'
import { fetchIssues } from './api'

function useIssues(search) {
  return useQuery({
    queryKey: ['issues', search],
    queryFn: ({ signal }) => fetchIssues(search, signal),
    staleTime: 1 * 60 * 1000,
  })
}

export function IssueList({ search }) {
  const { data, status, fetchStatus } = useIssues(search)
  if (status === 'pending') {
    return <div>...</div>
  }

  if (status === 'error') {
    return <div>Error fetching data 😔</div>
  }

  if (data.items.length === 0) {
    return <div>No results found</div>
  }

  return (
    <div>
      <ul>
        { data.items.map(issue => <li key={issue.id}>{issue.title}</li>) }
      </ul>
      <div>{ fetchStatus === 'fetching' ? 'updating...' : null }</div>
    </div>
  )
}
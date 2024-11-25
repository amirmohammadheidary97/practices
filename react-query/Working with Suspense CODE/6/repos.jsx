import * as React from "react"
import { useQuery } from '@tanstack/react-query'
import { fetchRepos, PAGE_SIZE } from "./api"
import Sort from './Sort'

function useRepos(sort, page) {
  return useQuery({
    queryKey: ['repos', { sort, page }],
    queryFn: () => fetchRepos(sort, page),
    staleTime: 10 * 1000,
    placeholderData: (previousData) => previousData
  })
}

function RepoList({ sort, page, setPage }) {
  const { data, status, isPlaceholderData } = useRepos(sort, page)

  if (status === 'pending') {
    return <div>...</div>
  }

  if (status === 'error') {
    return <div>There was an error fetching the repos.</div>
  }

  return (
    <div>
      <ul style={{ opacity: isPlaceholderData ? 0.5 : 1 }}>
        {data.map((repo) => 
          <li key={repo.id}>{repo.full_name}</li>
        )}
      </ul>
      <div>
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={isPlaceholderData || page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          disabled={isPlaceholderData || data?.length < PAGE_SIZE}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default function Repos() {
  const [selection, setSelection] = React.useState('created')
  const [page, setPage] = React.useState(1)

  const handleSort = (sort) => {
    setSelection(sort)
    setPage(1)
  }

  return (
    <div>
      <Sort value={selection} onSort={handleSort} />
      <RepoList sort={selection} page={page} setPage={setPage} />
    </div>
  )
}

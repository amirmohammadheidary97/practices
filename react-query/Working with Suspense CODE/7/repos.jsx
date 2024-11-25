import * as React from "react"
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchRepos, PAGE_SIZE } from "./api"
import Sort from './Sort'

function useRepos(sort, page) {
  return useSuspenseQuery({
    queryKey: ['repos', { sort, page }],
    queryFn: () => fetchRepos(sort, page),
  })
}

function RepoList({ sort, page, setPage }) {
  const { data } = useRepos(sort, page)
  const [isPreviousData, startTransition] = React.useTransition()

  return (
    <div>
      <ul style={{ opacity: isPreviousData ? 0.5 : 1 }}>
        {data.map((repo) => 
          <li key={repo.id}>{repo.full_name}</li>
        )}
      </ul>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              setPage((p) => p - 1)
            })
          }}
          disabled={isPreviousData || page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          disabled={isPreviousData || data?.length < PAGE_SIZE}
          onClick={() => {
            startTransition(() => {
              setPage((p) => p + 1)
            })
          }}
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

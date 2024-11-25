import * as React from "react"
import { useQuery } from '@tanstack/react-query'
import Search from "./Search"
import { fetchIssues } from "./api"

function useIssues(search) {
  return useQuery({
    queryKey: ['issues', search],
    queryFn: () =>  fetchIssues(search),
    enabled: search !== ''
  })
}

function IssueList ({ search }) {
  const { data, status, isLoading } = useIssues(search)

  if (isLoading) {
    return <div>...</div>
  }

  if (status === 'error') {
    return <div>There was an error fetching the issues</div>
  }

  if (status === "success") {
    return (
      <p>
        <ul>
          {data.items.map((issue) => 
            <li key={issue.id}>{issue.title}</li>
          )}
        </ul>
      </p>
    )
  }

  return <div>Please enter a search term</div>
}

export default function App() {
  const [search, setSearch] = React.useState('')

  return (
    <div>
      <Search onSubmit={(s) => setSearch(s)} />
      <IssueList search={search} />
    </div>
  )
}

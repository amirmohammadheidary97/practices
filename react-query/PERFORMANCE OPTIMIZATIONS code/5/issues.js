import * as React from "react"
import { IssueList } from './IssueList'

export function Issues() {
  const [search, setSearch] = React.useState('')

  return (
    <div>
      <label>Search:
        <input
          value={search}
          onChange={e => {
            setSearch(e.target.value)
          }}
          type="text"
          name="search"
          placeholder="e.g. useQuery"
        />
      </label>
      { search
         ? <IssueList search={search} />
         : <div>Please enter a search term</div>
      }
    </div>
  )
}

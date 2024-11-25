import * as React from "react"
import { useQuery } from '@tanstack/react-query'
import { fetchRepos } from './api'
import { RiWifiOffLine } from "react-icons/ri"

function useRepos() {
  return useQuery({
    queryKey: ['repos'],
    queryFn: fetchRepos,
  })
}

function Offline() {
  return <RiWifiOffLine size={25} color="var(--red)"/>
}

function Repos() {
  const { data, status, fetchStatus } = useRepos()
  const offline = fetchStatus === "paused"

  if (status === 'pending') {
    return (
      <>
        <div>...</div>
        { offline && <Offline/> }
      </>
    )
  }

  if (status === 'error') {
    return <div>There was an error fetching the repos</div>
  }

  return (
    <>
      <ul>
        { data.map(repo => <li key={repo.id}>{repo.full_name}</li>) }
      </ul>
      { offline && <Offline/> }
    </>
  )
}

export default function App() {
  const [show, setShow] = React.useState(true)

  return (
    <div className="container">
      <button className="button" onClick={() => setShow(!show)}>
        {show ? 'Hide App' : 'Load App'}
      </button>
      { show ? <Repos /> : null }
    </div>
  )
}

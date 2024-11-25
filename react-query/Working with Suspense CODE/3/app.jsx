import * as React from "react"
import { AppErrorBoundary } from './AppErrorBoundary'
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchRepoData } from './api'

function useRepoData(name) {
  return useSuspenseQuery({
    queryKey: ['repoData', name],
    queryFn: () => fetchRepoData(name),
  })
}

function Repo({ name }) {
  const { data } = useRepoData(name)

  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </>
  )
}

export default function App() {
  return (
    <AppErrorBoundary>
      <React.Suspense fallback={<p>...</p>}>
        <Repo name="tanstack/query" />
        <Repo name="tanstack/table" />
        <Repo name="tanstack/router" />
      </React.Suspense>
    </AppErrorBoundary>
  )
}
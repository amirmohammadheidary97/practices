import * as React from "react"
import { AppErrorBoundary } from './AppErrorBoundary'
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchMilestone, fetchUserDetails } from './api.js'

function useMilestone(id) {
  return useSuspenseQuery({
    queryKey: ['milestones', id],
    queryFn: async () => fetchMilestone(id),
  })
}

function useUserDetails(username) {
  return useSuspenseQuery({
    queryKey: ['userDetails', username],
    queryFn: async () => fetchUserDetails(username),
  })
}

function useMilestoneWithUserDetails(id) {
  const milestone = useMilestone(id)
  const username = milestone.data.creator.login
  const userDetails = useUserDetails(username)

  return {
    milestone,
    userDetails
  }
}

function MilestoneInfo({ id }) {
  const { milestone, userDetails } = useMilestoneWithUserDetails(id)

  return (
    <p>
      Milestone { milestone.data.title } was created by { userDetails.data.name }
    </p>
  )
}

export default function App() {
  return (
    <AppErrorBoundary>
      <React.Suspense fallback={<p>...</p>}>
        <MilestoneInfo id={1} />
      </React.Suspense>
    </AppErrorBoundary>
  )
}

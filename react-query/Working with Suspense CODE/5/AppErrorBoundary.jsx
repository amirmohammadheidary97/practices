import { ErrorBoundary } from 'react-error-boundary'
import { QueryErrorResetBoundary } from '@tanstack/react-query'

export function AppErrorBoundary({ children }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={Fallback}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div>
      Error fetching data: { error.message }
      <button onClick={() => resetErrorBoundary()}>
        Try again
      </button>
    </div>
  )
}

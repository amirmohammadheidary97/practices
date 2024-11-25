import TodoList from './TodoList'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryErrorResetBoundary } from '@tanstack/react-query'

function Fallback({ error, resetErrorBoundary }) {
  return (
    <>
      <p>Error: { error.message }</p>
      <button onClick={resetErrorBoundary}>
        Try again
      </button>
    </>
  )
}

export default function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={Fallback}
        >
          <TodoList />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

import TodoList from './TodoList'
import { ErrorBoundary } from 'react-error-boundary'

function Fallback({ error }) {
  return <p>Error: { error.message }</p>
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <TodoList />
    </ErrorBoundary>
  )
}

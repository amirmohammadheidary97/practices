import * as React from "react"
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from './api'
import toast from 'react-hot-toast'

function useTodos() {
  const query = useQuery({
    queryKey: ['todos', 'list'],
    queryFn: fetchTodos,
    retryDelay: 1000,
  })

  React.useEffect(() => {
    if (query.status === 'error') {
      toast.error(query.error.message)
    }
  }, [query.error, query.status])

  return query
}

export default function TodoList() {
  const { status, data, failureCount } = useTodos()

  if (status === 'pending') {
    return (
      <div>
        <i>retry attempts: {failureCount}</i>
      </div>
    )
  }

  if (status === 'error') {
    return <i>(refresh the sandbox if you don't see anything)</i>
  }

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
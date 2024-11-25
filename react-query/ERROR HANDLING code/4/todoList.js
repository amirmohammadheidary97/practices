import * as React from "react"
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from './api'

function useTodos() {
  return useQuery({
    queryKey: ['todos', 'list'],
    queryFn: fetchTodos,
    retryDelay: 1000,
    throwOnError: true,
  })
}

export default function TodoList() {
  const { status, data, failureCount } = useTodos()

  if (status === 'pending') {
    return (
      <div>
        ...{failureCount > 1  ? <span>(This is taking longer than expected. Hang tight.)</span> : null}

        <i>retry attempts: {failureCount}</i>
      </div>
    )
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

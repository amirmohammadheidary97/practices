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

  if (status === 'error') {
    return <div>There was an error fetching the todos</div>
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

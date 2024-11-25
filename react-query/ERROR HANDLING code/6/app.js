import TodoList from './TodoList'
import toast, { Toaster } from 'react-hot-toast'
import { QueryClient, QueryCache, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(error.message)
    }
  })
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
      <Toaster/>
    </QueryClientProvider>
  )
}
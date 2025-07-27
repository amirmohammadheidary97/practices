import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostList } from "./components/PostList";

const queryClient = new QueryClient();


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostList />
    </QueryClientProvider>
  );
};

export default App

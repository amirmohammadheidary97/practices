import { usePosts } from "../hooks/usePosts";
import { PostForm } from "./PostForm";
import { PostItem } from "./PostItem";

export const PostList: React.FC = () => {
  const { data: posts = [], isLoading, addPost, removePost, editPost } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <PostForm onAdd={(text) => addPost.mutate(text)} />
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={(id) => removePost.mutate(id)}
          onEdit={(id, content) => editPost.mutate({ id, content })}
        />
      ))}
    </div>
  );
};

import { useState } from "react";

interface PostFormProps {
  onAdd: (text: string) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim()) onAdd(text.trim());
        setText('');
      }}
      className="flex gap-2 mb-4"
    >
      <input
        className="border px-2 py-1 rounded w-full"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded">Post</button>
    </form>
  );
};
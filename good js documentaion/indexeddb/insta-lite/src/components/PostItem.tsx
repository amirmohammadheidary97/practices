import React, { useState } from "react";
import type { Post } from "../lib/db";

interface PostItemProps {
  post: Post;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}


export const PostItem: React.FC<PostItemProps> = ({ post, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(post.content);

  const saveEdit = () => {
    onEdit(post.id!, text);
    setEditing(false);
  };

  return (
    <div className="border p-2 rounded mb-2">
      {editing ? (
        <>
          <textarea
            className="w-full border p-1 rounded mb-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={saveEdit} className="bg-green-500 text-white px-2 py-1 mr-2 rounded">Save</button>
          <button onClick={() => setEditing(false)} className="text-sm text-gray-500">Cancel</button>
        </>
      ) : (
        <>
          <p className="mb-2 whitespace-pre-wrap">{post.content}</p>
          <div className="text-xs text-gray-500 mb-2">{new Date(post.createdAt).toLocaleString()}</div>
          <button onClick={() => setEditing(true)} className="text-blue-500 mr-2">Edit</button>
          <button onClick={() => onDelete(post.id!)} className="text-red-500">Delete</button>
        </>
      )}
    </div>
  );
};

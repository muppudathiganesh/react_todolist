import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Blog = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useLocalStorage("posts", []);

  useEffect(() => {
    document.title = posts.length
      ? `${posts[posts.length - 1].title} - My Blog`
      : "My Blog";
  }, [posts]);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = { title, content, id: Date.now() };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition-colors duration-500">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={toggleTheme}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <h1 className="text-3xl font-bold mb-4 text-center">My Blog</h1>

        <form onSubmit={handleAddPost} className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Post Content"
            className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Post
          </button>
        </form>

        <div className="space-y-6">
          {posts.length === 0 && (
            <p className="text-center text-gray-500">No posts yet</p>
          )}

          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded shadow-sm bg-white dark:bg-gray-700"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

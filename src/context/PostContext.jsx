import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/posts');
        if (res.status !== 200) throw new Error('Error fetching data');
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  const addNewPost = async (newPost) => {
    try {
      const res = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      const data = await res.json();
      setPosts([...(posts || []), data]);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;
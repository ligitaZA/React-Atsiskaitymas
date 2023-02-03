import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const { posts } = useContext(PostContext);
  const { users, loggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [posts, users, loggedInUser]);

  if (!loggedInUser) {
    return (
      <div className="background">
        <div className="beforelogin"></div>
      </div>
    );
  }

  if (!posts || !users || isLoading) {
    return <div>Loading...</div>;
  }

  const availablePosts = posts.filter(post => post.userId);
  return (
    <div className="posts">
      {
        availablePosts.map(post => 
          <Post 
            key={post.id}
            data={post}
          />  
        )
      }
    </div>
  );
}

export default Posts;

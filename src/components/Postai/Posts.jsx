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
    <>

    <h1 className="mainH1">Tips for you mental health</h1>
      <div className="posts">
      {
        availablePosts.length > 0 ? 
        availablePosts.map(post => 
          <Post 
            key={post.id}
            data={post}
          />  
        )
        : <div className="noPosts">
        </div>
      }
    </div>
    
    
    </>
    
  );
}

export default Posts;

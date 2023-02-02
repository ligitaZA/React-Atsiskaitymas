import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import Post from "./Post";

const Posts = () => {

  const { posts } = useContext(PostContext);
  const { users } = useContext(UserContext);
  if(!posts || !users) {
    return <div>Loading...</div>
  }
  const availablePosts = posts.filter(post => post.userId);

  return (
    <>
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
      
    </>
  );
}
 
export default Posts;
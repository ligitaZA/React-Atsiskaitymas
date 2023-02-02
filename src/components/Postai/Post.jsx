import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Post = ({ data }) => {

  const { users } = useContext(UserContext);

  const postOwner = users.find(user => user.id === data.userId) || {}

  return (
    <div className="post">
      <div className="userPart">
        <div className="user">
          {postOwner && <span>{postOwner.userName}</span>}</div>
      </div>
      <div className="newPost">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
export default Post;
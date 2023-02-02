import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Post = ({ data }) => {

  const { users } = useContext(UserContext);

  const postOwner = users.find(user => user.id === data.userId) || {}

  return (
    <div className="post">
      <div className="userPart">
        <div className="user">
          {postOwner && (
            <img
              className="avatar"
              src={postOwner.avatar}
              alt="user avatar"
            />
          )}
          {postOwner && <span>{postOwner.userName}</span>}</div>
      </div>
      <div className="newPost">
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
export default Post;
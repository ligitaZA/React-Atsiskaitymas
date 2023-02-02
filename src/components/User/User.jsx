import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
  const { setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div className="headerUser">
      <div className="homePart">
        <Link to="/">
        <div className="logo"></div>
        </Link>
      </div>
      <div className="managingUsers">
        <div className="editPost">
        
        <Link to="/newPost">Add New Post</Link>
        </div>
       
        <button className="logOut" onClick={() => logOutUser()}>Log Out</button>
        </div>
        
      </div>
  );
}
export default User;
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import User from '../User/User';
import Footer from '../Footer';

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>

      {
        loggedInUser ?
          <User /> :
          <div className="loginRegister">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
          </div>
      } 
      <hr />
     <Footer />
      <Outlet />
    </>
  );
}

export default Header;

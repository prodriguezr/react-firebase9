import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { UserContext } from '../context/userProvider';

export const Navbar = () => {
  const { user, setUser, logoutUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await logoutUser();

      console.log('User successfully logged off');

      setUser(false);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      {user ? (
        <div>
          <NavLink to='/'>Home</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <NavLink to='/register'>Register |</NavLink>
          <NavLink to='/login'>Login |</NavLink>
        </>
      )}
    </>
  );
};

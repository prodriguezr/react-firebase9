import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { UserContext } from '../context/userProvider';

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div>
          <NavLink to='/'>Home</NavLink>
          <button onClick={() => setUser(false)}>Logout</button>
        </div>
      ) : (
        <div>
          {/* <NavLink to='/login'>Login</NavLink> */}
          <button onClick={() => setUser(true)}>Login</button>
        </div>
      )}
    </>
  );
};

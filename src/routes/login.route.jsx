import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userProvider';

export const LoginRoute = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser(true);

    navigate('/');
  };
  return (
    <>
      <h1>Login</h1>
      <h2>{user ? 'Online' : 'Offline'}</h2>
      {user ? (
        <button onClick={() => setUser(false)}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

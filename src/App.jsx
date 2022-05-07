import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar, RequireAuth } from './components';
import { UserContext } from './context/userProvider';
import { HomeRoute, LoginRoute, RegisterRoute } from './routes';

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) return <p>Loading app...</p>;

  return (
    <>
      <h1>APP</h1>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <HomeRoute />
            </RequireAuth>
          }
        />
        <Route
          path='/home'
          element={
            <RequireAuth>
              <HomeRoute />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<LoginRoute />} />
        <Route path='/register' element={<RegisterRoute />} />
      </Routes>
    </>
  );
};

export default App;

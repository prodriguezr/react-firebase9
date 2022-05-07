import { Route, Routes } from 'react-router-dom';
import { Navbar, RequireAuth } from './components';
import { HomeRoute, LoginRoute } from './routes';

const App = () => {
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
        <Route path='/login' element={<LoginRoute />} />
      </Routes>
    </>
  );
};

export default App;

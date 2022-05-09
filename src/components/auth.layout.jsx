import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='w-96 mx-auto mt-20'>
      <Outlet />
    </div>
  );
};

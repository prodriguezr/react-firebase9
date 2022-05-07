import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userProvider';

export const RegisterRoute = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { registerUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Processing form:', email, password);

    try {
      await registerUser(email, password);
      navigate('/');
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          autoComplete='off'
          placeholder='Enter your email'
          name='email'
          value={email || ''}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type='password'
          autoComplete='off'
          placeholder='Enter your password'
          name='password'
          value={password || ''}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </>
  );
};

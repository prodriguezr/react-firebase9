import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormError, FormInput } from '../components';
import { UserContext } from '../context/userProvider';
import { firebaseErrors, formValidate } from '../utils';

export const LoginRoute = () => {
  const { patternEmail, required, minLength, validateTrim } = formValidate();
  const { loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navigate('/');
    } catch ({ code: errorCode }) {
      setError('firebaseError', { message: firebaseErrors(errorCode) });
    }
  };

  return (
    <>
      <h1>Login</h1>
      <FormError error={errors.firebaseError} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='email'
          placeholder='Enter your email'
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type='password'
          {...register('password', {
            minLength,
            validate: validateTrim,
          })}
        >
          <FormError error={errors.password} />
        </FormInput>
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

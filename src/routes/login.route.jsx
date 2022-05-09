import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, FormError, FormInput, Title } from '../components';
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
      const { code, message } = firebaseErrors(errorCode);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title text='Login User' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='email'
          label='Email:'
          placeholder='Enter your email'
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type='password'
          label='Password:'
          {...register('password', {
            minLength,
            validate: validateTrim,
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <Button text='Login' type='submit' />
      </form>
    </>
  );
};

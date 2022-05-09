import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userProvider';
import { firebaseErrors, formValidate } from '../utils';
import { FormError, FormInput, Title, Button } from '../components';

export const RegisterRoute = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate('/');
    } catch ({ code: errorCode }) {
      const { code, message } = firebaseErrors(errorCode);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title text='Users Register' />
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
            minLength: minLength(6),
            validate: validateTrim,
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type='password'
          label='Re-type Password:'
          {...register('retryPassword', {
            minLength: minLength(6),
            validate: validateEquals(getValues('password')),
          })}
          error={errors.retryPassword}
        >
          <FormError error={errors.retryPassword} />
        </FormInput>

        <Button text='Sign up' type='submit' />
      </form>
    </>
  );
};

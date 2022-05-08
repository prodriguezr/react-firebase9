import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userProvider';
import { firebaseErrors, formValidate } from '../utils';
import { FormError, FormInput } from '../components';

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
      setError('firebaseError', { message: firebaseErrors(errorCode) });
    }
  };

  return (
    <>
      <h1>Register</h1>
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

        <FormInput
          type='password'
          {...register('retryPassword', {
            validate: validateEquals(getValues),
          })}
        >
          <FormError error={errors.retryPassword} />
        </FormInput>

        <button type='submit'>Register</button>
      </form>
    </>
  );
};

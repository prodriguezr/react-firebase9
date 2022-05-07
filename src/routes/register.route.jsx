import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userProvider';

export const RegisterRoute = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);

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
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use': {
          setError('email', {
            message: 'Email already in use',
          });

          console.log('Email already in use');

          break;
        }

        default:
          break;
      }
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          autoComplete='off'
          placeholder='Enter your email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type='password'
          placeholder='Enter your password'
          {...register('password', {
            setValueAs: (v) => v.trim(),
            minLength: {
              value: 6,
              message: 'Password must contain at least 6 characters',
            },
            // validate: {
            //   empty: (v) => v === '' || 'Enter your password',
            // },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type='password'
          placeholder='Enter your password again'
          {...register('retryPassword', {
            required: true,
            setValueAs: (v) => v.trim(),
            validate: {
              equals: (v) =>
                v === getValues('password') || 'Passwords do not match',
            },
          })}
        />
        {errors.retryPassword && <p>{errors.retryPassword.message}</p>}
        <button type='submit'>Register</button>
      </form>
    </>
  );
};

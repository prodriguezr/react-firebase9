import { forwardRef } from 'react';

export const FormInput = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, children }, ref) => {
    return (
      <>
        <input
          type={type}
          autoComplete='off'
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
        {children}
      </>
    );
  }
);

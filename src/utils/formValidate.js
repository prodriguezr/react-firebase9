export const formValidate = () => {
  return {
    required: {
      value: true,
      message: 'Field is required',
    },
    patternEmail: {
      value:
        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: 'Wrong email format',
    },
    minLength: {
      value: 6,
      message: 'Min 6 characters',
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return 'Write something';
        }
        return true;
      },
    },
    validateEquals(getValues) {
      return {
        equals: (v) => v === getValues('password') || 'Passwords do not match',
      };
    },
  };
};

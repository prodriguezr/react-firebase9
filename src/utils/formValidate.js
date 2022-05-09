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
    minLength(value) {
      return {
        value,
        message: 'Min 6 characters',
      };
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return 'Write something';
        }
        return true;
      },
    },
    validateEquals(value) {
      return {
        equals: (v) => v === value || 'Passwords do not match',
      };
    },
  };
};

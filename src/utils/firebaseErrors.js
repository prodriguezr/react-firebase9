export const firebaseErrors = (errorCode) => {
  console.log(`errorCode: ${errorCode}`);

  switch (errorCode) {
    case 'auth/email-already-in-use': {
      return {
        code: 'email',
        message: 'Email already in use',
      };
    }
    case 'auth/invalid-email': {
      return {
        code: 'email',
        message: 'Email format invalid',
      };
    }
    case 'auth/user-not-found': {
      return {
        code: 'email',
        message: 'User not found',
      };
    }
    case 'auth/wrong-password': {
      return {
        code: 'password',
        message: 'Wrong password',
      };
    }
    default: {
      return {
        code: 'unknown',
        message: 'Unknown error',
      };
    }
  }
};

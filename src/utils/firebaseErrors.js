export const firebaseErrors = (errorCode) => {
  console.log(`errorCode: ${errorCode}`);

  switch (errorCode) {
    case 'auth/email-already-in-use': {
      return 'Email already in use';
    }
    case 'auth/invalid-email': {
      return 'Email format invalid';
    }
    case 'auth/user-not-found': {
      return 'User not found';
    }
    case 'auth/wrong-password': {
      return 'Wrong password';
    }
    default: {
      return 'Unknown error';
    }
  }
};

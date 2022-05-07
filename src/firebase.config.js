// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBcHHuaaKVzYDawJhlWEWr047gM9vOCHNY',
  authDomain: 'react-2022-f6bea.firebaseapp.com',
  projectId: 'react-2022-f6bea',
  storageBucket: 'react-2022-f6bea.appspot.com',
  messagingSenderId: '330934013229',
  appId: '1:330934013229:web:473cceb3e2ebb1e8abd7a4',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import UserProvider from './context/userProvider';

import './index.css';

import 'flowbite';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
);

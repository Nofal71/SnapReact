import React from 'react';
import { BrowserRouter as BrowserRoutes, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignInPage from '../Authentications/LoginPage';
import SignUpPage from '../Authentications/SignupPage';

const Setup = () => {
  return (
    <BrowserRoutes>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRoutes>
  );
};

export default Setup;

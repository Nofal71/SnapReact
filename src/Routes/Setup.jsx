import React from 'react';
import { BrowserRouter as BrowserRoutes, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Setup = () => {
  return (
    <BrowserRoutes>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<div>Test Route</div>} />
      </Routes>
    </BrowserRoutes>
  );
};

export default Setup;

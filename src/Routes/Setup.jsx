import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignInPage from '../Authentications/LoginPage';
import SignUpPage from '../Authentications/SignupPage';
import NavBar from '../Components/page-components/NavBar';
import SearchTurorial from '../pages/Home/SearchTutorial';

const MainLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

const AuthLayout = ({ children }) => (
  <>
    {children}
  </>
);

const Setup = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
        />
        <Route path='/search' element={
          <MainLayout>
            <SearchTurorial />
          </MainLayout>
        }
        />
        <Route
          path='/login'
          element={
            <AuthLayout>
              <SignInPage />
            </AuthLayout>
          }
        />
        <Route
          path='/signup'
          element={
            <AuthLayout>
              <SignUpPage />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Setup;

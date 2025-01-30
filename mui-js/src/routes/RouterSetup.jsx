import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import TutorialComponent from '../pages/TutorialComponent';
import SearchTurorial from '../pages/SearchTutorial';
import SignUp from '../auth/Signup'
import SignIn from '../auth/Login'

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

const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <MainLayout>
            <TutorialComponent />
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
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path='/signup'
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterSetup;

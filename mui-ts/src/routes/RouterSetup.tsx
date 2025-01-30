import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import TutorialComponent from '../pages/TutorialComponent';
import SearchTutorial from '../pages/SearchTutorial';
import SignUp from '../auth/Signup';
import SignIn from '../auth/Login';

interface LayoutProps {
  children: React.ReactNode; // Explicitly type children
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

const AuthLayout: React.FC<LayoutProps> = ({ children }) => <>{children}</>;

const RouterSetup: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <TutorialComponent />
            </MainLayout>
          }
        />
        <Route
          path="/search"
          element={
            <MainLayout>
              <SearchTutorial />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
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

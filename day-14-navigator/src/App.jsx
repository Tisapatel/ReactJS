import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/login/Page';
import Signup from './components/signup/Page';
import Header from './components/header/Page';
import Home from './components/home/Page';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate('/');
  };

  return (
    <>
      {isAuth && <Header />}

      <Routes>
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/" replace /> : <Signup handleLogin={handleLogin} />}
        />

        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

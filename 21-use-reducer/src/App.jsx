import React, { useContext } from 'react';
import UserContext from './context/UserContext';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <>
      {isLogin ? <Home /> : <Login />}
    </>
  );
};

export default App;

import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setUser({ username, email, password });
  };

  console.log(user);

  return (
    <div className="wrapper">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="form-group">
          <label>Username</label>
          <input type="text" ref={usernameRef} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" ref={emailRef} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" ref={passwordRef} />
        </div>

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default App;

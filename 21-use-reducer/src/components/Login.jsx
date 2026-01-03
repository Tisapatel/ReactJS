import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [data, setData] = useState({});
  const { setUser, setIsLogin } = useContext(UserContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(data);
    setIsLogin(true);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg border-0 rounded-4" style={{ width: "380px" }}>
        <div className="card-body p-4">
          
          <h3 className="text-center mb-4 fw-bold text-dark">
            User Login
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control rounded-3"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={data.username || ''}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control rounded-3"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={data.password || ''}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark w-100 rounded-3 fw-semibold"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;

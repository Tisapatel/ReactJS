import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/users/UserSlice.js";
import '../css/style.css';

const SignUp = () => {
  const [user, setUser] = useState({});
  const {editData, editId} = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    if(editId){
        setUser(() => editData);
    }
  }, [editData, editId])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser({});
  }

  return (
    <div className="signup-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="signup-card">
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-4">
                  <h2 className="signup-title">Sign Up</h2>
                  <p className="signup-subtitle">Create your account</p>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Enter your username"
                    value={user.username || ''}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={user.email || ''}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={user.password || ''}
                    onChange={handleChange}
                  />
                </div>
                
                <button type="submit" className="btn btn-signup">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
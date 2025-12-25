import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  const getAllUser = async () => {
    try {
      let result = await axios.get("http://localhost:3000/users");
      if (Array.isArray(result.data)) {
        setList(result.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = async (data) => {
    try {
      await axios.post("http://localhost:3000/users", data);
      getAllUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateUser = async (user) => {
    try {
      await axios.patch(`http://localhost:3000/users/${user.id}`, user);
      getAllUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user);
    } else {
      createUser(user);
    }
    setUser({});
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      getAllUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (id) => {
    let data = list.find((val) => val.id === id);
    setUser(data);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="justify-content-center">Login Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password || ""}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary">
              {user.id ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((value, index) => (
                <tr key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(value.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(value.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
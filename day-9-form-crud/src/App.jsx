import React, { useState } from 'react'

function App() {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId == null) {
      setList([...list, { ...user, id: Date.now() }]);
    } else {
      let data = list.map((val) => {
        if (val.id == editId) {
          return { ...val, ...user };
        }
        return val;
      })
      setList(data);
      setEditId(null);
    }
    setUser({});
  }

  const handleDelete = (id) => {
    let data = list.filter(val => val.id != id);
    setList(data);
  }

  const handleEdit = (id) => {
    let editData = list.find(val => val.id == id);
    setUser(editData);
    setEditId(id);
  }

  return (
    <>

      <div className="container" style={{ "margin-top": "50px" }}>
        <form action="" method='post' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">UserName</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={user.username || ''}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChange}
              value={user.email || ''}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add User Data.</button>
        </form>

        <br /><br />

        <table class="table" >
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">User Name</th>
              <th scope="col">EmailId</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody style={{ "textAlign": "center" }}>
            {
              list.length > 0 ?
                list.map((value, index) => (
                  <tr key={value.id}>
                    <td>{index + 1}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>
                      <button onClick={() => handleDelete(value.id)}>Delete</button>
                      <button onClick={() => handleEdit(value.id)}>Edit</button>
                    </td>
                  </tr>
                ))
                :
                <tr>
                  <td colSpan={4}><strong>Data Not Found</strong></td>
                </tr>
            }
          </tbody>
        </table>
      </div>


    </>
  )
}

export default App

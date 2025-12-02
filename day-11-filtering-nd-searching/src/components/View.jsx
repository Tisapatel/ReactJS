import React from "react";

function View({ users, handleDelete, handleEdit, handleSearch }) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="search"
                  name="search"
                  onChange={handleSearch}
                  placeholder="Search by Username or Email"
                  className="form-control"
                />
              </div>
            </form>

          </div>
        </div>

        <div className="row mt-5 justify-content-center align-items-center">
          <div className="col-10 border-dark p-4 shadow">
            <table className="table table-bordered table-striped caption-top">
              <caption>
                <h3>Users List</h3>
              </caption>

              <thead className="table-dark">
                <tr>
                  <th>Sr.No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users && users.length > 0 ? (
                  users.map((value, index) => (
                    <tr key={value.id}>
                      <td>{index + 1}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(value.id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>{" "}
                        <button
                          onClick={() => handleEdit(value.id)}
                          className="btn btn-outline-warning btn-sm"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center">
                      Data Not Found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}


export default View;

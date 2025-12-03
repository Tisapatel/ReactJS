import React from 'react'

function Data({ list, handleDelete, handleEdit, indexOfFirstItem }) {
  return (
    <div className="container col-6">
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => {
            
            const globalIndex = indexOfFirstItem + index;

            return (
              <tr key={globalIndex}>
                <td>{globalIndex + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(globalIndex)}
                    className='btn btn-outline-danger mx-1'
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleEdit(globalIndex)}
                    className='btn btn-outline-warning mx-1'
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Data

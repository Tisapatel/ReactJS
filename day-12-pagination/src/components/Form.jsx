import React from 'react'

function Form({ user, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="container col-4">
      <input 
        type="text"
        name="username"
        placeholder="Enter Username"
        className="form-control mb-3"
        value={user.username || ""}
        onChange={handleChange}
        required
      />

      <input 
        type="email"
        name="email"
        placeholder="Enter Email"
        className="form-control mb-3"
        value={user.email || ""}
        onChange={handleChange}
        required
      />

      <button className="btn btn-primary w-100">Submit</button>
    </form>
  )
}

export default Form

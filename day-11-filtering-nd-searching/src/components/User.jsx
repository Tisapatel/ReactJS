import React from 'react'

function User({ handleChange, handleSubmit, user }) {

    return (
        <>
            <div className="container">
                <div className="row mt-5 justify-content-center align-items-center">
                    <div className="col-4 border-dark p-4 shadow">
                        <h3>Login Form</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="col-mb-3 mt-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={user.username || ""}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-mb-3">
                                <label className="form-label mt-2">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={user.email || ""}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default User

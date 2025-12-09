import React from 'react'

function Page() {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-8 caption-top mt-5">
                    <caption>
                        <h2>Employee-Form</h2>
                    </caption>
                    <form>
                         <div className="mb-3">
                            <label htmlFor="exampleInputuser" className="form-label">User Name</label>
                            <input type="username" className="form-control" id="username"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputDepartment" className="form-label">Department</label>
                            <input type="department" className="form-control" id="department" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputSalary" className="form-label">Salary</label>
                            <input type="number" className="form-control" id="Salary" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>



        </div>
    )
}

export default Page

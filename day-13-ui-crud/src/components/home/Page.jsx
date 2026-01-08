import React from 'react'

function Page() {
    return (
        <div className='Container'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    
                    <form className='mt-5'>
                        <h2>Employee Form</h2>
                        <div className="form-group mt-3">
                            <label htmlFor="ename">Employee Name</label>
                            <input type="ename" className="form-control mt-2" id="ename"  />
                        </div>
                         <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control mt-2" id="email"  />
                        </div>
                         <div className="form-group">
                            <label htmlFor="department">department</label>
                            <input type="department" className="form-control mt-2" id="department"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input type="number" className="form-control mt-2" id="salary" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Page

import React from 'react'

function Login() {
  return (
    <>
        <div className="container mt-5">
           <div className="row justify-content-center
            align-item-center">
                <form action="" method="post">
                    <div className="col-mb-6">
                      <label htmlFor="" 
                        class-Name="form-label"> 
                        Username</label>
                      <input type="username" 
                        name="username" 
                        id="username" 
                        value={''}
                        placeholder="Enter your username"
                        className="form-control"
                      />
                    </div>
                    <div className="col-mb-6">
                      <label htmlFor="email" 
                        class-Name="form-label"> 
                        email</label>
                      <input type="email" 
                        name="email" 
                        id="email" 
                        value={''}
                        placeholder="Enter your email"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
      
    </>
  )
}

export default Login

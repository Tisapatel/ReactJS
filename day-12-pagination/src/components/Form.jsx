import React from 'react'

function Form() {
  return (
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form action="" method="post">
                        <div className="col-mb-3">        
                         <label htmlFor="username"
                          className='form-lable mb-2'
                         >Username</label>
                         <input type="username"
                           className='form-control mb-3'
                           id='username'
                           name='username'
                           placeholder='Enter Your Name'
                          />
                        </div>
                        <div className="col-mb-3">        
                         <label htmlFor="email"
                        className='form-lable mb-2'
                         >Email</label>
                         <input type="email"
                           className='form-control mb-3'
                           id='email'
                           name='email'
                           placeholder='Enter Your Email'
                          />
                        </div>
                        <button type="button" className='btn btn-outline-primary mt-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Form

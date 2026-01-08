import React from 'react'


function TaskForm() {
    return (
        <div className='container'>
            <div classname="row justify-content-center">
                <div classname="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">UserName</label>
                            <input type="username" className="form-control"
                                id="username"
                                placeholder='Enter Username'
                                aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                placeholder='Enter Password'
                                aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Task Title</label>
                            <input type="text" className="form-control" id="text"
                                placeholder='Enter TaskName'
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Category</label>
                            <select name="" id="">

                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Task-discription</label>
                            <textarea
                                name="discrition"
                                rows={3}
                                className="form-control"

                            ></textarea>

                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default TaskForm

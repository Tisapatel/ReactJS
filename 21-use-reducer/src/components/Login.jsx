import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [data,setData] = useState({});
    const {setUser,setIsLogin } = useContext(UserContext);


    const handleChange = ({target}) => {
        const {name,value} = target;
        setData({
            ...data,
            [name]:value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(data);
        setIsLogin (true);
    }
    

    return (
        <div className="containet">
            <div className="row">
                <div className="col-6 offset-3">
                    <form method='post' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="username" 
                            name='username'
                            onChange={handleChange}
                            value={data.name || ''}
                            aria-describedby="username" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" 
                             name='password'
                            onChange={handleChange}
                            value={data.password || ''}
                            id="password" />
                            
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;
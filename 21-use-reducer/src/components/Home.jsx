import React, { useContext } from 'react'
import UserAuth from '../HOC/UserAuth';
import UserContext from '../context/UserContext';

const Home = () => {
    const {user,setIsLogin} =useContext(UserContext);
  return (
    <div className='vh-100 d-flex flex-column bg-primary-subtle justify-content-center align-items-center'>
        <h2 className='text-center'>WellCome To MyPage </h2>
        <h3 className='text-center'>{user.name}</h3>
         <button className='btn btn-outline-dark' onClick={()=> setIsLogin(false)}>Logout</button>
    </div>
  )
}

export default UserAuth(Home);

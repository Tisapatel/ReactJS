import React, { useState } from 'react'
import Form from './components/Form'
import Data from './components/Data'

function App() {

  const [user,setuser] = useState({});
  const [list,setList] = useState([]);


  const handleChange = (e) =>{
    let { name , value } = e.target;
    
    setuser({...user,[name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({});
  };




  return (
    <div>
      <h2 className='text-center m-5'>User Form</h2>
      <Form

       />
      <h2 className='text-center m-5'>User Data</h2>

      <Data

       />   

    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Login from './components/Login'

function App() {
 
  const [user,setUser] = useState({});
  const [list, setList] = useState([])

  useEffect(()=> {
       handleGetAllUsers();
  },[])
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser();
    setUser({})
  }

  const handleAddUser = async () => {
    try {
      await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({...user, id : Date.now()})
      })
        handleGetAllUsers();
        console.log('Data add successfully.');
        
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleGetAllUsers = async () =>{
      try {
        const res = await fetch('http://localhost:3000/users');
        const result = await res.json();
        setList(result)
      } catch (error) {
        console.log(error.message);
      }
  }

  return (
    <div>
         
    <Login handleChange={handleChange} handleSubmit={handleSubmit} user={user} />
      
    </div>
  )
}

export default App

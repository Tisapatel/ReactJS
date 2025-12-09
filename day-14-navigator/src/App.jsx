import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Page'
import ViewData from './components/view/Page'
import Header from './components/header/Page'


function App() {
  const[emp,setEmp] = useState({});
  const[list,setList] = useState([]);
  const[err,setErr] = useState(null);

  const handleChange = (e) =>{
    let {name, val} = e.target;
    setEmp({...emp,[name]: val});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmp({});
  }
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewData />} />
      </Routes>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Demo from './components/Demo';

const App = () => {
  const[count,setCount]=useState(0);
  const[toggle,setToggle]=useState(false);

  const handleSubmit=()=>{
    setCount(count+1);
  }
  const handleShow=()=>{
    setToggle(true);
  }
  const handleHide=()=>{
    setToggle(false);

  }
 const handleToggle = () => {
  if (toggle) {
    setToggle(false);
  } else {
    setToggle(true);
  }
}

  return (
    <>
      <h1>Hello React Js Developer</h1>
      <p> Count : {count}</p>
      <button onClick={handleSubmit}>Increment</button>
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
      <button onClick={handleToggle}>Toggle</button>
      { toggle ?<Demo/> : " "}
    </>
  )
}

export default App
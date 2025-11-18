import React, { useState } from 'react'
import Demo from './components/Demo';
import './App.css';

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
    <div className="app-container">
      <h1>Hello React Js Developer</h1>
      <div className="divider"></div>
      
      <div className="count-display">
        <div className="count-label">Current Count</div>
        <p>{count}</p>
      </div>

      <div className="buttons-grid">
        <button onClick={handleSubmit}> Increment</button>
        <button onClick={handleShow}> Show</button>
        <button onClick={handleHide}> Hide</button>
        <button onClick={handleToggle}> Toggle</button>
      </div>

      <div className="status-indicator">
        <div className={`status-dot ${toggle ? 'active' : ''}`}></div>
        <span className="status-text">Status: {toggle ? 'Visible' : 'Hidden'}</span>
      </div>

      <div className={`demo-component ${toggle ? 'show' : ''}`}>
        {toggle && <Demo/>}
      </div>
    </div>
  )
}

export default App
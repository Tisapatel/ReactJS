import React, { useEffect, useState } from 'react'
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem('count'));
    if (oldCount !== null) {
      setCount(oldCount);
    }
  }, [])

  useEffect(() => {
    if (count !== 0) {
      localStorage.setItem('count', JSON.stringify(count));
    }
  }, [count])

  const handleIncrement = () => {
    setCount(count => count + 1);
  }

  const handleDecrement = () => {
    setCount(count => count - 1);
  }

  return (
    <>
      <div className="card">
        <h2>Count : {count}</h2>
        <button type='button' onClick={handleIncrement}>Increment</button>
        <button type='button' onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  )
}

export default Counter

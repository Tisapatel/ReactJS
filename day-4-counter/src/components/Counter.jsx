import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // 1) Refresh par old value load karna
  useEffect(() => {
    const oldCount = localStorage.getItem("count");
    if (oldCount !== null) {  
      setCount(Number(oldCount));
    }
  }, []);

  // 2) Jab count update ho tab localStorage me store karna
  useEffect(() => {
    if (count !== 0) {              // <-- YOUR CONDITION
      localStorage.setItem("count", count);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increase</button>
    </>
  );
};

export default Counter;

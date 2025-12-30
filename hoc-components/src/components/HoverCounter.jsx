import React, {useState} from 'react'
import CounterWrapper from '../hoc/CounterWrapper'


const HoverCounter = ({count,incrementCount}) => {
    // const[count, setCount]=useState(0);
   return (
    <div>
      <h2>Click Hover: {count}</h2>
        {/* <button type='button' onMouseOver={()=>setCount(count+1)}>Hover Me</button> */}
        <button type='button' onMouseOver={incrementCount}>Hover Me</button>
    </div>
  )
}

export default CounterWrapper(HoverCounter);

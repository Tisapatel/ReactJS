import React,{useState} from 'react'
import CounterWrapper from '../hoc/CounterWrapper'

const ClickCounter = ({count,incrementCount}) => {
    //   const[count, setCount]=useState(0);
      return (
       <div>
         <h2>ClickCounter: {count}</h2>
           {/* <button type='button' onClick={()=>setCount(count+1)}>Click Me</button> */}
           <button type='button' onClick={incrementCount}>Click Me</button>
       </div>
     )
}

export default CounterWrapper(ClickCounter);


import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset } from './features/CounterSlice.js';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    
      <h2>Couter {counter}</h2> 
      <button style={{ marginRight: "10px" }} onClick={() => dispatch(increment())}>Increment</button> 
      <button style={{ marginRight: "10px" }} onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default App

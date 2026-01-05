
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/CounterSlice.js';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    
      <h2>Couter {counter}</h2> 
      <button style={{ marginRight: "10px" }} onClick={() => dispatch(increment())}>Increment</button> 
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App

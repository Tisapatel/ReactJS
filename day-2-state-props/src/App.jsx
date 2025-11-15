import { useState } from 'react';
import Display from './components/Display';

const App = function () {
  const [ count, setCount] = useState(0);
  const [domain,setDomain] = useState("frontendDeveloper");
  const handleCount=()=>{
  setCount(count + 1);
  }

  const handleDomain=()=>{
    setDomain("ReactDeveloper...");
    setDomain("NodeJsDeveloper...");
  }

  return (
    <>
     
     <Display count = {count} />
     <button onClick={handleCount}>Increament</button>
     <h2>{domain}</h2>
     <button onClick={handleDomain}>Increament</button>
    </>
  )
}

export default App;

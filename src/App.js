import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const add = () =>{
    setCount(count+1)
  }
  const reset = () =>{
    setCount(0)
  }

  const sub =() =>{
    setCount(count-1)
  }
  return (
    <div className="App">

      <h1 className='heading'>{count}</h1>
      <button onClick={add} >Increament</button>
      <button onClick={reset}>Reset</button>
      <button onClick={sub}>Decreament</button>


     
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
    const [counter, setCounter] =  useState(0); // useState deconstruction for variable
    const [clicks, setClicks] = useState(0);
  
    const increase = () => {
      setCounter((prevCount) => prevCount + 1); // save increment function
      setClicks((prevClicks) => prevClicks + 1);
    }
  
    const decrease = () => {
      setCounter((prevCount) => prevCount - 1); // save decrement function
      setClicks((prevClicks) => prevClicks + 1);
    }
    
    const reset = () => setCounter(0);
    
    // useEffect(() => {
    //   alert(`Counter has been incremented by 5`);
    // }, [])
  
    return (
      <div className="App">
        <br></br>
        <button onClick={decrease}>-</button>
        <h1>{counter}</h1>
        <button onClick={increase}>+</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
        <h3>{clicks}</h3>
      </div> 
    );
  }

export default App;

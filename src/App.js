import React, { useState} from "react";
import './App.css';

function App() {
  const [count, SetCount] = useState(0);
  const Increment = () => SetCount(prevCount => prevCount + 1);
  const Decrement = () => SetCount(prevCount => prevCount - 1);


  return (
    <div className="App">
      <button onClick={Increment}>+</button>
      <span>{count}</span>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default App;

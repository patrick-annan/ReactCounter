import { React, useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);

  // increase counter
 const increase = () => {
    setCounter(count => count +1);
};
 
// decrease counter
const decrease = () => {
  setCounter(count => count - 1);
};

// reset counter

const reset = () => {
  setCounter(0)
};

return (
  <div className='counter'>
    <h1>React Counter</h1>
    <span className='counter_output'>{counter}</span>
    <div className='"btn_container'>
      <button className='control_btn' onClick={increase}>+</button>
      <button className='control_btn' onClick={decrease}>-</button>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  </div>
);
};
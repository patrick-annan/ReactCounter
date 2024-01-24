import { React, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1 style={{ backgroundColor:'cornsilk', color: 'blue', textAlign: 'center' }}>React Counter</h1>
      
      <div style={{ textAlign: 'center', backgroundColor: 'cornsilk', padding: '3em' }}>
      
        <h2 className>{count}</h2>
          <span className="counter_output"></span>
            <div className='btn_container'>
              <button style={{ color: 'green' }} className='control_btn add' onClick={() => setCount(count + 1)}>+</button>
              
              <button style={{ color: 'red' }} className='control_btn minus' onClick={() => setCount(count - 1)}>-</button>
              
              <button className='reset' onClick={() => setCount(0)}>Reset</button>
              <br style={{ padding: '1.5em'}}></br>
              <img src='TheCount.jpg' alt="I'm counting!"></img>
            </div>
      </div>
    </div>
  )
}; 
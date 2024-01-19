import {React, useState } from 'react'

export default function App() {
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter_output"></span>
      <div className='btn_container'></div>
        <button className='control_btn'>+</button>
        <button className='control_btn'>-</button>
        <button className='reset'>Reset</button>
    </div>
  )
};
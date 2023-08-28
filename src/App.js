import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const handleincrease = () => {
    setCount(count + 1)
  }
  const handledecrease = () => {
    setCount(count - 1)
  }
  const Show_Text = () => {
    setDisplayText(`Counter Value: ${count}`);
  };

  return <React.Fragment>
    <div className='d-flex justify-content-center align-items-center text-dark mt-5'>
      <div>
        <p className='text-center fs-2'>React Counter</p>
        <p className='text-center fs-3' style={{ fontSize: "50px" }}>{count}</p>
        <div className='d-flex '>
          <button onClick={handleincrease} className='btn btn-primary mx-3' >increase</button>
          <button onClick={handledecrease} className='btn btn-danger mx-3  '>decrease</button>
        </div>
        <div className='text-center '>
          <p>{displayText}</p>
          <button className='btn btn-dark' onClick={Show_Text}>Show Text</button>
          <p>Counter: {count}</p>
        </div>
      </div>
    </div>

    </React.Fragment>
}

export default Counter;
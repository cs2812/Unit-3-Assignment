
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { add, Addition, Divide, minus, Multiply, Subtraction } from './store/action';
import { useState } from 'react';

function App() {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.count)
  const[x,setX]=useState("")
  // console.log(x)
  
  return (
    <div className="App">
     <h1>Value:{count}</h1>
     <div>
       <button 
       onClick={()=>dispatch(add())}
       >+</button>
       <button disabled={count<1}
       onClick={()=>dispatch(minus())}
       >-</button>
    </div>
    <br />
    <div>
      <input 
      type="number" 
      placeholder='Enter X value' 
      value={x} 
      onChange={(e)=>setX(Number(e.target.value))}/><br />
      <br />
      <button onClick={()=>(dispatch(Addition(Number(x))))}>Add</button>
      <button onClick={()=>(dispatch(Multiply(Number(x))))}>Multiply</button><br />
      <button disabled={count<1 || x >count} onClick={()=>(dispatch(Subtraction(Number(x))))}>Subtract</button>
      <button onClick={()=>(dispatch(Divide(Number(x))))}>Divide</button>
    </div>

    </div>
  );
}

export default App;

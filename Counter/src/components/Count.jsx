import React, { useState } from 'react'

import styles from "./counter.module.css";

export default function Count({initialValue}) {
  // console.log(initialValue)
  // console.log("isOdd",isOdd.isOdd)
  let isOdd=false
    const[count , setCount]=useState(initialValue);
    if(count%2===1){
       isOdd=true;
       
      }
      else{
        isOdd=false
      }

  return (
    <div>
      <h1>Counter App: </h1><h1 className={ isOdd ? styles.count1:styles.count2}>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(count*2)}>Double</button>
    </div>
  )
}

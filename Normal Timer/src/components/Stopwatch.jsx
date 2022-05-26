import React, { useState } from 'react'


const Stopwatch = ({initial,end}) => {

  const[timerId,setTimerId]=useState()
    const[watch,setWatch]=useState(initial)
    

    const start=()=>{
      if(!timerId){
      let id =setInterval(()=>{
       
          setWatch((prev)=>prev+1);

        },1000);
      setTimerId(id)
      }
    }
    const pause=()=>{

     clearInterval(timerId)
     setTimerId(null)
    }
    const reset=()=>{

      clearInterval(timerId)
      setWatch(initial);
     setTimerId(null)

    };
    const cleanup=()=>{ 
      clearTimeout(timerId)
      setWatch(initial)
      setTimerId(null)
    }
    if(watch===end){
      cleanup()
    }
    
  return (
    <div>
      <h1>Stop Watch</h1>
      <h1>{watch}</h1>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch

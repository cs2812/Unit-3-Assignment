import React, { useState } from 'react'
import styles from "./style.module.css"




export default function TodoInput({addtodo}) {
const[todo,setTodo]=useState("")


let change=(e)=>{
  setTodo(e.target.value)
  }

let click=()=>{

    addtodo(todo)
    setTodo("")
  }

  return (
    <div className={styles.div1} >
      <button disabled={!todo} onClick={click} className={styles.inpbtn}>+</button>
      <input value={todo} onChange={change} placeholder="Write Somethig" className={styles.inp}/>
    </div>
  )
}

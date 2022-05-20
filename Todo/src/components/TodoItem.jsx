

import React, { useState } from 'react'
import styles from "./todo.module.css"

export default function TodoItem({todo,onDelete}) {

    const [isCompleted ,setIsCompleted]=useState(todo.isCompleted)

  return (
    <div id={styles.tododiv} key={todo.id}>
    <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
    <input id={styles.check} 
          type="checkbox" 
           checked={isCompleted} 
           onChange={(e)=>{
        // console.log(e.target.checked)
        setIsCompleted(e.target.checked)
    }}/>

    {/* <button onClick={()=> onDelet(todo.id)

    }>Delet</button> */}
  </div>
  )
}

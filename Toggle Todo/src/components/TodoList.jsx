import React, { useState } from 'react'
import styles from "./style.module.css"



const TodoList = ({info,onDelete2}) => {
  const[checked,setChecked]=useState(true)


    let handleDelete=()=>{
        onDelete2(info.id)
      }
    

  return (
    <div>

<div style={{display:"flex"}} className={styles.info}>

<div className={styles.child}>
  <input type="checkbox" defaultChecked={checked} className={styles.checkbox}/>
  
  <div className={styles.striked}
  >{info.value}</div>
</div>

</div>
      
    </div>
  )
}

export default TodoList

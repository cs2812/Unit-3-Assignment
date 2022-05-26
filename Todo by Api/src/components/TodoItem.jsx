import React from 'react'
import styles from "./todo.module.css"

const TodoItem = ({info,deleteItem}) => {
    
  return ( 
    <div key={info.id} className={styles.list} >

        <div>({info.id}) {info.text}</div>
        <div>
        <button className={styles.funbtn} onClick={()=>deleteItem(info.id)}>delete</button>
        </div>
        
    </div>
  )
}

export default TodoItem

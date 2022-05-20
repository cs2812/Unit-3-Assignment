import React, { useState } from 'react'
import styles from "./todo.module.css";
import TodoItem from './TodoItem';

export default function Todo() {

    const[newTodo,setnewTodo]=useState("")
    
    const[todos,setTodos]=useState([])

    const handleChange=(e)=>{
        setnewTodo(e.target.value);
    }
    const onDelete=(id)=>{
        let newt=todos.filter((todo)=>todo.id !==id);
        setTodos(newt);
    };

  return (
    <div >
        <h1>My Todo</h1>
      <div className={styles.todoitem}>

      {todos.map((todo)=>(    //todo = ele
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
        ))}

      <div className={styles.inputadd}>

        <input placeholder='Write Somthing' className={styles.input} value={newTodo} onChange={handleChange} />

        <button className={styles.add} onClick={()=>{
              setTodos([...todos,{ 
                id:Date.now(),
                value:newTodo,
                isCompleted:false,
            }])  //array object
            setnewTodo("")
          }}>+
        </button>

      </div>

        
      </div>
    
    </div>
  )
}

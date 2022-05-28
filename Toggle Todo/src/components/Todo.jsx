import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import styles from "./style.module.css"
import TodoList from "./TodoList"


let arr=[]
function Todo() {
  const[act,setAct]=useState([])
  const[show,setShow]=useState(true)
  const[doneTodo,setDoneTodo]=useState([])




  let addtodo=(value)=>{
 
    setAct([...act, {
      id:Date.now(),
      done:false,
      value:value,
    }])
  }

  let onDelete=(id)=>{
    
    let newdata = act.filter((todo)=>todo.id !==id);
    setAct(newdata)
    
    // console.log(newdata)  
  }
  const onDelete2=(id)=>{
    let chektodo=arr.filter((todo)=>todo.id!==id);
    setDoneTodo(chektodo)
  }
  const sendarr=(obj)=>{
    obj.done=true;
    arr.push(obj)
  //  console.log(arr) 
    setDoneTodo(arr)
    
  }
  
  return (
    <div className={styles.container}>

        <TodoInput addtodo={addtodo}/>
      <div className={styles.item}>
            {act.map((info)=>(

            // passing 1-1 information---->

          <TodoItem sendarr={sendarr} info={info} key={info.id} onDelete={onDelete} />

          ))}

      </div>
        
        
        <button className={styles.btnshow} onClick={()=>setShow(!show)} >{show? "Hide Finish Task":"Show Finish Task"}</button>
        { show?  <div>
            {doneTodo.map((item)=>(
              <TodoList info={item} key={item.id} onDelete2={onDelete2}/>
            ))}
        </div>:null}
    
    </div>
  )
}

export default Todo

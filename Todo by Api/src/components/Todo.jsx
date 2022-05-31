import React, { useEffect, useState } from 'react'
import styles from "./todo.module.css"
import TodoItem from './TodoItem'


const Todo = () => {
    const[newTodo,setNewTodo]=useState("")

    const[todos,setTodos]=useState([])

    const[page,setPage]=useState(1)

    const[isloding,setLoding]=useState(true)

    const[isError,setError]=useState(false)

    
//API request---->

useEffect(()=>{

getList(page)
    
},[page]);

function getList(page=1){
    fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
    .then((r)=>r.json())
    .then((d)=>{
        if(d===""){
            alert(`No data Available on Page: ${page}`) ;setPage(page-1)}
       else{
        console.log(d)
        setTodos(d)
       }    
    }).catch((e)=>setError(true))
    .finally(()=>{
        setLoding(false)
    })

}

//post request-------->

let saveInfo=()=>{
fetch("http://localhost:8080/todos",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
    text:newTodo,
    isCompleted:false,  // it will take id it self
    }),
})
.then((r)=>r.json()
.then((d)=>{
    setTodos([...todos,d]);
    setNewTodo("")
    getList(page)

}))
.catch((e)=>setError(true))
.finally(()=>{
    setLoding(false)
})
}   

//Delete request----->

let deleteItem=(id)=>{
//    alert(id)
    fetch(`http://localhost:8080/todos/${id}`,{
        method:"DELETE"
    })
    .then((r)=>r.json().then((d)=>{
        console.warn(d)
        // setTodos([...todos,d]);
        getList(page)
    })).catch((e)=>setError(true))
    .finally(()=>{
        setLoding(false)
    })


}



  return (
      isloding?(<h2>...Loding</h2>)
      :isError?(<>
     <h2>....Somethg went Wrong!</h2>
      <h2>Start Json Server First with "Port 8080"</h2>
      
      </>)
      :<div className={styles.maindiv}>
      <h1>Todo</h1>
      <div className={styles.inputdiv}>
        <input
        className={styles.input}
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
        />
        <button onClick={saveInfo} className={styles.Addbtn}>Add</button>
      </div>
 {todos.map((info)=>(

<TodoItem key={info.id} info={info}  deleteItem={deleteItem}/>

 ))}  
 <h3>page: {page}</h3>

 <button 
 className={styles.funbtn} onClick={()=>{
     page>1?(setPage(page-1))
     :alert("This is First page")}
     }>Previous Page</button>        
 <button
 className={styles.funbtn} onClick={()=>setPage(page+1)}
 >Next Page</button>
 </div>
  )
}
export default Todo

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Todo = () => {
    const[todos,setTodo]=useState([])
    const[totalCount,setTotalCount]=useState(0)
    const[page,setPage]=useState(1)
    const[limit,setLimit]=useState(4)
    useEffect(()=>{
        axios.get(`http://localhost:3004/todos?_page=${page}&_limit=${limit}`)
        .then((r)=>{setTodo(r.data)
        console.log(r)
        setTotalCount(Number(r.headers["x-total-count"]));
        });

        
    },[page,limit]);

  return (
    <div>
      {todos.map((todo)=>(
          <div key={todo.id}>{todo.id} {':'} {todo.title}</div>
      ))}
      <h3>{page}</h3>
      <button onClick={()=>{
          if(page>1){
         setPage(page-1)
          }
      }}>Previous</button>
      <select onChange={(e)=>setLimit(e.target.value)}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
      </select>
      <button 
      onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}

export default Todo

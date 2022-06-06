import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import men from "./men.module.css"
import { CartContext } from '../context/CartContext'


const Women = () => {

  const[womens,updatewomens]=useState([])
  const[page,setPage]=useState(0)
  // console.log("men",mens)
  const{handleCart}=useContext(CartContext)

  useEffect(()=>{
  axios.get("http://localhost:8080/women")
 .then((r)=>{
  console.log(r.data)
  updatewomens(r.data)

  })

  },[])

  return (
   <div className={men.data}>
    {womens.map((el,i)=>( 
      <div className={men.ele} key={i} onClick={()=>handleCart(el)}>
        <div className={men.img}>
          <img src={el.img} alt="" />
        </div>
        <h5>NEW COLOR</h5>
        <p>{el.name}</p>
        <h5>INR {el.price}</h5>
        <p id={men.p}>2 FOR 30% OFF, 3+ FOR 40% OFF</p>
        <h4>{el.size}</h4>
    </div>
    ))}

</div>
      
  
  )
}

export default Women

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import men from "./men.module.css"


const Cart = () => {
    const{cart,removes}=useContext(CartContext)
    console.log("cart",cart)
  return (
    <div>
   {cart.map((ele)=>(
       <div className={men.cart} key={ele.ele.id}>
           <div className={men.cartimg}>
           <img src={ele.ele.img} alt="" />
           </div>
           <h2>{ele.ele.name}</h2>
           <button className={men.remove} onClick={()=>removes(ele.ele.id)}>Remove</button>
       </div>
    ))}      
      
    </div>
  )
}

export default Cart

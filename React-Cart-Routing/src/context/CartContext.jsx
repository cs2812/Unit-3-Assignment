import React, { createContext, useState } from 'react'

export const CartContext=createContext();
const CartContextProvider = ({children}) => {
    let [cart,setcart]=useState([])
    // console.log(cart)
    let removes=(id)=>{

      let data=cart.filter((e)=>e.ele.id!==id)
      setcart(data)
      console.log(id)
    }
    
    let handleCart=(ele)=>{
      console.log("handlecart",ele)
        setcart([...cart,{ele}])
    }
  return (
    <CartContext.Provider value={{handleCart,cart,removes}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

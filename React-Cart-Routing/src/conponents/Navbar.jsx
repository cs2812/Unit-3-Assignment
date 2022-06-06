import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import styles from "./style.module.css"


const Navbar = () => {
  const{isAuth,toggleAuth}=useContext(AuthContext)
  const{cart}=useContext(CartContext)
const navigate=useNavigate()
  let logout=()=>{
    if(isAuth){
      toggleAuth()
    }
  }
  let gotocart=()=>{
    navigate("/cart")
  }
  return (
    <div className={styles.navbar}>
        <Link to={"/"}>Home</Link>
        <Link to={"/men"}>Men</Link>
        <Link to={"/women"}>Women</Link>
        <Link to={"/login"} onClick={logout}>{isAuth?"Logout":"Login"}</Link>
        <span onClick={gotocart}>
          <i style={{marginTop:"10px"}}className="fa-solid fa-cart-shopping"></i>
          <span>{cart.length}</span></span>
    </div>
  )
}

export default Navbar

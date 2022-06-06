import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import home from "./home.module.css"
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
  const{isAuth,toggleAuth}=useContext(AuthContext)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate()
  let handlesub=(e)=>{
e.preventDefault()
// console.log(e)
axios({
  url:"https://reqres.in/api/login",
  method:"POST",
  data:{email,password}
})
.then((r)=>{
  console.log(r.data)
  toggleAuth()
  alert("Login Success")
  navigate("/")
})
.catch((r)=>alert("Use This  Email= eve.holt@reqres.in, password=cityslicka"))
  };
  return (
    <>
    <div className={home.login}>
      <h1>Login Page</h1>
      <form action="" onSubmit={handlesub}>
        <input type="email" value={email} placeholder='Enter Emal..' onChange={(e)=>setEmail(e.target.value)}/><br />
        <input type="password" value={password} placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)}/><br />
        <button>Login</button>
      </form> 
    </div>
    <span>Email=eve.holt@reqres.in</span><br />
    <span>Password=cityslicka</span>
    </> 
  )
}
export default Login

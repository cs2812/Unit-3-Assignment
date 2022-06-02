import React, { createContext, useState } from 'react'

export const AuthContext=createContext()

export default function AuthContextProvider({children}) {
  const[auth,setAuth]=useState(false)
  const[token,setToken]=useState("")

  let toggle=()=>{
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    }).then((r)=>r.json()).then((r)=>setToken(r.token))
    setAuth(!auth)
  }
    
  return (
    <AuthContext.Provider value={{auth,toggle,token}}>
      {children}
    </AuthContext.Provider>
  )
}

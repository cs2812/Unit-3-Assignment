import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
    const[isAuth,setAuth]=useState(false)
    let toggleAuth=()=>{
        setAuth(!isAuth)
    }
  return (
    <AuthContext.Provider value={{isAuth,toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

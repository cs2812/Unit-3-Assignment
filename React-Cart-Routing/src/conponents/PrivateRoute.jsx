import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
    const{isAuth}=useContext(AuthContext)
    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute


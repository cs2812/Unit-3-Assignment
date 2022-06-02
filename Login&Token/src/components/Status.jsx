import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import styles from "./style.module.css"

const Status = () => {
    const{auth,token}=useContext(AuthContext)
  return (
    <div className={styles.status}>
        <p>Status: {auth?"User Logged in":"User Logged Out"}</p>
        {auth?`Token No : ${token}`:"Pleace Login First"} 
    </div>
  )
}

export default Status

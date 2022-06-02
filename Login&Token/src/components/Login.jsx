import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import styles from "./style.module.css"

const Login = () => {
    const{auth,toggle}=useContext(AuthContext)
  return (
    <div >
      <button className={styles.login} onClick={toggle}>{auth?"LogOut":"Login"}</button>
    </div>
  )
}

export default Login

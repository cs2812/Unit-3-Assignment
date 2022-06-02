import React from 'react'
import Login from './Login'
import Status from './Status'
import styles from './style.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Login/>
        <Status/>
      
    </div>
  )
}

export default Navbar

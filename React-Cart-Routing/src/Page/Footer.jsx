import React from 'react'
import styles from "./home.module.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footer}>
    <div>
      <h4>Useful Links</h4>
      <p><Link style={{color:'rgb(49, 46, 46)',textDecoration:"none"}} to="/about-us">About Us</Link></p>
      <p><Link style={{color:'rgb(49, 46, 46)',textDecoration:"none"}} to="/FAQ">FAQ</Link></p>
      <p>Terms of use </p>
      <p>Terms of use</p>
      <p>Job Opportunities</p>
    </div>
    <div className={styles.logos}>
      <div><i className="fa-brands fa-facebook"></i></div>
      <div><i className="fa-brands fa-twitter"></i></div>
      <div><i className="fa-brands fa-instagram"></i></div>
      <div><i className="fa-brands fa-youtube"></i></div>
    </div>
      <div  className={styles.fakepr}><p>100% gaurentee of original products</p></div>
      <div  className={styles.fakepr}><p>30 days return policy</p></div>
  </div>
  )
}

export default Footer

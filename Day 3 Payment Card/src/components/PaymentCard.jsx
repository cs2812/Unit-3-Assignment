import React from 'react'
import styles from "./payment.module.css"

export default function PaymentCard(props) {
  console.log(props)
  return (
    <div className={styles.container} style={{backgroundColor: `${props.backgroundColor}`}}>
      <div className={styles.d1}>
          <h3>{props.date}</h3>
          <img src={props.logo} alt='icon'/>
      </div>
      <div className={styles.d2}>Case Study</div>
      <div className={styles.d3}>
          <h1>{props.heading}</h1>
          <h1>{props.subheading}</h1>
      </div>
      <div className={styles.d4}>
          <h3>{props.devices}</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt='arro'/>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import styles from "./style.module.css"


export default function TodoItem({info,onDelete,sendarr}) {
  // console.log("info",info)
  const[done,setDone]=useState(info.done)


  let checkbox=(e)=>{
  // console.log(e)
    setDone(e.target.checked)
   
    sendarr(info)
    onDelete(info.id)

  }

  let handleDelete=()=>{
    onDelete(info.id)
  }


  return (
    <div>
      
        <div style={{display:"flex"}} className={styles.info}>

          <div className={styles.child}>
            <input type="checkbox"  onChange={checkbox} className={styles.checkbox}/>
            
            <div className={done?styles.striked:""}
            >{info.value}</div>
          </div>
       
          <div className={styles.child}>
                  <button onClick={handleDelete}>Delete</button>
                    <img src="https://cdn-icons.flaticon.com/png/128/2902/premium/2902475.png?token=exp=1653134526~hmac=a75da314f83742a0b8b3d0a76213f2f0" alt="" />
             </div>

        </div>
          
    </div>

  )
}

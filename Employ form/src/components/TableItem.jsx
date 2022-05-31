import React from 'react'
import styles from "./form.module.css"
let f;
const TableItem = ({form,status}) => {
  console.log("form",form)
  if(status===true){
    f="True"
  }else if(status===false){f="False"}
  else if(status===""){f="False"}
  return (
    <div className={styles.details}>
     <h1>Employee Details : -</h1>
        <table>
          <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital State</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={styles.img}>
                <img src={form.photo} alt=''/>
                </td> 
                <td>{form.username}</td>
                <td>{form.age}</td>
                <td>{form.address}</td>
                <td>{form.department}</td>
                <td>{form.salary}</td>
                <td>{f}</td>
            </tr>
            </tbody>
     
        </table>
    </div>
  )
}

export default TableItem

import React, {useState, useRef } from 'react'
import styles from "./form.module.css"

const Form = ({make}) => {

    const[form,setForm]=useState({
        username:"",
        age:0 ,
        address:"",
        department:"",
        salary:"",
        marride:"",
        photo:"",
    });
    const ref = useRef();//input pr focuse k liye use kiya h; No more use 

    const handlesumbli= (e) => {

        e.preventDefault();
    
        make(form)
        ref.current.focus();
        
    };
    const handeOnchange=(e)=>{
    
        // console.log(e)
        let {name,type, checked,value}=e.target;
        // console.log(type,name,checked,value)

    
        if(type==="checkbox"){
            setForm({
                ...form,[name]:checked
            })
        }
        else{
        setForm({
            ...form,[name]:value,
        })
    }
    };


// useEffect(()=>{
//     // console.log(form)
// },[form])
    

  return (
<div className={styles.form}>
    <h1>Form</h1>
    <form onSubmit={handlesumbli}>
    <div>
    <label htmlFor="">Image</label>
    <input 
    ref={ref}
    type="text" 
    placeholder='Input Image link....'
    name="photo"
    onChange={handeOnchange}
    value={form.photo}
    />
    </div>

    <div>
        
        <label htmlFor="">Name : </label>
        <input 
        type="text"
        name="username"
        placeholder='Enter Name'
        value={form.username}
        onChange={handeOnchange}
         />
    </div>

    <div>
        <label htmlFor="">Age : </label>
        <input type="number"
        name="age"
        placeholder='Enter Age..'
        value={form.age}
        onChange={handeOnchange}
        />
    </div>

    <div>
        <label htmlFor="">Address : </label>
        <input 
        type="text"
        name="address"
        placeholder='Enter Address...'
        value={form.address}
        onChange={handeOnchange}
        />
    </div>

    <div>
        <label htmlFor="">Salary : </label>
        <input type="number"
        name="salary"
        placeholder='Enter Salary'
        onChange={handeOnchange}
        value={form.salary}
        />
    </div>

    <div>
        <label htmlFor="">Department : </label>
    
        <select 
        name="department"
        onChange={handeOnchange}
        value={form.department}
        >
            <option value="">---</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>    
    </div>

    <div>
        <label htmlFor="">Marital State : </label>

        <input type="checkbox"
        name="marride"
        value={form.marride} 
        onChange={handeOnchange}
        />
    </div>
 
  <br />

        <button type='submit'>Submit</button>
    </form>
        
      
</div>
  )
}

export default Form

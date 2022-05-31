
import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import TableItem from './components/TableItem';



function App() {

const[update, setUpdate]=useState([])
let make=(form)=>{

  setUpdate(form)
  
}

  return (
    <div className="App">
    <Form  setUpdate={setUpdate} make={make}/>
    <TableItem form={update} status={update.marride}/>
    </div>
  );
}

export default App;

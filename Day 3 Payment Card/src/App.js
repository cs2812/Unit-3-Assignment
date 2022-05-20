
import './App.css';
import PaymentCard from './components/PaymentCard';
import Data from "./Data.json"

function App() {
  return (
    <div className="App">
      {Data.map((paydata)=>(
        <>
    <PaymentCard key={paydata.id} {...paydata}/>
        
        </>
       
      ))}
  
    </div>
  );
}

export default App;

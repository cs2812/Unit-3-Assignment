
import './App.css';
import Stopwatch from './components/Stopwatch';


function App() {
  const start=0;

  const end=10;

  return (
    <div className="App">

      {/* <Todo/> */}
      <Stopwatch initial={start} end={end}/>


    
    </div>
  );
}

export default App;


import './App.css';
import Count from './components/Count';

function App() {
  return (
    <div className="App">
      <Count initialValue={0} isOdd={false} />
    </div>
  );
}

export default App;

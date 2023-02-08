import './styles/App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="App">
      <h1>TMRZ</h1>
      
      <NewTimer></NewTimer>

      <ListTimers></ListTimers>
    </div>
  );
}

export default App;

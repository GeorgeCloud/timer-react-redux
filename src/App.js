import './styles/App.css';

import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="App">
      <h1>TMRZ</h1>
      <p className='description'>Track any task duration.</p>

      <NewTimer></NewTimer>

      <ListTimers></ListTimers>
    </div>
  );
}

export default App;

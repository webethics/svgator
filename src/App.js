import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="stopwatch">
        <Stopwatch />
        </div>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;

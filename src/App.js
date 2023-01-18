import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2><span>Great example built with bootslander</span></h2>
      <div className='Slide-group'>
        <div className='Slide'>
          <img src={logo} width="200px"/>
        </div>
        <div className='Slide'>
          <img src={logo} width="200px"/>
        </div>
        <div className='Slide'>
          <img src={logo} width="200px"/>
        </div>
        <div className='Slide'>
          <img src={logo} width="200px"/>
        </div>
      </div>
    </div>
  );
}

export default App;

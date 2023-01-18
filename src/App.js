import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className='Uppercase Title'>My Portfolio</h1>
        <div className='Menu'>
          <ul>
            <li className='All'><a href='#'>All</a></li>
            <li><a href='#'>Web App</a></li>
            <li><a href='#'>UI/UX</a></li>
            <li><a href='#'>Graphics Design</a></li>
            <li><a href='#'>Mobile App</a></li>
            <li><a href='#'>Branding</a></li>
            <li><a href='#'>Marketing</a></li>
          </ul>
        </div>
        <div className='Thumnail-group'>
          <ul>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
            <li className='Thumnail'>
              <img src={logo} width="200px"/>
            </li>
          
          </ul>
        </div>
    </div>
  );
}

export default App;

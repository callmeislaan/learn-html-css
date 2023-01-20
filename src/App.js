import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobile, faWarehouse } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='Title'>
      <h2>Hello, we have bought together the best quality
services, offers, projects for you!
</h2>
      </div>
      <div className='Blocks'>
        <div className='Block'>
          <FontAwesomeIcon className='Icon' icon={faDesktop}/>
          <h2>Outstanding design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet suscipit est.</p>
        </div>
        <div className='Block'>
          <FontAwesomeIcon className='Icon' icon={faMobile}/>
          <h2>Responsive Layout</h2>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus.</p>
        </div>
        <div className='Block'>
          <FontAwesomeIcon className='Icon' icon={faWarehouse}/>
          <h2>Easy to use</h2>
          <p>Nulla iaculis ipsum sit amet leo euismod maximus. consectetur adipiscing elit. Nulla sit amet.</p>
        </div>

      </div>
    </div>
  );
}

export default App;

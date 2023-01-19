import logo from './logo.svg';
import './App.css';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <section className='Menu'>
        <div className='Image'>
          <img src={logo} width='50px'/>
        </div>
        <div className='Menu-list'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Domain</a></li>
            <li><a href='#'>Hosting</a></li>
            <li><a href='#'>Picing</a></li>
            <li><a href='#'>Testimonials</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='Login'>
          <button>
            <FontAwesomeIcon icon={faLock}/>
            <span>  Customer Login</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

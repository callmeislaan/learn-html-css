import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <section className='About'>
        <div className='Image'>
          Học Web Chuẩn
        </div>
        <div className='About-group'>
          <h1 className='About-us Uppercase'>About Us</h1>
          <p className='Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ipsum erat. Donec feugiat ipsum ac risus auctor dignissim. Phasellus ante dolor, molestie vitae malesuada id, posuere non est. Phasellus vulputate pharetra tempor. Aliquam in tortor in arcu iaculis malesuada.</p>
          <h3 className='Question'>Why Choose us?</h3>
          <div className='Reason'>
            <ul>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
              <li><FontAwesomeIcon icon={faCheck}/> Lorem ipsum dolor</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

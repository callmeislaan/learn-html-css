import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div className="App">
      <div className='Image'>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className='Title'>
        Get the invite
      </div>
      <div className='Content'>
        Ever wonder what “envelope” might look like in the mix? Well, you're in luck!
      </div>
      <form>
        <table>
          <tr>
            <input type='text' className="Input" placeholder='Enter Email' />
          </tr>
          <tr>
            <input type='button' className='Button' value='Request invite' />
          </tr>
        </table>
      </form>
    </div>
  );
}

export default App;

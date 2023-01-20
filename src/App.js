import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Top'>
        <h1>Need Help? Sure we are Online!</h1>
        <p>Etiam dapibus purus porttitor, egestas dui at, scelerisque nulla suspendisse et diam vel justo praesent risus.
          Nulla ut sagittis lorem nam tempor eros sit amet purus congue.</p>
      </div>
      <div className='Bottom'>
        <form>
          <div className='Input-row'>
            <input className='Input-cell Border' type='text' placeholder='First Name' />
            <input className='Input-cell Border' type='text' placeholder='Last Name' />
          </div>

          <div className='Input-row'>
            <input className='Input-cell Border' type='email' placeholder='Your email' />
            <input className='Input-cell Border' type='tel' placeholder='Your phone' />
          </div>

          <div className='Input-row'>
            <select name='country' className='Input-cell Border'>
              <option value="none">Select country</option>
              <option value="vietnam">Vietnam</option>
              <option value="china">China</option>
              <option value="canada">Canada</option>
            </select>
            <select name='course' className='Input-cell Border'>
              <option value="none">Select course</option>
              <option value="vietnam">Html</option>
              <option value="china">Css</option>
              <option value="canada">Javascript</option>
            </select>
          </div>
          <div className='Input-row'>
            <textarea placeholder='Content' className='Full Border' />
          </div>
          <div className='Input-row'>
            <input type='button' value='Submit' className='Full Border' />
          </div>


        </form>
      </div>
    </div>
  );
}

export default App;

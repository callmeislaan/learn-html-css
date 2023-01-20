import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3 className='Title'>Get in touch with us by filling contact form below</h3>
      <form className='Input-group'>
        <div>
          <input className='Input Half' type="input" placeholder='*Enter your full name' />
          <input className='Input Half' type="email" placeholder='*Enter your email address' />
        </div>
        <div>
          <input className='Full Input' type="input" placeholder="*Enter your subject" />
        </div>
        <div>
          <textarea className='Full Input' placeholder="*Your message here" />
        </div>
        <div className='Bottom'>
          <input type="button" value="Send message" />
          <span>* Please fill all require form field, thanks!</span>
        </div>
      </form>
    </div>
  );
}

export default App;

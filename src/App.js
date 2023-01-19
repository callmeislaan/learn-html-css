import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='Footer'>

        <div className='Footer-element'>
          <div className='Footer-element-title'>Air</div>
          <div className='Footer-element-content'>
          Facilisis turpis et arcu finibus tincidunt.
          Integer varius nisi ut lobortis.
          Cras a neque arcu quisque faucibus vehicula.
          Sagittis enim vel suscipit.
          </div>
        </div>

        <div className='Footer-element'>
          <div className='Footer-element-title'>Links</div>
          <div className='Footer-element-content'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>About</a></li>
              </ul>
          </div>
        </div>

        <div className='Footer-element'>
          <div className='Footer-element-title'>Categories</div>
          <div className='Footer-element-content'>
          <ul>
            <li><a href='#'>Landing Page</a></li>
            <li><a href='#'>Real Estate</a></li>
            <li><a href='#'>Personal</a></li>
            <li><a href='#'>Business</a></li>
            <li><a href='#'>E-Commerce</a></li>
          </ul>
          </div>
        </div>

        <div className='Footer-element'>
          <div className='Footer-element-title'>Contact Information</div>
          <div className='Footer-element-content'>
          <ul>
            <li><address>198 West 21th Street, Suite 721 New York NY 10016</address></li>
            <li><a href='#'>+ 1234 3534 234</a></li>
            <li><a href='#'>infor@yoursite.com</a></li>
          </ul>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;

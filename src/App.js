import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='Element'>
        <div className='Left'>
          <h2>A Elegant Design</h2>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <button>BLUE BUTTON WITH MODAL VIDEO</button>
        </div>
        <div className='Right Center'>
          <FontAwesomeIcon className='Icon' icon={faMobileScreenButton} />
          <FontAwesomeIcon className='Icon' icon={faTabletScreenButton} />
        </div>
      </div>

      <div className='Element'>
        <div className='Left Center'>
          <FontAwesomeIcon className='Icon' icon={faMobileScreenButton} />
          <FontAwesomeIcon className='Icon' icon={faTabletScreenButton} />
        </div>
        <div className='Right'>
          <h2>A Elegant Design</h2>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <button>BLUE BUTTON WITH MODAL VIDEO</button>
        </div>
      </div>

      <div className='Element'>
        <div className='Right'>
          <h2>A Elegant Design</h2>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <p>Consectetur adipiscing elit. Nulla sit amet suscipit est. Nulla iaculis ipsum sit amet leo euismod maximus. <b>Mauris</b> in ultricies nulla. Quisque vitae ipsum quis odio efficitur tincidunt nec at lectus.</p>
          <button>BLUE BUTTON WITH MODAL VIDEO</button>
        </div>
        <div className='Left Center'>
          <FontAwesomeIcon className='Icon' icon={faMobileScreenButton} />
          <FontAwesomeIcon className='Icon' icon={faTabletScreenButton} />
        </div>
      </div>

    </div>
  );
}

export default App;

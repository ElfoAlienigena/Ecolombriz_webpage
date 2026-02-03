
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from './slider.js';
import Nosotros from './about.js';
import HeroBlock from './heroBlock.js';
import Rrss from './rrss.js';
import Header2 from './header.js';

function App() {
  return (
    <div className="App">
      <Header2 />
      
      <main className="">
        <HeroBlock />

        <Slider />

        <div id='contacto'>
          <Rrss />
        </div>

        <div className="container marketing mt-5" id='nosotros'>
         <Nosotros />
        </div>
      </main>

    </div>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './header.js';
import Slider from './slider.js';
import Valores from './valores.js';
import HeroBlock from './heroBlock.js';
import Rrss from './rrss.js';
import Header2 from './neuvoHeader.js';

function App() {
  return (
    <div className="App">
      <Header2 />
      
      <main className="">
        <HeroBlock />

        <Slider />

        <Rrss />

        <div className="container marketing mt-5">
         <Valores />
        </div>
      </main>

    </div>
  );
}

export default App;

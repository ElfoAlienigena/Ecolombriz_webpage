
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './header.js';
import Slider from './slider.js';
import Valores from './valores.js';
import HeroBlock from './heroBlock.js';
import Rrss from './rrss.js';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="mt-5">
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

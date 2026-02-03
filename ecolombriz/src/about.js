import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function Nosotros() {
    return (
         <div className="row">
          <div className="m-2" style={{backgroundColor:"#efcddc", padding:"8px", width:"300px", borderRadius:"20px 20px 0 0"}}>
            <h2 className="fw-bold text-center m-3" style={{color:"#e37ca9"}}>Sobre Nosotros</h2>
          </div>
          <div className="row pt-4" style={{backgroundColor:"#efcddc", borderRadius:"20px 20px 0 0"}}>
            <div className="col-lg-4">
              <div className="d-flex justify-content-center mx-auto" style={{borderRadius:"100px", border:"2px solid #ee9cc0", padding:"10px", width:"140px", height:"140px", backgroundColor:"#ee9cc0"}}>
                <img className="mt-2" width="100" height="100" src="https://img.icons8.com/ios-filled/FFFFFF/handshake.png" alt="logo social"/>
              </div>
              <h2>Social</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a className="btn btn-secondary" href="#">View details</a></p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-center mx-auto" style={{borderRadius:"100px", border:"2px solid #ee9cc0", padding:"10px", width:"140px", height:"140px", backgroundColor:"#ee9cc0"}}>
                <img className="mt-2" width="100" height="100" src="https://img.icons8.com/ios-filled/FFFFFF/groups.png" alt="groups"/>
              </div>
              <h2>Cultural</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><a className="btn btn-secondary" href="#">View details</a></p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-center mx-auto" style={{borderRadius:"100px", border:"2px solid #ee9cc0", padding:"10px", width:"140px", height:"140px", backgroundColor:"#ee9cc0"}}>
                <img className="mt-2" width="100" height="100" src="https://img.icons8.com/glyph-neue/FFFFFF/leaf.png" alt="leaf"/>
              </div>
              <h2>Medioambiental</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><a className="btn btn-secondary" href="#">View details</a></p>
            </div>
          </div>
        </div>
    );
}

export default Nosotros;
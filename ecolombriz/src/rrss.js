import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function Rrss() {
    return(
        <div className="d-flex justify-content-center my-4 mx-auto" style={{borderRadius:"20px", border:"2px solid #408755", padding:"10px", width:"250px"}}>
            <a href="https://www.facebook.com/p/Corporaci%C3%B3n-Ecolombriz-100088248927803/" target="_blank" className="mx-2">
                <img className="" src="https://img.icons8.com/ios-filled/50/408755/facebook-new.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/corporacion_ecolombriz/" target="_blank" className="mx-2">
                <img src="https://img.icons8.com/ios-filled/50/408755/instagram-new.png" alt="Instagram"/>
            </a>
            <a href="https://forjadoresambientales.mma.gob.cl/club/ecolombriz/" target="_blank" className="mx-2">
                <img src="https://forjadoresambientales.mma.gob.cl/wp-content/uploads/2019/04/logo-forjadores.jpg" alt="Forjadores Ambientales" style={{width:"60px"}}/>
            </a>
        </div>
    );
}

export default Rrss;
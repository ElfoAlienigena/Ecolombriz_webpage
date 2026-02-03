import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function Slider(){
    return (
        <div id="carouselExampleIndicators" className="carousel slide w-75 h-100 mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{borderRadius: "0 0 50px 50px"}}>
                <div className="carousel-item active">
                    <div className="p-5" style={{backgroundColor: "#d9d498", color: "#412f1f"}}>
                        <h2 className="fst-italic">Tenemos un regalo para ti</h2>
                        <p>Hay un e-book que te puede interesar</p>
                        <button className="btn btn-outline-light mt-3"><a href="#" className="text-white fw-bold">Saber más</a></button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="p-5" style={{backgroundColor: "#7cb28c", color: "#ffffff"}}>
                        <h2 className="fst-italic">Tenemos un regalo para ti</h2>
                        <p>Hay un e-book que te puede interesar</p>
                        <button className="btn btn-outline-light mt-3"><a href="#" className="text-white fw-bold">Saber más</a></button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="p-5 text-white" style={{backgroundColor: "#e2a3bc", color: "#ffffff"}}>
                        <h2 className="fst-italic">Tenemos un regalo para ti</h2>
                        <p>Hay un e-book que te puede interesar</p>
                        <button className="btn btn-outline-light mt-3"><a href="#" className="text-white fw-bold">Saber más</a></button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
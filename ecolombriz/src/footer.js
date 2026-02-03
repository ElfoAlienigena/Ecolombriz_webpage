import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
    return(
        <footer className="text-white text-center py-4" style={{backgroundColor: "#7cb28c", borderRadius: "20px 20px 0 0"}}>
            <p>&copy; 2023 Ecolombriz. Todos los derechos reservados.</p>
            <p>Icons by <a href="https://icons8.com" target="_blank" style={{color: "white"}}>Icons8</a></p>
        </footer>
    );
}

export default Footer
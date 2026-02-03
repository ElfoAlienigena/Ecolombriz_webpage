import React, { useState } from 'react';
import './header.css'; // Asegúrate de importar tu CSS aquí (o donde lo tengas)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '/Users/ami/Documents/web design/Ecolombriz/ecolombriz/src/ecolombriz_logo.jpg'; // Ajusta la ruta a tu imagen

function Header2() {
  // Creamos una variable de estado.
  // menuAbierto: es true o false.
  // setMenuAbierto: es la función para cambiar ese valor.
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para alternar (abrir/cerrar)
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="main-header">
     
      <div className="container header-content">
        
        {/* El botón ahora tiene un evento "onClick" de React.
            Al hacer clic, ejecuta toggleMenu.
        */}
        <button 
            className="logo-toggle-btn" 
            onClick={toggleMenu} 
            aria-label="Abrir menú"
        >
          <img src={logo} alt="Ecolombriz Logo" className="logo-img mt-5" />
        </button>

        {/* Aquí está la magia:
            Si menuAbierto es true, la clase será "main-nav activo".
            Si es false, la clase será solo "main-nav".
        */}
        <nav className={`main-nav ${menuAbierto ? 'activo' : ''}`} id="mainNav">
          <ul>
            {/* Agregamos onClick para que el menú se cierre al elegir una opción */}
            <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
            <li><a href="#nosotros" onClick={() => setMenuAbierto(false)}>Nosotros</a></li>
            <li><a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a></li>
            <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
            <li className='radio'><a href="#radio" onClick={() => setMenuAbierto(false)}>Escucha Radio Ecolombina</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header2;
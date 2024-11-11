import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/styles.css"; 

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const navigate = useNavigate(); 
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleNavigation = (path, id) => {
        navigate(path);
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
    };

    return (
        <header className="header">
            <img
                src="../../logo2.png"
                alt="Logo"
                className="logo"
                onClick={() => handleNavigation('/')} 
                style={{ cursor: 'pointer' }} 
            />
            <nav className={`nav ${menuActive ? 'active' : ''}`}>
                <a className="link" onClick={() => handleNavigation('/', 'reserva-buscador')}>Reservaciones</a> 
                <a className="link" onClick={() => handleNavigation('/', 'mision-vision')}>Misión y Visión</a> 
                <a className="link" onClick={() => handleNavigation('/hospedaje')}>Hospedaje</a> 
                <a className="link" onClick={() => handleNavigation('/experiencias')}>Turismo Comunitario</a> 
                <a className="link" onClick={() => handleNavigation('/paquetes')}>Paquetes</a> 
                <a className="link" onClick={() => handleNavigation('/spa')}>Spa</a> 
                <a className="link" onClick={() => handleNavigation('/restaurante')}>Restaurante</a> 
                <a className="link" onClick={() => handleNavigation('/actividades')}>Actividades</a> 
                <a className="link" onClick={() => handleNavigation('/contacto')}>Contacto</a> 
            </nav>
            <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </header>
    );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/header.css"; 

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
                <a href="#turismo-comunitario" className="link">Turismo Comunitario</a>
                <a href="#paquetes" className="link">Paquetes</a>
                <a href="#spa" className="link">Spa</a>
                <a href="#restaurante" className="link">Restaurante</a>
                <a href="#actividades" className="link">Actividades</a>
                <a href="#contacto" className="link">Contacto</a>
            </nav>
            <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </header>
    );
}

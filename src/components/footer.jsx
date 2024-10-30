import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Importamos íconos de react-icons
import '../styles/footer.css'; // Importamos el archivo CSS

const Footer = () => {
    const navigate = useNavigate();

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
        <footer className="footerContainer">
            <div className="sectionContainer">
                {/* Logo y Navegación */}
                <div className="logoSection">
                    <img 
                        src="../../logo2.png" // Reemplaza con la URL de tu logo
                        alt="Tosepan Kali"
                        className="logo"
                        onClick={() => handleNavigation('/')} // Añadido evento onClick
                        style={{ cursor: 'pointer' }} // Añadido estilo para indicar que es clicable
                    />
                    <nav className="navLinks">
                        <a className="link" onClick={() => handleNavigation('/', 'reserva-buscador')}>RESERVAR</a> {/* Navega a la sección ReservaBusqueda */}
                        <a className="link" onClick={() => handleNavigation('/', 'mision-vision')}>MISIÓN / VISIÓN</a> {/* Navega a la sección MisionVision */}
                        <a className="link" onClick={() => handleNavigation('/hospedaje')}>HOSPEDAJE</a> {/* Navega a la ruta /hospedaje */}
                        <a className="link" href="#turismo-comunitario">TURISMO COMUNITARIO</a>
                        <a className="link" href="#paquetes">PAQUETES</a>
                        <a className="link" href="#spa">SPA</a>
                        <a className="link" href="#restaurante">RESTAURANTE</a>
                        <a className="link" href="#actividades">ACTIVIDADES</a>
                        <a className="link" href="#contacto">UBICACIÓN / CONTACTO</a>
                    </nav>
                </div>
                
                {/* Contacto y Reservaciones */}
                <div className="contactSection">
                    <h4 className="sectionTitle">Contacto y reservaciones</h4>
                    <p className="contactText">Tosepan Kali
                    Carretera Federal Libre Cuetzalan-San Miguel Km 1.5, Nahuiogpan, 73560 Cuetzalan del Progreso, Pue.</p>
                    <p className="contactText"><strong>Teléfono:</strong> (233) 331-09-25</p>
                    <p className="contactText"><strong>Celular / Whatsapp:</strong> 231 101 45 65</p>
                    <p className="contactText"><strong>Email:</strong> <a href="mailto:reservaciones@tosepankali.com" className="emailLink">reservaciones@tosepankali.com</a></p>
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/tosepankali" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://wa.me/2311014565" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="icon" />
                        </a>
                    </div>
                </div>
                
                {/* Mapa de Ubicación */}
                <div className="mapSection">
                    <h4 className="sectionTitle">Ubicación</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.315284123456!2d-97.5304274!3d20.0305225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da8e80fdb43795:0x6528580bb97c9aaa!2sTosepan%20Kali!5e0!3m2!1ses!2smx!4v1698781234567!5m2!1ses!2smx&markers=color:red%7Clabel:C%7C20.0305225,-97.5304274"
                        width="600"
                        height="400"
                        className="map"
                        allowFullScreen=""
                        loading="lazy"
                        title="Tosepan Kali Location"
                    ></iframe>
                </div>
            </div>
            <div className="footerBottom">
                <p>2024 © Todos los derechos reservados. | <a href="/privacy-policy" className="privacyLink">Politica de privacidad</a></p>
                <p>By ITST.</p>
            </div>
        </footer>
        
    );
};

export default Footer;

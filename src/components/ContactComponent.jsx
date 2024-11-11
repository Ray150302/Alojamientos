import React from "react";
import '../styles/styles.css';

export default function ContactForm() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">CONTACTO</h1>
            <form className="contact-form">
                <div className="contact-row">
                    <div className="contact-field">
                        <label className="contact-label">Nombre:</label>
                        <input type="text" className="contact-input" placeholder="Ingresa tu nombre" required />
                    </div>
                    <div className="contact-field">
                        <label className="contact-label">Correo electrónico:</label>
                        <input type="email" className="contact-input" placeholder="Ingresa tu correo" required />
                    </div>
                </div>
                
                <div className="contact-row">
                    <div className="contact-field">
                        <label className="contact-label">Teléfono:</label>
                        <input type="tel" className="contact-input" placeholder="Ingresa tu teléfono" />
                    </div>
                    <div className="contact-field">
                        <label className="contact-label">Ciudad:</label>
                        <input type="text" className="contact-input" placeholder="Ingresa tu ciudad" />
                    </div>
                </div>
                
                <div className="contact-field">
                    <label className="contact-label">Mensaje:</label>
                    <textarea className="contact-textarea" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>
                
                <button type="submit" className="contact-button">ENVIAR</button>
            </form>
        </div>
    );
}

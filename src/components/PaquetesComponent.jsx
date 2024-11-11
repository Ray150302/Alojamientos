import React from 'react';
import '../styles/styles.css';

const paquetesComponente = () => {
    return (
        <div className="container">
            <div className="textContainer">
                <h1 className="title">BIENESTAR “SENSACIONES Y ESENCIAS”</h1>
                <p className="description">
                    Déjate consentir por este paquete pensado en ti. Relájate con un temazcal, tina de relajación, masaje y/o facial.
                    Olvídate del estrés y comienza tu día relajado y sintiéndote bien contigo mismo.
                </p>
                <ul className="list">
                    <li><strong>Temazcal, + Tina de relajación+ Masaje.</strong> $1,300.00</li>
                    <li><strong>Masaje, + Tina de relajación.</strong> $800.00</li>
                    <li><strong>Masaje, + Facial.</strong> $800.00</li>
                    <li><strong>Temazcal + Tina de relajación.</strong> $650.00</li>
                    <li><strong>Temazcal, Facial.</strong> $650.00</li>
                </ul>
                <button className="button">RESERVAR</button>
            </div>
            <div className="imageContainer">
                <img 
                    className="image" 
                    src="https://example.com/image.jpg" // reemplaza con la URL de tu imagen
                    alt="Spa Experience"
                />
            </div>
        </div>
    );
};

export default paquetesComponente;

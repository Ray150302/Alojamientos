
import React from "react";
import "../styles/styles.css"; 

export default function MisionVision() {
    return (
        <section className="mision-vision-container">
            <div className="mision-vision-content">
                {/* Sección de Misión */}
                <div className="mision">
                    <h3 className="mision-vision-title">MISIÓN</h3>
                    <p className="mision-vision-text">
                        Somos una empresa social conformada por hombres y mujeres indígenas Náhuatl, que
                        brindamos un servicio turístico distinguido de alta calidad, con respeto a la naturaleza y
                        que fomenta los valores de la cultura Náhuatl y del cooperativismo.
                    </p>
                </div>

                {/* Imagen central */}
                <div className="mision-vision-image-container">
                    <img src="../../mision.png" alt="Decorative" className="mision-vision-image" />
                </div>

                {/* Sección de Visión */}
                <div className="vision">
                    <h3 className="mision-vision-title">VISIÓN</h3>
                    <p className="mision-vision-text">
                        Ser una red de turismo alternativa en la región Sierra Nororiental de Puebla, que promueva el
                        desarrollo social y que genere procesos de economía solidaria, mediante un turismo consciente.
                    </p>
                </div>
            </div>
        </section>
    );
}

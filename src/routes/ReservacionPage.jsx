import React from "react";
import Header from "../components/HeaderComponent"; // Asegúrate de que este componente ya esté creado
import Footer from "../components/FooterComponent"; // Asegúrate de que este componente ya esté creado
import "../styles/styles.css"; // Archivo CSS para estilizar la página

export default function ModernReservationPage() {
    return (
        <div className="reservation-page">
            <Header /> {/* Header moderno */}

            <div className="main-content">
                {/* Panel de información de la cabana */}
                <aside className="info-panel">
                    <img src="../../logo2.png" alt="Logo Tosepan Kali" className="logo" />
                    <h2>Cabañas Tosepan Kali</h2>
                    <p>⭐⭐⭐</p>
                    <p>Carretera federal libre Cuetzalan - San Miguel, km 1.5 - 73560</p>
                    <p>Cuetzalan del Progreso (MX)</p>
                    <p>+52 233 331 0925</p>
                    <p>reservaciones@tosepankali.com</p>
                    <a href="http://www.tosepankali.com" target="_blank" rel="noopener noreferrer">
                        Sitio web oficial
                    </a>

                    <div className="reservation-form">
                        <h3>Entrada / Salida</h3>
                        <input type="date" placeholder="Entrada" />
                        <input type="date" placeholder="Salida" />

                        <h3>Habitaciones</h3>
                        <div className="room-selector">
                            <span>#1</span>
                            <input type="number" min="1" max="10" placeholder="Personas" />
                        </div>

                        <button className="add-room">Añadir Habitación</button>
                        <button className="search-button">Buscar</button>
                    </div>
                </aside>

                {/* Lista de cabañas */}
                <div className="cabins-list">
                    {cabins.map((cabin) => (
                        <div key={cabin.name} className="cabin-card">
                            <img src={cabin.image} alt={cabin.name} className="cabin-image" />
                            <div className="cabin-info">
                                <h2>{cabin.name}</h2>
                                <p>Max {cabin.maxPeople} | {cabin.size} m²</p>
                            </div>
                            <button className="reservation-button">Información y Reserva</button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer /> {/* Footer moderno */}
        </div>
    );
}

const cabins = [
    {
        name: "Cabaña Chamaki",
        maxPeople: 4,
        size: 71,
        image: "https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91",
    },
    {
        name: "Cabaña Yohualichan / Izatakat",
        maxPeople: 3,
        size: 46,
        image: "https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72",
    },
    // Agrega más cabañas aquí
];

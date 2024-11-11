import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import '../styles/styles.css';

const ReservaBuscador = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [adults, setAdults] = useState(2);

    return (
        <div className="container">
            <h2 className="title">Reserva</h2>
            <div className="searchContainer">
                {/* Fecha de Entrada */}
                <div className="inputWrapper">
                    <FaCalendarAlt className="icon" />
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="input"
                        placeholder="Fecha de Entrada"
                    />
                </div>

                {/* Fecha de Salida */}
                <div className="inputWrapper">
                    <FaCalendarAlt className="icon" />
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="input"
                        placeholder="Fecha de Salida"
                    />
                </div>

                {/* Selección de Adultos */}
                <div className="inputWrapper">
                    <FaUser className="icon" />
                    <select
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="select"
                    >
                        <option value={1}>1 Adulto</option>
                        <option value={2}>2 Adultos</option>
                        <option value={3}>3 Adultos</option>
                        <option value={4}>4 Adultos</option>
                    </select>
                </div>

                {/* Botón de Reservar */}
                <button className="searchButton">
                    <FaSearch className="buttonIcon" /> Reservar
                </button>
            </div>
        </div>
    );
};

export default ReservaBuscador;

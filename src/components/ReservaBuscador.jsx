import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';

const ReservaBuscador = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [adults, setAdults] = useState(2);

    return (
        
        <div style={styles.container}>
            <h2 style={styles.title}>Reserva</h2>
            <div style={styles.searchContainer}>
                {/* Fecha de Entrada */}
                <div style={styles.inputWrapper}>
                    <FaCalendarAlt style={styles.icon} />
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        style={styles.input}
                        placeholder="Fecha de Entrada"
                    />
                </div>

                {/* Fecha de Salida */}
                <div style={styles.inputWrapper}>
                    <FaCalendarAlt style={styles.icon} />
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        style={styles.input}
                        placeholder="Fecha de Salida"
                    />
                </div>

                {/* Selección de Adultos */}
                <div style={styles.inputWrapper}>
                    <FaUser style={styles.icon} />
                    <select
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        style={styles.select}
                    >
                        <option value={1}>1 Adulto</option>
                        <option value={2}>2 Adultos</option>
                        <option value={3}>3 Adultos</option>
                        <option value={4}>4 Adultos</option>
                    </select>
                </div>

                {/* Botón de Reservar */}
                <button style={styles.searchButton}>
                    <FaSearch style={styles.buttonIcon} /> Reservar
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#F5F5F5',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#243A2E',
        marginBottom: '20px',
        fontFamily: 'serif',
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '15px',
        width: '100%',
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '10px 15px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        flex: 1,
    },
    icon: {
        color: '#243A2E',
        fontSize: '1.2rem',
        marginRight: '10px',
    },
    input: {
        border: 'none',
        outline: 'none',
        fontSize: '1rem',
        color: '#333',
        width: '100%',
        fontFamily: 'Arial, sans-serif',
    },
    select: {
        border: 'none',
        outline: 'none',
        fontSize: '1rem',
        color: '#333',
        backgroundColor: 'transparent',
        fontFamily: 'Arial, sans-serif',
        width: '100%',
    },
    searchButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 20px',
        backgroundColor: '#FFC107',
        color: '#243A2E',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
        fontFamily: 'Arial, sans-serif',
    },
    buttonIcon: {
        marginRight: '8px',
        fontSize: '1rem',
    },
};

export default ReservaBuscador;

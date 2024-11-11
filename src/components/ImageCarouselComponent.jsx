import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={styles.carousel}>
            <button onClick={prevImage} style={{ ...styles.button, ...styles.buttonPrev }}>❮</button>
            <div style={styles.imageContainer}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-${index}`}
                        style={{
                            ...styles.image,
                            ...(index === currentIndex ? styles.imageActive : {}),
                        }}
                    />
                ))}
            </div>
            <button onClick={nextImage} style={{ ...styles.button, ...styles.buttonNext }}>❯</button>
        </div>
    );
};

const styles = {
    carousel: {
        position: 'relative',
        width: '100%',
        height: '100vh', 
        overflow: 'hidden',
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        transition: 'background-color 0.3s',
    },
    buttonPrev: {
        left: '10px',
    },
    buttonNext: {
        right: '10px',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        opacity: 0,
        transform: 'scale(0.95)',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    imageActive: {
        opacity: 1,
        transform: 'scale(1)',
    },
};

export default ImageCarousel;

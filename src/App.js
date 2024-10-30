import React from 'react';
import Header from "../components/header"; 
import MisionVision from "../components/MisionVision"; 
import AboutUs from "../components/AboutUs"; 
import ImageCarousel from "../components/ImageCarousel"; 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
];

export default function App() {
    return (
        <div>
            <Header /> 
            <ImageCarousel images={images} /> 
            <AboutUs /> 
            <div style={styles.container}>
                <MisionVision /> 
                
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ffffff", 
        fontFamily: "Arial, sans-serif",
        marginTop: "50px", 
    },
};

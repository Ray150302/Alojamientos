import React, { Component } from "react";
import Header from "../components/HeaderComponent"; // Asegúrate de que las rutas sean correctas
import ImageCarousel from "../components/ImageCarouselComponent"; // Importa el carrusel de imágenes
import ContactForm from "../components/ContactComponent";
import Footer from "../components/FooterComponent";

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];

class ContactPage extends Component {
    render() {
        return (
            <div style={styles.pageContainer}>
                <Header /> {/* Encabezado de la página */}
                
                {/* Carrusel de imágenes colocado después del Header */}
                <ImageCarousel images={images} /> 

                <main style={styles.mainContent}>
                    <ContactForm /> {/* Formulario de contacto */}
                </main>
                
                <Footer /> {/* Pie de página */}
            </div>
        );
    }
}

const styles = {
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
    },
    mainContent: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
};

export default ContactPage;

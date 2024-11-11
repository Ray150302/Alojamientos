import React from "react";
import Header from "../components/HeaderComponent";
import ImageCarousel from "../components/ImageCarouselComponent";
import Footer from "../components/FooterComponent";
import ImageCard from "../components/ImageCardComponent";
import ContactPage from "./ContactPage";
import ContactForm from "../components/ContactComponent";

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];

const styles = {
    hospedajeContainer: {
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: "2.5em",
        color: "#18361f",
        marginBottom: "20px",
    },
    description: {
        fontSize: "1.2em",
        color: "#555",
        maxWidth: "800px",
        margin: "0 auto",
        marginBottom: "40px",
        textAlign: "justify", // Justificación del texto de descripción
    },
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
    price: {
        fontWeight: "bold",
        color: "#18361f",
    },
    listContainer: {
        textAlign: "justify", // Justificación del texto de la lista
        listStylePosition: "inside", // Alinea los puntos de la lista
        paddingLeft: "20px",
    },
};

const hospedajeOptions = [
    {
        title: "Cabañas",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/caba%C3%B1as%2Fcaba%C3%B1a1.jpg?alt=media&token=448b61f4-112d-4254-b50c-3699c8abaabc', alt: 'Cabaña 1' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/caba%C3%B1as%2Fcaba%C3%B1a2.jpg?alt=media&token=9e7375d8-90a1-4a53-8410-db6e93f6e3df', alt: 'Cabaña 2' },
        ],
        text: (
            <div style={styles.listContainer}>
                <b>SERVICIO DE RESTAURANTE:</b>
                <ul>
                    <li>Desayuno - <span style={styles.price}>$150.00</span></li>
                    <li>Comida - <span style={styles.price}>$150.00</span></li>
                    <li>Cenas - <span style={styles.price}>$100.00</span></li>
                    <li>Temazcal y Tina de relajación - <span style={styles.price}>$650.00</span></li>
                    <li>Cafeteria</li>
                </ul>
            </div>
        ),
    },
];

export default function RestaurantePage() {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />

            <div style={styles.hospedajeContainer}>
                <h1 style={styles.title}>Restaurante</h1>
                <p style={styles.description}>
                    ¡Experimenta los sabores únicos de la gastronomía masewal!

                    Todos los productos que se utilizan en la preparación de nuestras comidas son productos locales. Provienen de la milpa, los kaltsintan (huertos familiares) y cafetales orgánicos.
                    ¡No te pierdas de esta experiencia gastronómica que deleitara tus sentidos!
                </p>
                <div style={styles.cardContainer}>
                    {hospedajeOptions.map((option, index) => (
                        <ImageCard
                            key={index}
                            title={option.title}
                            images={option.images}
                            text={option.text}
                            isImageLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>

            <ContactForm/>
            
            <Footer />
        </div>
    );
}


import React from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import ImageCarousel from "../components/ImageCarouselComponent";

import ImageCard from "../components/ImageCardComponent";

const styles = {
    actividadesContainer: {
        padding: "100px 30px",
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
    },
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
    actividadText: {
        textAlign: "center",  
        maxWidth: "600px",    
        margin: "0 auto",     
    },
    paragraph: {
        marginBottom: "20px", 
        fontSize: "1.1em",
    },
    list: {
        listStyleType: "circle", 
        paddingLeft: "20px",   
        textAlign: "left",      
        lineHeight: "1.6",      
    },
};

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];
const actividadesOptions = [
    {
        title: "Arma tu ruta natural",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Actividades%2Factividades1.jpg?alt=media&token=3f9df0a7-95a2-476b-8ff4-3742fad60115', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    ¡No te quedes con las ganas de nadar en aguas cristalinas, explorar nuestras grutas o caminar en medio del bosque!
                    Dentro de este tour te mostraremos los atractivos naturales más importantes de nuestra región, entre los que podrás escoger de acuerdo al esfuerzo físico que quieras realizar.
                    Entre estos atractivos podrás encontrar:
                </p>
                <ul style={styles.list}>
                    <li>Cascada Las Brisas</li>
                    <li>Cascada Tres Caídas</li>
                    <li>Cascada Las Golondrinas</li>
                    <li>Cascada La Escondida</li>
                    <li>Cascada Corazón del Bosque</li>
                    <li>Gruta Los Corales</li>
                    <li>Gruta en el Río La Garganta y el Cañón Sagrado</li>
                    <li>Poza Huella de Perro</li>
                    <li>Bosque de Bambú</li>
                    <li>Bosque de Helechos</li>
                    <li>Jardín Botánico</li>
                </ul>

            </div>
        )
    },
    {
        title: "Ruta ecotecnias y construcción alternativa",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Actividades%2Factividades2.jpg?alt=media&token=54528838-b2df-4a6c-83ee-f7e9e9906ba6', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    ¡Ven y conoce “Nuestra casa” desde una forma distinta!

                    Dentro de este tour te explicaremos todas las técnicas que hemos puesto en marcha para el cuidado de nuestro entorno natural.

                    Te daremos un recorrido guiado por nuestras instalaciones y te hablaremos acerca de las luchas que se han tenido en la región por el cuidado y la defensa de nuestro territorio.
                </p>
            </div>
        )
    },
    {
        title: "Recorrido Tosepan Tonal",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Actividades%2Factividades3.jpg?alt=media&token=b1b03342-d7a0-491e-b15f-8244a10d6018', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Se parte de la Tosepan por un día y conoce algunos de los proyectos que hemos desarrollado, entre los que podrás encontrar las ecotecnias, la construcción alternativa con bambú y energías alternativas. Dentro de este recorrido te hablaremos de la historia de la Unión de Cooperativas Tosepan, cómo se conformó la unión, qué es el cooperativismo, qué es la economía social y solidaria, cómo se construyó <b>Tosepan Kali</b>  y cómo es el turismo que llevamos a cabo en esta cooperativa.
                </p>
            </div>
        )
    },
    {
        title: "Taller de café: tostado y molido",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Actividades%2Factividades4.jpg?alt=media&token=90d41156-26a2-4f5b-8955-15c96ba06612', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Dentro de este taller conocerás el proceso que tiene el café para convertirse ese en esa rica bebida que te tomas en las mañanas.

                    Te mostraremos cuáles son los tipos de grano que hay, el proceso de recolección, secado y fermentación; así como el proceso para el tostado y molido. Tendrás la oportunidad de realizar este último paso como tradicionalmente se hace, en una olla de barro.

                    Al finalizar este taller podrás degustar, en una rica taza, el café que moliste con tus propias manos y podrás llevar el resto a tu casa para que lo compartas con los que más amas.
                </p>
            </div>
        )
    },
    {
        title: "Taller de artesanías: hilos y joyería",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Actividades%2Factividades5.jpg?alt=media&token=683ddbf6-c10d-49fa-a6eb-6f18e0421235', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    En este increíble taller, uno de nuestros artesanos te enseñará las diferentes semillas que se utilizan en la región para crear maravillosos aretes, collares, pulseras y llaveros.

                    Conocerás de qué plantas se sacan estás semillas y podrás elaborar tus propias artesanías con el acompañamiento de un experto en el tema.

                    ¡No te quedes sin esta experiencia y descubre qué puedes hacer con tus propias manos!
                </p>
            </div>
        )
    },
];

const ActividadesPage = () => {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />
            <div style={styles.actividadesContainer}>
                <div style={styles.cardContainer}>
                    {actividadesOptions.map((actividad, index) => (
                        <ImageCard
                            key={index}
                            title={actividad.title}
                            images={actividad.images}
                            text={actividad.text}
                            isImageLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ActividadesPage;

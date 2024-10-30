import React from "react";
import Header from "../components/header";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/footer";
import ImageCard from "../components/ImageCard";

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];

const hospedajeOptions = [
    {
        title: "Cabañas",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/caba%C3%B1as%2Fcaba%C3%B1a1.jpg?alt=media&token=448b61f4-112d-4254-b50c-3699c8abaabc', alt: 'Cabaña 1' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/caba%C3%B1as%2Fcaba%C3%B1a2.jpg?alt=media&token=9e7375d8-90a1-4a53-8410-db6e93f6e3df', alt: 'Cabaña 2' },
        ],
        text: "Al hospedarte en nuestras cabañas podrás disfrutar de su amplitud y confort para que puedas descansar y disfrutar de la naturaleza. Cada una de nuestras cabañas hacen referencia a algún elemento de la riqueza natural y cultural de nuestra región. Contamos con nueve cabañas de diferentes capacidades, desde matrimoniales hasta familiares, acordes a tus gustos y necesidades. Las cabañas están construidas con materiales de la región, cuentan con captación de agua de lluvia y tratamiento de aguas negras y jabonosas Nuestras cabañas tienen una salita elaborada con un bonito diseño de bambú, ducha y baño privado con agua caliente, además de acceso a internet. Desayuno incluido"
    },
    {
        title: "Hotel",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Hotel%2Fhotel1.jpg?alt=media&token=2011ee67-e1f0-47bf-81b2-3ac6e0773150', alt: 'Camping 1' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Hotel%2Fhotel2.jpg?alt=media&token=ed170679-83d2-4212-836c-2d8e33638a55', alt: 'Camping 2' },
        ],
        text: "Nuestro hotel es un edificio construido con estructura de bambú y otros materiales de la región, en donde encontrarás habitaciones cómodas y acogedoras.Contamos con habitaciones sencillas y dobles, además de una habitación tipo suite con una hermosa vista panorámica. Nuestras habitaciones fueron construidas con materiales de la región y tiene diversas ecotecnias dentro de sus instalaciones que van desde la captación de agua de lluvia hasta tratamiento de aguas negras y jabonosas. Nuestras habitaciones tienen ducha y baño privado en la habitación con agua caliente, además de acceso a internet. Desayuno incluido."
    },
    {
        title: "Hostal",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Hostal%2Fhostal1.jpg?alt=media&token=8d38189e-8398-451d-a671-e4a9ccd54ba0', alt: 'Camping 1' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Hostal%2Fhostal2.jpg?alt=media&token=fa25cfb1-f7f9-4303-8be4-96b2734f7f7a', alt: 'Camping 2' },
        ],
        text: "En nuestro hostal podrás disfrutar de la comodidad y el confort en este nuevo concepto. Los cuartos están diseñados por camas individuales en forma de literas, buscando la privacidad y confort. Las instalaciones del hostal fueron construidas con materiales de la región, cuenta con un sistema de captación de agua de lluvias y tratamiento para aguas negras y jabonosas. Contamos con cuartos de 4, 5 y 6 camas, los cuales tienen ducha y baño privado en la habitación con agua caliente. Desayuno incluido. No cuenta con servicio de internet"

    }
];


export default function Hospedaje() {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />

            <div style={styles.hospedajeContainer}>
                <h1 style={styles.title}>PAQUETES</h1>
                <p style={styles.description}>
                    Tosepan Kali te ofrece diversos paquetes que se ajustan a tus gustos y necesidades.

                    Contamos con paquetes para parejas, familias, grupos de visitantes, estudiantes (desde primaria hasta universidad), eventos de trabajo (talleres, encuentros, seminarios, etc.) y organizaciones comunitarias

                    ¡Déjate consentir a un más! Los paquetes que tenemos para ti se muestran a continuación, pero si te interesa, podemos armar un paquete especialmente para ti de acuerdo a las actividades, servicios y experiencias que quieras tener.
                </p>
                <div style={styles.cardContainer}>
                    {hospedajeOptions.map((option, index) => (
                        <ImageCard
                            key={index}
                            title={option.title}
                            images={option.images}
                            text={option.text}
                        />
                    ))}
                </div>
            </div>

            <Footer /> 
        </div>
    );
}

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
    },
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
};

import React from "react";
import Header from "../components/HeaderComponent";
import ImageCarousel from "../components/ImageCarouselComponent";
import Footer from "../components/FooterComponent";
import ImageCard from "../components/ImageCardComponent";

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];

const experienciasOptions = [
    {
        title: "Experiencia comunitaria de la canela",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/TurismoComunitario%2Fcanela.jpg?alt=media&token=e5d2f8d4-895b-4dd4-b904-d4e23d3e72a4', alt: 'Artesanía 1' },
        ],
        text: "Embárcate en un viaje sensorial y descubre los secretos de la canela. Acompaña a los agricultores en la recolección de las cortezas de los árboles de canela y observa cómo se transforman en esa especia tan apreciada en todo el mundo. Conoce las propiedades medicinales de la canela y las diferentes formas en que se puede utilizar en la cocina. ¡Una experiencia deliciosa y aromática!"
    },
    {
        title: "Experiencia comunitaria del piloncillo",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/TurismoComunitario%2Fpiloncillo.jpg?alt=media&token=31c55812-9a2a-44d3-9b2c-4b16c204b233', alt: 'Cultural 1' },
        ],
        text: "Aprende sobre la producción artesanal de piloncillo, un endulzante natural tradicional en nuestra región. Descubre el proceso de extracción y purificación del jugo de la caña de azúcar, que da como resultado este delicioso producto. Acompaña a los productores locales en cada etapa del proceso y aprovecha para degustar algunas de las creaciones que se realizan con el piloncillo, como dulces y bebidas típicas."
    },
    {
        title: "Experiencia comunitaria de la miel",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/TurismoComunitario%2Fmiel.jpg?alt=media&token=832302ce-dbaf-414d-89fc-592728d13801', alt: 'Cultural 1' },
        ],
        text: "Enamórate de los pequeños polinizadores y descubre el fascinante mundo de las abejas sin aguijón (Scaptotrigona mexicana). Los apicultores locales te están esperando para guiarte en la recolección y así aprende sobre el cuidado y la preservación de estas valiosas especies. Participa en el taller de alfarería de ollitas para el cultivo de abeja pisinekmej, en el taller de cosecha de miel de la abeja endémica de la región y en el taller de cera para realizar sirios y artesanías. Conoce las propiedades únicas de la miel virgen y su importancia en la medicina tradicional, así como en la cocina. ¡No te resistas a probar este dulce manjar directamente de la colmena!"
    },
    {
        title: "Experiencia comunitaria del café",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/TurismoComunitario%2Fcafe.jpg?alt=media&token=8e619028-35d1-4727-a733-503a0e6dd7dd', alt: 'Cultural 1' },
        ],
        text: "Adéntrate en el mundo del café y conoce todo el proceso de cultivo y producción del café orgánico. Acompáñanos en una visita guiada a las plantaciones, donde aprenderás sobre las técnicas de cultivo sostenible y las prácticas orgánicas que respetan la biodiversidad. No te pierdas la oportunidad de degustar una taza de café recién tostado y descubre los distintos aromas y sabores que se encuentran en cada taza. ¡Una experiencia para los amantes del buen café!"
    },
    {
        title: "Experiencia comunitaria del chocolate",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/TurismoComunitario%2Fchocolate.jpg?alt=media&token=e77c643e-fafc-4687-b542-7da39af2a7e0', alt: 'Cultural 1' },
        ],
        text: "Sumérgete en el fascinante mundo del chocolate y despierta tus sentidos con un taller de chocolatería. Aprende sobre la historia y el proceso de elaboración del chocolate, desde la cosecha del cacao hasta la producción del dulce más adorado por todos en el mundo. Participa en la elaboración de tus propias tabletas de chocolate y experimenta con diferentes sabores y aditivos naturales. ¡Un verdadero paraíso para los amantes del chocolate!"
    },
];

export default function Experiencias() {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />

            <div style={styles.experienciasContainer}>
                <h1 style={styles.title}>EXPERIENCIAS CON SENTIDO COMUNITARIO</h1>
                <p style={styles.description}>
                    Te invitamos a vivir experiencias comunitarias que contribuyen al camino hacía el Yeknemilis (buen vivir), viviendo experiencias únicas de la mano de hombres y mujeres indígenas de la Sierra Nororiental del Estado de Puebla.
                    Tu visita contribuye no solo al desarrollo económico y social de las comunidades, sino que además ayudan a conservar y cuidar el medio ambiente.
                    Te invitamos a vivir proyectos de vida buena (Yeknemilis).
                    ¡Ven y vive momentos mágicos que jugarán con todos tus sentidos!
                </p>
                <div style={styles.cardContainer}>
                    {experienciasOptions.map((option, index) => (
                        <ImageCard
                            key={index}
                            title={option.title}
                            images={option.images}
                            text={option.text}
                            isImageLeft={index % 2 === 0} // Alterna la posición de la imagen
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

const styles = {
    experienciasContainer: {
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

import React from "react";
import Header from "../components/HeaderComponent";
import ImageCarousel from "../components/ImageCarouselComponent";
import paquetesComponente from "../components/PaquetesComponent";
import Footer from "../components/FooterComponent";
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
    promotionItem: {
        marginBottom: "15px",
        fontSize: "1.1em",
    },
    price: {
        fontWeight: "bold",
        color: "#18361f",
    },
};

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];

const actividadesOptions = [
    {
        title: 'Bienestar “Sensaciones y esencias"',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa1.jpg?alt=media&token=de8c7a9a-6d0c-4a38-a4c1-fc8ba4ed7018', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Déjate consentir por este paquete pensando en ti. Relájate con un temazcal, tina de relación, masaje y/o facial. Olvídate del estrés y comienza tu día relajado y sintiéndote bien contigo mismo.</p>
                <ul style={styles.list}>
                    <li style={styles.promotionItem}>Temazcal, Tina de relajación y Masaje - <span style={styles.price}>$1,300.00</span></li>
                    <li style={styles.promotionItem}>Masaje y Tina de relajación - <span style={styles.price}>$800.00</span></li>
                    <li style={styles.promotionItem}>Masaje y Facial - <span style={styles.price}>$800.00</span></li>
                    <li style={styles.promotionItem}>Temazcal y Tina de relajación - <span style={styles.price}>$650.00</span></li>
                    <li style={styles.promotionItem}>Temazcal y Facial - <span style={styles.price}>$650.00</span></li>
                </ul>
            </div>
        ),
    },

    {
        title: 'SPA',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa2.jpg?alt=media&token=f1d8695c-a922-486c-b111-3c7cc19f3614', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Olvídate de las preocupaciones diarias por un momento y déjate consentir por nosotros.

                    Nuestro servicio de spa cuenta con temazcal, masajes, faciales y tina de relajación; los cuales te ayudarán a disminuir las tensiones diarias y conectarte contigo mismo.

                    Todos nuestros tratamientos están basados en el uso de productos cosméticos naturales a partir de miel melipona y cera natural que son extraídos directamente de la colmena de la abeja sin aguijón (Scaptotrigona mexicana), nativa de nuestra región, así como el uso de la herbolaria tradicional de la zona; lo que permite el rescate de la cultura náhuatl.
                </p>
                <ul style={styles.list}>
                    <li style={styles.promotionItem}>Masaje holístico aroma terapia - <span style={styles.price}>$600.00</span></li>
                    <li style={styles.promotionItem}>Masaje con piedras calientes - <span style={styles.price}>$600.00</span></li>
                    <li style={styles.promotionItem}>Temazcal - <span style={styles.price}>$470.00</span></li>
                    <li style={styles.promotionItem}>Tina de relajación  - <span style={styles.price}>$350.00</span></li>
                    <li style={styles.promotionItem}>Facial - <span style={styles.price}>$350.00</span></li>
                </ul>
            </div>
        ),
    },

    {
        title: 'Masaje holístico aroma terapia',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa3.jpg?alt=media&token=34421f10-64cf-4c49-88f9-5243e892c57f', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Este masaje te ayudará a olvidarte de las tensiones cotidianas, dolores de cabeza o dolores de espalda que se van acumulando a lo largo de la vida.

                    Relájate con las esencias naturales de árbol de té y lavanda que serán utilizados en tu rostro, espalda, cuello, hombros, brazos, piernas y pies.
                </p>

            </div>
        ),
    },

    //
    {
        title: 'Masaje con piedras calientes',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa4.jpg?alt=media&token=36d16f7c-0881-4330-a138-ad6c89671962', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Nuestras piedras de obsidiana relajarán todo tu cuerpo pues ayudarán a aliviar las tensiones provocadas por las preocupaciones y el estrés.

                    Este tipo de mansaje también ayuda a disminuir los dolores producidos por la artritis, por lo que lo hace ideal para personas con este padecimiento.
                </p>

            </div>
        ),
    },

    {
        title: 'Temazcal',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa5.jpg?alt=media&token=cacb71a8-2e1a-4e09-87d4-461c48d6307a', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Baño de vapor que se utilizaba desde tiempos ancestrales en México y que emplea diversas plantas medicinales como son: hierba santa, albaca, romero, espinosilla, vaporu.

                    Ayuda a desintoxicar el cuerpo, oxigenar la sangre, limpiar las vías respiratorias y purificar nuestros cuerpos.

                    También ayuda a aliviar los cólicos menstruales, desinflamar el vientre después de dar a luz y a que no entre la frialdad en tu cuerpo, por lo que hará que éste se recupere más rápido.

                    Además, el temazcal ayuda a bajar la grasa corporal de forma natural.Nota: se sugiere pedir el servicio con antelación, mínimo tres horas antes, para que se pueda calentar el temazcal y mezclar todas las plantas medicinales que se necesitan para dar este servicio.

                    No es recomendable para personas que sufren de presión alta ni se recomiendan estancias prolongadas para niños menores de 10 años dadas las altas temperaturas que puede alcanzar el vapor del temazcal.
                </p>

            </div>
        ),
    },

    {
        title: 'Tina de relajación',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa6.jpg?alt=media&token=3665dda2-7c4e-4c2d-9b60-d3f71351f50a', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Déjate sumergir en aguas cristalinas dentro de nuestra tina de relajación, donde podrás reposar en agua caliente y olvidarte de todas esas tenciones que has acumulado a lo largo del día.

                    Disminuye tu estrés con el sonido del agua, mientras brota de la tina.
                </p>

            </div>
        ),
    },

    {
        title: 'Facial',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa7.jpg?alt=media&token=a8880d7c-2dd5-4628-94dc-00002112ea11', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Consiente tu piel con productos orgánicos y un delicioso masaje en tu rostro que ayudará no solo a relajarte sino también a disminuir visiblemente las líneas de expresión. Ten una piel una piel tersa y humectada.

                    ¡No podrás que creer lo increíble que se siente tu piel después de este delicioso facial!
                </p>

            </div>
        ),
    },
    {
        title: 'Conoterapia',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Spa%2Fspa8.jpg?alt=media&token=322b5da5-253e-43d0-8a19-49e1262b512d', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Esta técnica ayudará a limpiar tus oídos, lo que mejorará tu audición.

                    ¡Purifica tu oído y descubre todos los maravillosos sonidos de la región!
                </p>

            </div>
        ),
    },
];

export default function SpaPage() {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />
            <div style={styles.actividadesContainer}>
                <h2 style={styles.title}>Paquetes de Spa</h2>
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
}

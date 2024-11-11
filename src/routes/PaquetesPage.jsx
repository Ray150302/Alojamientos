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
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes1.jpg?alt=media&token=0ccfe0f3-433f-4316-ba04-84456ebb79dd', alt: 'Artesanía 1' },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Déjate consentir por este paquete pensado en ti. Relájate con un temazcal, tina de relajación, masaje y/o facial. Olvídate del estrés y comienza tu día relajado y sintiéndote bien contigo mismo.
                </p>
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
        title: 'Romance “Vive el amor“',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2FPaquetes2.jpg?alt=media&token=e00502a5-9a2f-4131-844a-e58ce9909e5a', alt: 'Aventura en Pareja' }, // Ajusta la URL de la imagen según sea necesario.
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Este paquete está pensado para disfrutarlo con la persona que amas. Ven y vive la aventura recorriendo nuestra región y déjate sorprender por nuestras cascadas, pozas y grutas. Además, puedes explorar una de las más hermosas zonas arqueológicas del Estado de Puebla: la Zona Arqueológica de Yohualichan.
                    <br /><br />
                    Termina tu recorrido disfrutando de nuestro servicio de temazcal y deja que tus sentidos se relajen.
                </p>
                <p style={styles.paragraph}><strong>Dirigido a:</strong> Parejas</p>
                <p style={styles.paragraph}><strong>Duración:</strong> 3 noches de hospedaje y 2 días y medio de actividades</p>
                <p style={styles.paragraph}><strong>Esfuerzo:</strong> Medio/Alto</p>
                <p style={styles.paragraph}><strong>Costo por pareja:</strong></p>
                <ul style={styles.list}>
                    <li style={styles.promotionItem}>Cabaña - <span style={styles.price}>$12,600.00</span></li>
                    <li style={styles.promotionItem}>Habitación - <span style={styles.price}>$11,720.00</span></li>
                </ul>

                <h3>Actividades</h3>
                <ul style={styles.list}>
                    <li><strong>Día 1:</strong> Comida en Tosepan Kali, ruta de ecotecnias y construcción alternativa, cena en Tosepan Kali.</li>
                    <li><strong>Día 2:</strong> Desayuno, recorrido por Gruta con Río La Garganta y Cañón Sagrado (nado en aguas cristalinas), visita a Poza Huella de Perro (nado), comida, temazcal, y cena en Tosepan Kali.</li>
                    <li><strong>Día 3:</strong> Desayuno, visita al Jardín Botánico, Zona Arqueológica de Yohualichan, Cascada Las Brisas (nado), comida, taller de café (tostado y molido), y cena en Tosepan Kali.</li>
                </ul>

                <h3>Servicios Incluidos</h3>
                <ul style={styles.list}>
                    <li>3 noches de hospedaje en cabaña</li>
                    <li>2 días de actividades</li>
                    <li>Alimentos incluidos (desayuno, comida y cena)</li>
                    <li>Servicio de guía especializado</li>
                    <li>Transporte local</li>
                    <li>Entrada a los atractivos turísticos</li>
                    <li>Servicio de temazcal</li>
                </ul>

                <p style={styles.paragraph}>
                    <strong>Nota:</strong> Se sugiere llevar zapatos cómodos, de ser posible antiderrapantes, para realizar la actividad de senderismo. También se recomienda llevar cambio de ropa para quienes deseen nadar, calzado adecuado para mojar, y repelente para mosquitos (preferiblemente orgánico).
                </p>
            </div>
        ),
    },
    {
        title: 'Agua “la esencia de lo natural”',
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes3.jpg?alt=media&token=f6ff165e-97d1-4172-a00c-3c04ab091480', alt: 'Aventura Natural en Cuetzalan' }, // Ajusta la URL de la imagen según sea necesario.
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Con este paquete, podrás disfrutar de los increíbles atractivos naturales que tiene Cuetzalan para ti. Nada en aguas cristalinas en nuestras pozas y cascadas, y recorre senderos naturales que te llevarán a ver atardeceres inolvidables.
                    <br /><br />
                    ¡Ven y déjate sorprender por la belleza de Cuetzalan!
                </p>
                <p style={styles.paragraph}><strong>Dirigido a:</strong> Parejas, familias y jóvenes</p>
                <p style={styles.paragraph}><strong>Duración:</strong> 2 noches de hospedaje y 1 día y medio de actividades</p>
                <p style={styles.paragraph}><strong>Paquete Mínimo:</strong> 2 personas</p>
                <p style={styles.paragraph}><strong>Esfuerzo:</strong> Alto</p>
                <p style={styles.paragraph}><strong>Costo por persona:</strong></p>
                <ul style={styles.list}>
                    <li style={styles.promotionItem}>Habitación - <span style={styles.price}>$4,250.00</span></li>
                    <li style={styles.promotionItem}>Cabaña - <span style={styles.price}>$4,600.00</span></li>
                    <li style={styles.promotionItem}>Hostal - <span style={styles.price}>$3,550.00</span></li>
                </ul>

                <h3>Actividades</h3>
                <ul style={styles.list}>
                    <li><strong>Día 1:</strong> Comida en Tosepan Kali, ruta de ecotecnias y construcción alternativa, cena en Tosepan Kali.</li>
                    <li><strong>Día 2:</strong> Desayuno, visita a Cascada Las Brisas (nado en aguas cristalinas), Cascadas Tres Caídas (nado), Poza Las Golondrinas (nado), recorrido en Gruta Los Corales, comida, fogata en el Hostal, cena en Tosepan Kali.</li>
                </ul>

                <h3>Servicios Incluidos</h3>
                <ul style={styles.list}>
                    <li>2 noches de hospedaje</li>
                    <li>Servicios de alimentos (desayuno, comida y cena)</li>
                    <li>Servicio de guía especializado</li>
                    <li>Transporte local</li>
                    <li>Entrada a los atractivos turísticos</li>
                </ul>

                <p style={styles.paragraph}>
                    <strong>Nota:</strong> Se sugiere llevar zapatos cómodos, de ser posible antiderrapantes, para realizar la actividad de senderismo. También se recomienda llevar cambio de ropa para quienes deseen nadar, calzado adecuado para mojar, y repelente para mosquitos (preferiblemente orgánico).
                </p>
            </div>
        ),
    },
    {
        title: "Naturaleza y cultura “experimentando Cuetzalan”",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes4.jpg?alt=media&token=955f884b-d887-4441-bead-fe5373a5f1a7', alt: 'Naturaleza y cultura en Cuetzalan' }, // Ajusta la URL de la imagen según sea necesario.
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Este paquete es idóneo para personas que les gusta disfrutar de la aventura y conocer, de una manera distinta, la cultura del lugar que visitan.
                    <br /><br />
                    ¡No te pierdas de esta gran experiencia, acompañado de uno de nuestros guías especializados!
                </p>
                <p style={styles.paragraph}><strong>Duración:</strong> 3 noches de hospedaje, 2 días y medio de actividades</p>
                <p style={styles.paragraph}><strong>Paquete Mínimo:</strong> 2 personas</p>
                <p style={styles.paragraph}><strong>Esfuerzo:</strong> Medio</p>

                <h3>Actividades</h3>
                <ul style={styles.list}>
                    <li><strong>Día 1:</strong> Comida en Tosepan Kali, ruta de ecotecnias y construcción alternativa, cena en Tosepan Kali.</li>
                    <li><strong>Día 2:</strong> Desayuno en Tosepan Kali, visita a la Gruta del Duende, Cascada El Salto, y Cascada Las Brisas (nado en aguas cristalinas), comida en Tosepan Kali, taller de café (tostado y molido), cena en Tosepan Kali.</li>
                    <li><strong>Día 3:</strong> Desayuno en Tosepan Kali, visita al Jardín Botánico, taller de algodón, visita a la Zona Arqueológica de Yohualichan, comida con TICOTENO, recorrido por el centro de Cuetzalan (“pueblo mágico”), cena en Tosepan Kali.</li>
                </ul>

                <h3>Servicios Incluidos</h3>
                <ul style={styles.list}>
                    <li>Alimentos incluidos (desayuno, comida y cena)</li>
                    <li>Servicio de guía especializado</li>
                    <li>Transporte local</li>
                    <li>Entrada a los atractivos turísticos</li>
                    <li>Talleres artesanales</li>
                </ul>

                <p style={styles.paragraph}>
                    <strong>Nota:</strong> Se sugiere llevar zapatos cómodos, de ser posible antiderrapantes, para realizar la actividad de senderismo. También se recomienda llevar cambio de ropa para quienes deseen nadar, calzado adecuado para mojar, y repelente para mosquitos (preferiblemente orgánico).
                </p>
            </div>
        ),
    },
    {
        title: "Conociendo Cuetzalan “un recorrido cultural”",
        images: [
            { src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes5.jpg?alt=media&token=3b791816-7833-400b-bfe5-9fc6e51a6077', alt: 'Recorrido cultural en Cuetzalan' }, // Ajusta la URL de la imagen según sea necesario.
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Para personas que les gusta descubrir la cultura, este paquete ofrece un tour guiado por el centro del pueblo mágico de Cuetzalan, su zona arqueológica y su jardín botánico donde podrás encontrar una gran cantidad de especies de orquídeas.
                    <br /><br />
                    Te enseñaremos cómo construir con semillas de la región aretes, pulseras y llaveros, además de mostrarte el proceso para el tostado y molido de café para que disfrutes de una rica taza de esta deliciosa bebida.
                </p>
                <p style={styles.paragraph}><strong>Duración:</strong> 2 noches de hospedaje, 1 día y medio de actividades</p>
                <p style={styles.paragraph}><strong>Paquete Mínimo:</strong> 2 personas</p>
                <p style={styles.paragraph}><strong>Esfuerzo:</strong> Mínimo</p>

                <h3>Actividades</h3>
                <ul style={styles.list}>
                    <li><strong>Día 1:</strong> Comida en Tosepan Kali, recorrido por el centro de Cuetzalan (“pueblo mágico”), cena en Tosepan Kali.</li>
                    <li><strong>Día 2:</strong> Desayuno en Tosepan Kali, recorrido por el Jardín Botánico, taller de hilado de algodón, visita a la Zona Arqueológica de Yohualichan, taller gastronómico (postre o atole), comida en una TICOTENO, taller de café (tostado y molido), temazcal, cena en Tosepan Kali.</li>
                </ul>

                <h3>Servicios Incluidos</h3>
                <ul style={styles.list}>
                    <li>Servicios de alimentos (desayuno, comida y cena)</li>
                    <li>Transporte local</li>
                    <li>Servicio de guía especializado</li>
                    <li>Entrada a los atractivos turísticos</li>
                    <li>Talleres artesanales</li>
                </ul>

                <p style={styles.paragraph}>
                    <strong>Nota:</strong> Se sugiere llevar zapatos cómodos, de ser posible antiderrapantes, para realizar la actividad de senderismo.
                </p>
            </div>
        ),
    },
    {
        title: 'Corazón “Caminata del amor”',
        images: [
            {
                src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes6.jpg?alt=media&token=e65b4a0d-08f9-4ce4-9101-5b40c4e4deca',
                alt: 'Caminata romántica en la naturaleza'
            },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Si quieres disfrutar de los atractivos que tiene la región con tu pareja, pero no cuentas con mucho tiempo, este paquete es para ti.
                    <br /><br />
                    Pensado para parejas que les gusta la naturaleza y vivir momentos increíbles, este paquete te llevará por cascadas y bosques de bambú y helechos en donde podrás observar impresionantes vistas naturales en sólo 1 día.
                    <br /><br />
                    Disfruta de una caminata tranquila, pero inolvidable, en un entorno único.
                </p>
                <p style={styles.paragraph}><strong>Dirigido a:</strong> Parejas</p>
                <p style={styles.paragraph}><strong>Duración:</strong> 1 día de actividades</p>
                <p style={styles.paragraph}><strong>Esfuerzo:</strong> Bajo/Medio</p>
                <p style={styles.paragraph}><strong>Costo por pareja:</strong></p>
                <ul style={styles.list}>
                    <li style={styles.promotionItem}>Caminata guiada - <span style={styles.price}>$2,000.00</span></li>
                </ul>

                <h3>Actividades</h3>
                <ul style={styles.list}>
                    <li><strong>Recorrido:</strong> Caminata por senderos naturales, visita a Cascada del Amor, descanso en el bosque de bambú y helechos.</li>
                </ul>

                <h3>Servicios Incluidos</h3>
                <ul style={styles.list}>
                    <li>Caminata guiada</li>
                    <li>Transporte local</li>
                    <li>Alimentos incluidos (desayuno y comida)</li>
                    <li>Entrada a los atractivos turísticos</li>
                </ul>

                <p style={styles.paragraph}>
                    <strong>Nota:</strong> Se recomienda llevar ropa cómoda, calzado adecuado para senderismo y repelente para mosquitos (preferiblemente orgánico).
                </p>
            </div>
        ),
    },
    {
        title: 'En armonía con la naturaleza',
        images: [
            {
                src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes7.jpg?alt=media&token=1db6469f-c8d5-4f16-9d33-0048fee13240',
                alt: 'Experiencia ecoturística en Cuetzalan'
            },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    Experimenta la belleza natural y cultural de Cuetzalan. ¡Disfruta de experiencias inigualables y vive nuevas formas de ver al mundo!
                </p>
                <p style={styles.paragraph}><strong>Dirigido a:</strong> Grupos mínimos de 10 personas</p>
                <p style={styles.paragraph}><strong>Duración:</strong> 3 días de actividades y 3 noches de hospedaje</p>
                <p style={styles.paragraph}><strong>Esfuerzo:</strong> Medio</p>
                <p style={styles.paragraph}><strong>Costo por definir:</strong></p>
                <ul style={styles.list}>
                    <li style={styles.promotionItem}>Paquete completo - <span style={styles.price}>Por definir</span></li>
                </ul>

                <h3>Actividades</h3>
                <ul style={styles.list}>
                    <li><strong>Día 1 “Tosepan Tonal”:</strong> Comida en las instalaciones de Tosepan Kali, ruta ecotecnias y construcción alternativa, cena en las instalaciones de Tosepan Kali.</li>
                    <li><strong>Día 2 “Cultivando nuestro futuro”:</strong> Desayuno, plática sobre el KUOJTAKILOYAN, visita al Jardín Botánico, visita a vivero de la cooperativa, práctica productiva por escoger (experiencia comunitaria de la miel, canela, piloncillo o chocolate), comida en la comunidad, plenaria de experiencias, cena en Tosepan Kali.</li>
                    <li><strong>Día 3 “Belleza natural y cultural de Cuetzalan”:</strong> Desayuno, visita a las cascadas Las Brisas y Las Tres Caídas, visita a la gruta Los Caracoles, recorrido por el centro de Cuetzalan, comida en Tosepan Kali.</li>
                </ul>

                <h3>Servicios Incluidos</h3>
                <ul style={styles.list}>
                    <li>Hospedaje en Tosepan Kali</li>
                    <li>Transporte local</li>
                    <li>Alimentos incluidos (desayuno, comida y cena)</li>
                    <li>Entrada a los atractivos turísticos</li>
                </ul>

                <p style={styles.paragraph}>
                    <strong>Nota:</strong> Este paquete puede adaptarse según las necesidades de cada grupo.
                </p>
                <p style={styles.paragraph}>
                    <strong>Recomendaciones:</strong> Llevar zapatos cómodos, preferentemente antiderrapantes para la actividad de senderismo, un cambio de ropa para quienes deseen nadar y calzado adecuado para mojarse. Es necesario llevar repelente para mosquitos, preferentemente orgánico.
                </p>
            </div>
        ),
    },
    {
        title: 'Sabores Maseual',
        images: [
            {
                src: 'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Paquetes%2Fpaquetes8.jpg?alt=media&token=0abdf1f2-6f3f-4469-b3bf-b775975a2f10',
                alt: 'Sabores únicos de la gastronomía maseual'
            },
        ],
        text: (
            <div style={styles.actividadText}>
                <p style={styles.paragraph}>
                    ¡Experimenta los sabores únicos de la gastronomía maseual!
                    Todos los productos que se utilizan en la preparación de nuestras comidas son productos locales. Provienen de la milpa, los kaltsintan (huertos familiares) y cafetales orgánicos.
                    ¡No te pierdas de esta experiencia gastronómica que deleitara tus sentidos!
                    Además, nuestro salón café cuenta con paneles solares, un sistema de captación de agua de lluvias y tratamiento para aguas negras y jabonosas.                </p>
            </div>
        ),
    },
];

export default function PaquetesPage() {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />
            <div style={styles.actividadesContainer}>
                <h2 style={styles.title}>Paquetes de Actividades</h2>
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

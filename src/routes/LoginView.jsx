import Header from "../components/header"; // Importa el componente Header
import MisionVision from "../components/MisionVision"; // Importa el componente MisionVision
import AboutUs from "../components/AboutUs"; // Importa el componente AboutUs
import ImageCarousel from "../components/ImageCarousel"; // Importa el componente ImageCarousel
import Footer from "../components/footer"; // Importa el componente Footer
import ReservaBusqueda from "../components/ReservaBuscador"; // Importa el componente ReservaBusqueda

const images = [
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel1.jpg?alt=media&token=2a90b20e-43f6-4b26-acfb-f56d45bc4c91',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel2.jpg?alt=media&token=cb7eee0a-f605-4efe-8a66-eb0f49458e72',
    'https://firebasestorage.googleapis.com/v0/b/alojamientospue.appspot.com/o/Carrusel%2Fcarrusel3.jpg?alt=media&token=e47508ee-9e8d-4cba-80a1-addfb000baef',
];

export default function LoginView() {
    return (
        <div>
            <Header />
            <ImageCarousel images={images} />
            <div id="reserva-buscador">
                <ReservaBusqueda />
            </div>
            <AboutUs />
            <div id="mision-vision">
                <MisionVision />
            </div>
            <Footer />
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

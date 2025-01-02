import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Services from "./components/Services";
// import Clients from "./components/Clients";

function App() {
  return (
    <div className="container">
      <div className="title">
        {/* <h3>RAIZA AVILES INC</h3>
        <h1> Refleja el éxito que has alcanzado </h1>
        <p>PRODUCIMOS EL CONTENIDO AUTÉNTICO E IMPACTANTE QUE NECESITA TU MARCA PERSONAL</p> */}
      </div>
      <button>Reserva tu reunión gratis</button>
      <Services />
      <div style={{backgroundColor: "var(--secondary-contrast-color)"}}>
      <h2>PUEDES NECESITARNOS</h2>
      <div className="container_1">
        <div className="imageContainer">
          <img src="/assets/images/img_1.jpg" />
        </div>
        <div className="textContainer">
          <h2>Si...</h2>
          <li>Tus redes no reflejan la calidad de tu servicio o producto</li>
          <li>No se entiende lo que vendes</li>
          <li>No logras que te perciban como autoridad en tu nicho.</li>
          <li>No sabes como llevar a cabo todas las ideas que tienes.</li>
        </div>
      </div>
      <div className="container_2">
        <img src="/assets/images/img_2.jpg" />
        <div className="textContainer">
          <h2>Y deseas</h2>
          <li>Verte como un referente y/o autoridad</li>
          <li>Producción de video</li>
          <li>Post-producción</li>
          <li>Creación de contenido para redes sociales</li>
        </div>
      </div>
      <h3>Conoce como puedo ayudarte</h3>
      </div>
      <h3>¿Tienes mas dudas?</h3>
      <button>Hablemos</button>
      <h2>CONFIAN EN NOSOTROS</h2>
      <Carousel />
      {/* <Clients /> */}
      <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+tus+servicios">
        <button>Contáctanos</button>
      </a>
      <Footer />
      </div>
  );
}

export default App;

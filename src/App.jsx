import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Services from "./components/Services";
// import Clients from "./components/Clients";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1> Refleja el éxito que has alcanzado con contenido auténtico e impactante </h1>
        <p>Tu marca tiene una historia que contar, ideamos y producimos el material audiovisual que necesitas para conectar con tu audiencia.</p>
        <button>Reserva tu reunión gratis</button>
      </div>
      <Services />
      <h2>SOMOS TU EQUIPO IDEAL</h2>
      <div className="container_1">
        <div className="imageContainer">
          <img src="/assets/images/img_1.png" />
        </div>
        <div className="textContainer">
          <ul>Tus redes</ul>
          <li>Tus redes no reflejan la calidad de tu servicio o producto</li>
          <li>No se entiende lo que vendes</li>
          <li>No logras que te perciban como autoridad en tu nicho.</li>
          <li>No sabes como llevar a cabo todas las ideas que tienes.</li>
        </div>
      </div>
      <div className="container_2">
        <img src="/assets/images/img_2.png" />
        <div className="textContainer">
          <ul>Y deseas</ul>
          <li>Verte como un referente y/o autoridad</li>
          <li>Producción de video</li>
          <li>Post-producción</li>
          <li>Creación de contenido para redes sociales</li>
        </div>
      </div>
      <h3>Conoce como puedo ayudarte</h3>
      <button>Agenda tu reunion Gratiuta de Diagnostico</button>
      <h2>CONFIAN EN NOSOTROS</h2>
      <Carousel />
      {/* confian en nosotros */}
      {/* <Clients /> */}
      <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+tus+servicios">
        <button>Contáctanos</button>
      </a>
      <Footer />
      </div>
  );
}

export default App;

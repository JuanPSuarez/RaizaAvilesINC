import "./App.css";
import ClientLogoGrid from "./components/ClientLogoGrid";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Title from "./components/Title";
import ServiceNeeds from "./components/ServiceNeeds";
// import Clients from "./components/Clients";

function App() {
  return (
    <div className="container">
      <Title />
      <button>Reserva tu reunión gratis</button>
      <Services />
      <button>Agenda tu reunion</button>
      <ServiceNeeds />
      <h3>¿Tienes mas dudas?</h3>
      <button>Hablemos</button>
      <h2>CONFIAN EN NOSOTROS</h2>
      <ClientLogoGrid />
      {/* <Clients /> */}
      <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+tus+servicios">
        <button>Contáctanos</button>
      </a>
      <Footer />
    </div>
  );
}

export default App;

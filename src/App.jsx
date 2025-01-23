import "./App.css";
import ClientLogoGrid from "./components/ClientLogoGrid";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Title from "./components/Title";
import ServiceNeeds from "./components/ServiceNeeds";
import Testimony from "./components/Testimony";
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
const ga4id = import.meta.env.VITE_MEASUREMENT_ID
function App() {

  const analytics = Analytics({
    app: 'RaizaAvilesINC',
    plugins: [
      googleAnalytics({
        measurementIds: [ga4id]
      })
    ]
  })
  analytics.page()
  return (
    <div className="container">
      <Title />
      <a href="https://calendly.com/raizaavilesinc">
        <button>Reserva tu reunión gratis</button>
        </a>
      <Services />
      <a href="https://calendly.com/raizaavilesinc">
        <button>Reserva tu reunión</button>
        </a>
      <ServiceNeeds />
      <Testimony />
      <ClientLogoGrid />
      <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+tus+servicios">
        <button>Contáctanos</button>
      </a>
      <Footer />
    </div>
  );
}

export default App;

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
    <div className="App">
      <Title />
      <div className="container">
        <Services />
        <ServiceNeeds />
        <Testimony />
        <ClientLogoGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;

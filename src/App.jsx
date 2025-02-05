import "./App.css";

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import Title from "./components/Title";
import Services from "./components/Services";
import ServiceNeeds from "./components/ServiceNeeds";
import Testimony from "./components/Testimony";
import ClientLogoGrid from "./components/ClientLogoGrid";
import Bio from "./components/Bio";
import Footer from "./components/Footer";

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
      <Services />
      <div className="container">
        <ServiceNeeds />
        <Testimony />
        <ClientLogoGrid />
        <Bio />
      </div>
      <Footer />
    </div>
  );
}

export default App;

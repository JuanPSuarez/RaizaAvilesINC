import HeroImage from "./HeroImage";
import "./ServiceNeeds.css";

const ServiceNeeds = () => (
    <div className="serviceNeeds">
        <HeroImage
            imageUrl="/assets/images/img_1.jpg" alt="service needs, raiza aviles"
        />
        <h2>SI TE PASA QUE:</h2>
        <ul>
            <li>Tus redes no reflejan la calidad de tu servicio o producto</li>
            <li>No logras que te perciban como autoridad en tu nicho.</li>
            <li>No sabes como llevar a cabo todas las ideas que tienes</li>
            <li>No tienes tiempo para crear contenido</li>
        </ul>
        <img src="/assets/images/img_2.jpg" alt="service needs, raiza aviles" />
        <h2>Y DESEAS:</h2>
        <ul>
            <li>Verte como un referente en tu nicho</li>
            <li>Delegar para escalar</li>
            <li>Aumentar tu credibidilidad</li>
            <li>Elevar el valor percibido de tu marca.</li>
            <h2>ENTONCES ESTE SERVICIO ES PARA TI</h2>
        </ul>
        <a href="https://calendly.com/raizaavilesinc">
            <button>Agendar llamada</button>
        </a>
    </div>

);

export default ServiceNeeds;
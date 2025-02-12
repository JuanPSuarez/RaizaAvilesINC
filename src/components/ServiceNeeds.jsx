import HeroImage from "./HeroImage";
import "./ServiceNeeds.css";

const ServiceNeeds = () => (
    <div className="serviceNeeds">
        <HeroImage
            imageUrl="/assets/images/img_1.jpg"
        />
        <h2>SI TE PASA QUE:</h2>
        <li>Tus redes no reflejan la calidad de tu servicio o producto</li>
        <li>No logras que te perciban como autoridad en tu nicho.</li>
        <li>No sabes como llevar a cabo todas las ideas que tienes</li>
        <li>No tienes tiempo para crear contenido</li>
        <img src="/assets/images/img_2.png" />
        <h2>Y DESEAS:</h2>
        <li>Verte como un referente en tu nicho</li>
        <li>Delegar para escalar</li>
        <li>Aumentar tu credibidilidad</li>
        <li>Elevar el valor percibido de tu marca.</li>
        <h2>ENTONCES ESTE SERVICIO ES PARA TI</h2>
        <a href="https://calendly.com/raizaavilesinc">
            <button>Agendar llamada</button>
        </a>
    </div>

);

export default ServiceNeeds;
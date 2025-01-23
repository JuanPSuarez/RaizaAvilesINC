import "./ServiceNeeds.css";

const ServiceNeeds = () => (
    <div className="serviceNeeds">
        {/* <h2>PUEDES NECESITARNOS</h2> */}
        <div className="container_1">
            <div className="imageContainer">
                <img src="/assets/images/img_1.jpg" />
            </div>
            <div className="textContainer">
                <h2>SI TE PASA QUE:</h2>
                <li>Tus redes no reflejan la calidad de tu servicio o producto</li>
                <li>No logras que te perciban como autoridad en tu nicho.</li>
                <li>No sabes como llevar a cabo todas las ideas que tienes</li>
                <li>No tienes tiempo para crear contenido</li>
            </div>
        </div>
        <div className="container_2">
            <div className="imageContainer">
                <img src="/assets/images/img_2.jpg" />
            </div>
            <div className="textContainer">
                <h2>Y DESEAS:</h2>
                <li>Verte como un referente en tu nicho</li>
                <li>Delegar para escalar</li>
                <li>Aumentar tu credibidilidad</li>
                <li>Elevar tu valor percibido</li>
            </div>
        </div>
        <h2>ENTONCES SOMOS LA AGENCIA PARA TI</h2>
        <h3>Agenda una llamada gratuita de diagnostico</h3>
        <a href="https://calendly.com/raizaavilesinc">
            <button>Agendar llamada</button>
        </a>
    </div>

);

export default ServiceNeeds;
import "./ServiceNeeds.css";

const ServiceNeeds = () => (
    <div className="serviceNeeds">
        <h2>PUEDES NECESITARNOS</h2>
        <div className="container_1">
            <div className="imageContainer">
                <img src="/assets/images/img_1.png" />
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

);

export default ServiceNeeds;
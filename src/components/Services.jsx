import "./Services.css";
import PropTypes from "prop-types";
import publicationsData from "../data/services.json";
import HeroImage from "./HeroImage";

// Publication component
const Publication = ({ title, subtitle, imageSrc, text, buttonText }) => (
    <div className="service-item">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <img src={imageSrc} alt={title || subtitle || "Image"} />
        <p>{text}</p>
        {buttonText && <button>{buttonText}</button>}
    </div>
);

Publication.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageSrc: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
};

// Services component
const Services = () => {
    return (
        <div className="services">
            <div className="principal-services">
                <div>
                    <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Focus+Proyect">
                        <div>
                            <h1>Focus Project</h1>
                            <p>
                                Eleva el <strong>valor percibido</strong> de tu <strong>marca personal</strong> sin perder tiempo. En solo 3 días, tendrás contenido para todo el mes.
                            </p>
                        </div>
                    </a>
                </div>
                <hr />
                <div>
                    <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Cobertura+de+Eventos">
                        <div>
                            <h1>Cobertura Eventos</h1>
                            <p>Para líderes y mentores que desean <strong>capturar el impacto</strong> de sus eventos. Aportar <strong>valor</strong> a su comunidad y <strong>promocionar</strong> sus próximos encuentros.</p>
                        </div>
                    </a>
                </div>
                <hr />
                <div>
                    <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Marca+Personal">
                        <div>
                            <h1>Fotografía</h1>
                            <p>Producción <strong>estrategica</strong> de <strong>fotos</strong> para marca personal.</p>
                        </div>
                    </a>
                </div>
            </div>
            <HeroImage />
            {publicationsData.map((publication, index) => (
                <Publication
                    key={index}
                    title={publication.h1}
                    subtitle={publication.h2}
                    imageSrc={publication.img}
                    text={publication.p}
                    buttonText={publication.button}
                />
            ))}
            <a href="https://calendly.com/raizaavilesinc">
                <button>Reserva tu reunión</button>
            </a>
        </div>

    );
}
export default Services;

import "./Services.css";
import PropTypes from "prop-types";
import publicationsData from "../data/services.json";

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
                <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Focus+Proyect">
                    <div>
                        <h1>Focus Project</h1>
                        <p><strong>Eleva el valor percibido de tu marca personal sin perder tiempo</strong> con solo 3 dias tendras contenido para todo el mes.</p>
                    </div>
                </a>
<hr />
                <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Cobertura+de+Eventos">
                    <div>
                        <h1>Cobertura Eventos</h1>
                        <p>Para líderes y mentores que desean capturar el impacto de sus eventos. Podrás otorgar valor a tu comunidad y promocionar tus eventos.</p>
                    </div>

                </a>
                <hr />

                <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Marca+Personal">
                    <div>
                        <h1>Fotografía</h1>
                        <p>Producciones <strong>estrategicas</strong> para tu <strong>marca personal</strong>.</p>
                    </div>
                </a>
            </div>
            <img className="raiza-img-0" src="/assets/images/img_0.jpg" alt="" />
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
        </div>
    );
}
export default Services;

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
        <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Focus+Proyect">
        <h1>Focus Proyect</h1>
        <p>Para empresas que buscan consolidar su presencia en el mercado con contenido que no solo comunica, sino que también conecta. Ya tienes un gran equipo, solo necesitas mayor visibilidad y lograr el RECONOCIMIENTO DE TU MARCA.</p>
        </a>
        <p>➖</p>
        <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Cobertura+de+Eventos">
        <h1>Cobertura Eventos</h1>
        <p>Para líderes y mentores que desean capturar el impacto de sus eventos, te ofrezco una cobertura integral que documenta cada momento clave, desde charlas inspiradoras hasta dinámicas de networking. Con este contenido podrás otorgar valor a tu comunidad y promocionar tus eventos.</p>
        </a>
        <p>➖</p>
        <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+Marca+Personal">
        <h1>Marca Personal</h1>
        <p>Si estás comenzando a construir tu presencia en redes sociales y aún no estás lista para externalizar todo el proceso, mis asesorías son la solución perfecta. Tendrás un manual de marca que te servirá de guía a la hora de generar contenido y conectar con tu audiencia</p>
        </a>
        <p>➖</p>
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

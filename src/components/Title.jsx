import "./Title.css";

const Title = () => (
    <div className="title">
        <div className="background">
            <h3>RAIZA AVILES INC</h3>
            <div className="heroTitle">
                <h1>Refleja el éxito que has alcanzado</h1>
                <p>PRODUCIMOS EL CONTENIDO AUTÉNTICO E IMPACTANTE QUE NECESITA TU MARCA PERSONAL</p>
                <img src="/assets/images/bg_0.gif  " alt="hero" />
            </div>
            <a href="https://calendly.com/raizaavilesinc">
                <button>Reserva tu reunión gratis</button>
                {/* un pelin mas arriba el boton */}
            </a>
        </div>
    </div>
);

export default Title;

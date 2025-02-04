import "./Footer.css";
const Footer = () => (
    <div className="footerContainer">
        <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+tus+servicios">
            <button>Contáctanos</button>
        </a>
        <footer>
            <div className="footericons">
                <a href="https://www.facebook.com/raizaavilesinc">
                    <img src="/assets/icons/icon_1.png" />
                </a>
                <a href="https://www.instagram.com/raizaaviles.inc">
                    <img src="/assets/icons/icon_2.png" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B543517872051">
                    <img src="/assets/icons/icon_3.png" />
                </a>
                <a href="youtube.com/raizaavilesinc">
                    <img src="/assets/icons/icon_4.png" />
                </a>
                <a href="tiktok.com/@raizaavilesinc">
                    <img src="/assets/icons/icon_5.png" />
                </a>
            </div>
            <p>© 2024 Raiza Aviles Inc.</p>
            <p>Todos los derechos reservados</p>
        </footer>
    </div>
);

export default Footer;
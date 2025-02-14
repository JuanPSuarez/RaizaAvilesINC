import "./Footer.css";
const Footer = () => (
    <div className="footerContainer">
        <a href="https://api.whatsapp.com/send?phone=5493517872051&text=¡Hola!+quiero+saber+mas+sobre+tus+servicios">
            <button>Contáctanos</button>
        </a>
        <footer>
            <div className="footericons">
                <a href="https://www.facebook.com/raizaavilesinc">
                    <img src="/assets/icons/icon_1.png" alt="facebook logo" />
                </a>
                <a href="https://www.instagram.com/raizaaviles.inc">
                    <img src="/assets/icons/icon_2.png" alt="instagram logo" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B543517872051">
                    <img src="/assets/icons/icon_3.png" alt="whatsapp logo" />
                </a>
                <a href="https://www.youtube.com/@raizaavilesinc">
                    <img src="/assets/icons/icon_4.png" alt="youtube logo" />
                </a>
                <a href="https://www.tiktok.com/@raiza_aviles?_t=ZM-8tqAagKGrRe&_r=1">
                    <img src="/assets/icons/icon_5.png" alt="tiktok logo" />
                </a>
            </div>
            <p>© {new Date().getFullYear()} Raiza Aviles Inc.</p>
            <p>Todos los derechos reservados</p>
        </footer>
    </div>
);

export default Footer;
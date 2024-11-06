import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const images = [
    "/assets/logos/logo_1.png",
    "/assets/logos/logo_2.png",
    "/assets/logos/logo_3.png",
    "/assets/logos/logo_4.png",
    "/assets/logos/logo_5.png",
    "/assets/logos/logo_6.png",
  ];
  return (
    <div className="container">
    <div className="title">
      <h1> Refleja el éxito que has alcanzado con contenido auténtico e impactante </h1>
      <p>Tu marca tiene una historia que contar, ideamos y producimos el material audiovisual que necesitas para conectar con tu audiencia.</p>
      <button>Reserva tu reunión gratis</button>
      </div>
      <h2>SOMOS TU EQUIPO IDEAL</h2>
      <div className="container_1">
        <div className="imageContainer">
          <img src="/assets/images/img_1.png" /> 
        </div>

        <div className="textContainer">
          <ul>Tus redes</ul>
          <li>Tus redes no reflejan la calidad de tu servicio o producto</li>
          <li>No se entiende lo que vendes</li>
          <li>No logras que te perciban como autoridad en tu nicho.</li>
          <li>No sabes como llevar a cabo todas las ideas que tienes.</li>
        </div>

      </div>
      <div className="container_2">
        <img src="/assets/images/img_2.png" /> 
        <div className="textContainer">
        <ul>Y deseas</ul>
        <li>Verte como un referente y/o autoridad</li>
        <li>Producción de video</li>
        <li>Post-producción</li>
        <li>Creación de contenido para redes sociales</li>
        </div>
      </div>
      <h3>Conoce como puedo ayudarte</h3>
      <button>Agenda tu reunion Gratiuta de Diagnostico</button>
      <h1>Creacion de contenido</h1>
      <img src="/assets/images/img_3.png" />
      <p>Para empresas que buscan consolidar su presencia en el mercado con contenido que no solo comunica, sino que también conecta.
      Ya tienes un gran equipo, solo necesitas mayor visibilidad.y lograr el RECONOCIMIENTO DE TU MARCA</p>
      <button>Sesión Gratuita de Diagnóstico</button>
      <h1>Asesorias de Creacion de Contenido</h1>
      <img src="/assets/images/img_4.png" />
      <p>Si estás comenzando a construir tu presencia en redes sociales y aún no estás lista para externalizar todo el proceso, mis asesorías son la solución perfecta. Tendras un manual de marca que te servirá de guia a la hora de generar contenido y conectar con tu audiencia.</p>
      <button>Quiero una Asesoria</button>
      <h1>Cobertura de Eventos Corporativos</h1>
      <img src="/assets/images/img_5.png" />
      <p>Para líderes y mentores que desean capturar el impacto de sus eventos, te ofrezco una cobertura integral que documenta cada momento clave, desde charlas inspiradoras hasta dinámicas de networking.
      Con este contenido podrás otorgar valor a tu comunidad y promocionar tus eventos.</p>
      <button>Escribeme por Whatsapp</button>
      <h1>¿Cómo ES trabajar conmigo?</h1>
      <h2>Exploración Integral</h2>
      <p>Inicio con un análisis profundo de tu marca para entender a fondo tu negocio.</p>
      <img src="/assets/images/img_6.png" />
      <h2>Desarrollo de Estrategia de Contenidos</h2>
      <p>Con mi equipo creamos una Estrategia de Contenidos utilizando un storytelling poderoso que resuena con tu audiencia</p>
      <img src="/assets/images/img_7.png" />
      <h2>Producción Audiovisual de Impacto</h2>
      <p>Junto con mi equipo nos encargamos de llevar tu mensaje a un nuevo nivel. En nuestros espacios o en tu oficina grabamos todas las piezas de contenido y te las entregamos listas para publicar.</p>
      <img src="/assets/images/img_8.png" />
      <h2>Calendario de Contenidos</h2>
      <p>Si prefieres delegar la gestión de tus redes y darle vida a tu marca con contenido auténtico y bien planificado, asegurando que siempre estés presente y conectado con tu audiencia.</p>
      <img src="/assets/images/img_9.png" />
      <h2>CONFIAN EN NOSOTROS</h2>
      <Carousel images={images} />
      <h2>NUESTROS CLIENTES DICEN</h2>
      {/* a card carrousel with picture, name and experience as a client */}
      <div className="carrousel">
        <div className="card">
          <img src="/assets/images/img_13.png" />
          <h3>Nombre 1</h3>
          <p>Raiza es una excelente profesional con todas las letras mi negocio ha crecido exponencialmente</p>
        </div>
        <div className="card">
          <img src="/assets/images/img_14.png" />
          <h3>Nombre</h3>
          <p>Raiza es una excelente profesional con todas las letras mi negocio ha crecido exponencialmente</p>
        </div>
        <div className="card">
          <img src="/assets/images/img_15.png" />
          <h3>Nombre</h3>
          <p>Raiza es una excelente profesional con todas las letras mi negocio ha crecido exponencialmente</p>
        </div>
      </div>
      <button>Contáctanos</button>
      <footer>
        <div className="footericons">
          <img src="/assets/icons/icon_1.png" />
          <img src="/assets/icons/icon_2.png" />
          <img src="/assets/icons/icon_3.png" />
          <img src="/assets/icons/icon_4.png" />
        </div>
        <p>© 2024 Raiza Aviles Inc.</p>
        <p>Todos los derechos reservados</p>
      </footer>
      </div>
  );
}

export default App;

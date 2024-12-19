import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/logos/logo_1.png",
    "/assets/logos/logo_2.png",
    "/assets/logos/logo_3.png",
    "/assets/logos/logo_4.png",
    "/assets/logos/logo_5.png",
    "/assets/logos/logo_6.png",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="carrousel">
      {images.map((src, index) => (
        <div
          className="box"
          key={index}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <img src={src} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
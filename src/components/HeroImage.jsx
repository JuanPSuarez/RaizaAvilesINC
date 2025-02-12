import "./HeroImage.css";
import PropTypes from "prop-types";

export default function HeroImage({ imageUrl = "./assets/images/img_0.jpg" }) {
    return (
        <div className="hero-img">
            <div className="hero-img-container">
                <img className="img-hero" src={imageUrl} alt="Raiza Aviles Image" />
            </div>
        </div>
    );
}

HeroImage.propTypes = {
    imageUrl: PropTypes.string,
};

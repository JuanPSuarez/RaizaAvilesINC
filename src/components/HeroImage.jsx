import "./HeroImage.css";
import PropTypes from "prop-types";

HeroImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};
HeroImage.defaultProps = {
    imageUrl: "./assets/images/img_0.jpg",
};
export default function HeroImage( {imageUrl} ) {

    return (
        <div className="hero-img">
            <div className="hero-img-container">
                <img className="img-hero" src={imageUrl} alt="" />
            </div>
        </div>
    );
}
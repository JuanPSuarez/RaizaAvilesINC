import "./Testimony.css";
import PropTypes from "prop-types";
import testimonyData from "../data/testimony.json";
import { useState } from "react";

const TestimonyItem = ({ name, img, text }) => (
    <div className="testimony-outter-container">
        <div className="testimony-inner-container">
            <h2>{name}</h2>
            <div className="testimony-img-container">
                <img src={img} alt={name} />
                <p>{text}</p>
            </div>
        </div>
    </div>
);

TestimonyItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    text: PropTypes.string,
};

function Testimony() {
    const [currentTestimony, setCurrentTestimony] = useState(0);

    const handleNext = () => {
        setCurrentTestimony((prev) => (prev === testimonyData.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentTestimony((prev) => (prev === 0 ? testimonyData.length - 1 : prev - 1));
    };

    return (
        <div>
            <h1>NUESTROS CLIENTES DICEN</h1>
            <div className="testimony-component-container">
                <input
                    type="button" value="⬅"
                    className="buttonTestimony"
                    onClick={handlePrev}
                />
                <TestimonyItem
                    key={testimonyData[currentTestimony].name}
                    name={testimonyData[currentTestimony].name}
                    img={testimonyData[currentTestimony].img}
                    text={testimonyData[currentTestimony].text}
                />
                <input
                    type="button" value="➡"
                    className="buttonTestimony"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}

export default Testimony;
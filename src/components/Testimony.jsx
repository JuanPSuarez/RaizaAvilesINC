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
    return (
        <div>
            <h1>NUESTROS CLIENTES DICEN</h1>
            <div className="testimony-component-container">
                <button
                    onClick={() => setCurrentTestimony((prev) => prev + 1)}
                    disabled={currentTestimony === testimonyData.length - 1}
                >⏪</button>
                <TestimonyItem
                    key={testimonyData[currentTestimony]}
                    name={testimonyData[currentTestimony].name}
                    img={testimonyData[currentTestimony].img}
                    text={testimonyData[currentTestimony].text}
                />
                <button
                    onClick={() => setCurrentTestimony((prev) => prev - 1)}
                    disabled={currentTestimony === 0}
                >⏩</button>
            </div>
        </div>
    );
}

export default Testimony;
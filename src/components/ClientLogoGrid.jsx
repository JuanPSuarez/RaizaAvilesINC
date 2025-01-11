import './ClientLogoGrid.css';
import { useState, useEffect } from 'react';

const ClientLogoGrid = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const loadLogos = () => {
      const logoList = [];
      const totalLogos = 10; 

      for (let i = 1; i <= totalLogos; i++) {
        logoList.push(`/assets/logos/Logo_${i}.png`); // Update the naming pattern if necessary
      }

      setLogos(logoList);
    };

    loadLogos();
  }, []);

  return (
    <div className="gridContainer">
      {logos.map((logo, index) => (
        <div key={index} className='logoContainer'>
          <img src={logo} alt={`Client logo ${index}`} className='logo' />
        </div>
      ))}
    </div>
  );
};


export default ClientLogoGrid;

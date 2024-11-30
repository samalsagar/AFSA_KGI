import React from 'react';
import './Loader.css';  // Import the CSS file
import logo from '../../assets/AFSALOGO.png';  // Your logo

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="pulse rounded-full">
        <img src={logo} alt="Logo" className="logo rounded-full" />
      </div>
    </div>
  );
};

export default Loader;

import React from 'react';
import './Loader.css';  // Import the CSS file
import logo from '../../assets/AFSALOGO.png';  // Your logo

const Loader = () => {
  return (
    <div className="loader-container flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-custom-blue animate-spin"></div>
      </div>
      {/* Optional: Add a logo if you'd like */}
      <div className="absolute flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
    </div>
  );
};

export default Loader;

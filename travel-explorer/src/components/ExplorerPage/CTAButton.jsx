import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CTAButton = ({ to, label, className= "bg-red-700 hover:bg-red-300" }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Function to update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define responsive button size and padding based on screen size
  const isMobile = screenSize < 640;
  const isTablet = screenSize >= 640 && screenSize < 1024;
  const isDesktop = screenSize >= 1024;

  // Button padding and font size adjustments based on screen size
  const buttonClasses = `${isMobile ? 'px-3 py-2 text-sm' : 
                          isTablet ? 'px-4 py-2 text-base' : 
                          'px-5 py-3 text-lg'} text-white rounded-lg transition-colors duration-300 ${className}`;

  return (
    <Link to={to}>
      <button className={buttonClasses}>
        {label}
      </button>
    </Link>
  );
};

CTAButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CTAButton;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Section = ({ title, children, className }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Function to update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = screenSize < 640;
  const isTablet = screenSize >= 640 && screenSize < 1024;
  const isDesktop = screenSize >= 1024;

  return (
    <div
      className={`text-center py-6 ${className} ${
        isMobile ? "px-4" : isTablet ? "px-8" : "px-12"
      }`}
    >
      <p
        className={`text-2xl font-bold mb-4 ${
          isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl"
        }`}
      >
        {title}
      </p>
      <div
        className={`${
          isMobile ? "text-sm" : isTablet ? "text-white" : "text-lg"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CTAButton = ({ to, label, className = "bg-green-600 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-green-300" }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Define breakpoints for responsiveness
    const isMobile = screenSize < 640;
    const isTablet = screenSize >= 640 && screenSize < 1024;
    const isDesktop = screenSize >= 1024;

    // Customize button styles based on screen size
    const buttonClassName = `${className} ${isMobile ? "py-1 px-4 text-sm" : isTablet ? "py-2 px-5" : "py-2 px-6 text-lg"}`;

    return (
        <Link to={to}>
            <button className={buttonClassName}>{label}</button>
        </Link>
    );
};

CTAButton.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default CTAButton;

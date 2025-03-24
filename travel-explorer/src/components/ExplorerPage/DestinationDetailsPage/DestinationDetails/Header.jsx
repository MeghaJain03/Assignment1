import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = ({ title, className = "text-[#2C7A7B] font-bold mb-8 text-center" }) => {
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

    // Adjust the text size based on screen size
    const headerClassName = `text-green-600 ${className} ${isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl"}`;

    return <div className={headerClassName}>{title}</div>;
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Header;

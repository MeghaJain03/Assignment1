import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
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

    // Adjust the class names based on screen size
    const titleClassName = `${isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl"} font-semibold text-green-600`;
    const contentClassName = `${isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg"} leading-6 text-gray-700`;

    return (
        <div className="space-y-4 text-base">
            <h2 className={titleClassName}>{title}</h2>
            <div className={contentClassName}>{children}</div>
            <hr className="my-4" />
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;

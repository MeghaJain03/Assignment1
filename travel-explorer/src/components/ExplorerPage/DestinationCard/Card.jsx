import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons

const Card = ({ title, image, link }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isFavorite, setIsFavorite] = useState(false); // State for favorite icon

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define breakpoints for screen sizes
  const isMobile = screenSize < 640;
  const isTablet = screenSize >= 640 && screenSize < 1024;
  const isDesktop = screenSize >= 1024;

  return (
    <div
      className={`${
        isMobile ? "w-64 h-64" : isTablet ? "w-72 h-72" : "w-80 h-82"
      } bg-green-600 rounded-lg shadow-lg flex flex-col items-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out relative`}
    >
      {/* Favorite Icon */}
      <button
        className="absolute bottom-3 right-3 text-2xl"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <FaHeart className={isFavorite ? "text-red-700" : "text-white"} />
      </button>

      {image && <img src={image} alt={title} className="h-48 w-full object-cover" />}
      <div
        className={`text-center p-3 hover:bg-green-200 w-full ${
          isMobile ? "p-2" : isTablet ? "p-3" : "p-4"
        }`}
      >
        <h3
          className={`${
            isMobile ? "text-lg" : isTablet ? "text-xl" : "text-2xl"
          } text-white font-bold hover:text-black`}
        >
          {title}
        </h3>
        <Link
          to={link || "#"}
          className="text-white font-bold text-2xl mt-2 inline-block hover:text-black"
        >
          &#8594;
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Card;

import React, { useState, useEffect } from "react";
import Card from "./Card";
import { cardData } from "./cardData";

const DestinationCard = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

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
      className={`flex flex-wrap gap-5 justify-center bg-gray-100 p-5 text-base ${
        isDesktop ? "lg:px-40" : "px-4"
      }`}
    >
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default DestinationCard;

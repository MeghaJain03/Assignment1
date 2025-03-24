import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard/DestinationCard";
import Section from "./Section";

const Explorer = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  

  // Function to update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  return (
    <div className="text-center py-10 px-5 bg-gray-100 mb-10 text-black">
      {/* Heading Section */}
      <Section title="Where do you want to go?">
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Destination Cards */}
        <div className="text-center py-10 px-5 bg-gray-100 mb-10">
          <DestinationCard  />
        </div>

      </Section>
    </div>
  );
};

export default Explorer;

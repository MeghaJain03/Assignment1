import React, { useState, useEffect } from "react";
import Section from "./Section.jsx";
import Header from "./Header.jsx";
import CTAButton from "./CTAButton.jsx";

const Trek7 = () => {
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

  const sections = [
    {
      content: "Discover the enchanting Mount Sumel Trek, where you'll wander through the picturesque Aravalli Range. Take in the stunning views of Kanota Dam below. Get lost in the beauty of nature as you hike up this lovely trail. Reach new heights and make unforgettable memories in the heart of the Aravallis",
    },
    {
      content: (
        <ul className="list-disc pl-8">
          <li><strong className="text-green-600">Name:</strong> Mount Sumel Trek Jaipur</li>
          <li><strong className="text-green-600">Trek Difficulty: </strong> Moderate</li>
          <li><strong className="text-green-600">Trek Completion Time: </strong> 3-4 hours</li>
          <li><strong className="text-green-600">Trek Fee: </strong> 199/-</li>
        </ul>
      ),
    },
  ];

  return (
    <div className={`bg-white ${isMobile ? "px-6 py-6" : isTablet ? "px-10 py-8" : "px-16 py-10"}`}>
      <Header title="Mount Sumel Trek" />
      {sections.map((section, index) => (
        <Section key={index}>
          {section.content}
        </Section>
      ))}
      <Section title="">
        <CTAButton to="" label="Book Now" />
      </Section>
    </div>
  );
};

export default Trek7;

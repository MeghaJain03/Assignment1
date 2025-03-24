import React, { useState, useEffect } from "react";
import Section from "./Section.jsx";
import Header from "./Header.jsx";
import CTAButton from "./CTAButton.jsx";

const Trek5 = () => {
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
      content: "Embark on the unforgettable Twin Tower trek, where nature's splendor awaits! Ascend the majestic Aravalli ranges and be rewarded with a breathtaking view of Sisodia Rani Bagh from the summit. Along the journey, be mesmerized by the lush green Aravallis, revealing their beauty like never before. An adventure that blends tranquility and awe-inspiring sights, the Twin Tower trek promises an experience to cherish forever.",
    },
    {
      content: (
        <ul className="list-disc pl-8">
          <li><strong className="text-green-600">Name:</strong> Twin Tower Trek Jaipur</li>
          <li><strong className="text-green-600">Trek Difficulty: </strong> Moderate</li>
          <li><strong className="text-green-600">Trek Completion Time: </strong> 3-4 hours</li>
          <li><strong className="text-green-600">Trek Fee: </strong> 199/-</li>
        </ul>
      ),
    },
  ];

  return (
    <div className={`bg-white ${isMobile ? "px-6 py-6" : isTablet ? "px-10 py-8" : "px-16 py-10"}`}>
      <Header title="Twin Tower Trek" />
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

export default Trek5;

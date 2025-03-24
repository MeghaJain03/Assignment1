import React, { useState, useEffect } from "react";
import Section from "./Section.jsx";
import Header from "./Header.jsx";
import CTAButton from "./CTAButton.jsx";

const Trek4 = () => {
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
      content: "Join Trekking Mantra as we lead a thrilling Trek to Achrol Fort in Jaipur. Embark on a memorable journey with fellow hikers, exploring the rich history of the fort, immersing in local culture, and relishing panoramic views of the Aravalli Range. Note - Personal Vehicle is Mandatory as the distance from the meeting point to the starting point will be of 35 Km.",
    },
    {
      content: (
        <ul className="list-disc pl-8">
          <li><strong className="text-green-600">Name:</strong> Achrol Fort trek Jaipur</li>
          <li><strong className="text-green-600">Trek Difficulty: </strong> Moderate</li>
          <li><strong className="text-green-600">Trek Completion Time: </strong> 4-5 hours</li>
          <li><strong className="text-green-600">Trek Fee: </strong> 199/-</li>
        </ul>
      ),
    },
  ];

  return (
    <div className={`bg-white ${isMobile ? "px-6 py-6" : isTablet ? "px-10 py-8" : "px-16 py-10"}`}>
      <Header title="Achrol Fort trek" />
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

export default Trek4;

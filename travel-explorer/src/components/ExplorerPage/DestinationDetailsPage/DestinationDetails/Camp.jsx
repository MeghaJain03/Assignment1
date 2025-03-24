import React, { useState, useEffect } from "react";
import Section from "./Section.jsx";
import Header from "./Header.jsx";
import CTAButton from "./CTAButton.jsx";

const Camp = () => {
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
      content: "Welcome to Trekking Mantra Camp Gunawata, where nature's beauty meets adventure! Our campsite offers an array of thrilling activities, including horseback riding, air rifle shooting, archery, and refreshing dips in our pool. After a day of excitement, relax in cozy tent stays under the starlit sky. Indulge in delicious, locally sourced meals, ensuring a taste of authenticity with every bite. Whether you're seeking adrenaline-pumping adventures or tranquil moments amidst nature, our campsite has something for everyone. Come join us for an unforgettable experience in the heart of Gunawata's breathtaking landscapes.",
    },
    {
      content: (
        <ul className="list-disc pl-8">
          <li><strong className="text-green-600">Location:</strong> Trekking Mantra Campsite, Gunawata, Jaipur</li>
          <li><strong className="text-green-600">Date:</strong>15th March to 16th March 2025</li>
          <li><strong className="text-green-600">Time: </strong> Saturday 4 PM To Sunday 11 AM</li>
          <li><strong className="text-green-600">Itinerary: </strong> <ul className="list-disc pl-8">
                <li>Arrival Time [4:00 PM]</li>
                <li> Welcome drink upon arrival</li>
                <li>Small Fun Introduction</li>
                <li>Air rifle shooting</li>
                <li>Stargazing in the evening</li>
                <li>Pool party with rain dance (7 To 8:30 PM)</li>
                <li>Camp stay</li>
                <li>Dinner provided</li>
                <li>Special Fun Games(Archery, tug of war, cricket, turn ball, UNO, badminton and many more)</li>
                <li>Bonfire</li>
                <li>Open Air cinema</li>
                <li>Morning Trekking (5:30 AM Sunday)</li>
                <li>Healthy breakfast (Campsite)</li>
                <li>Pool party with rain dance (9 to 10 AM ) Sunday Morning</li>
            </ul></li>
            <li><strong>Charges: </strong>1199/- PP (Triple sharing Camp)</li>
            <li><strong>         </strong>1399/- PP ( Couple Special )</li>
        </ul>
      ),
    },
  ];

  return (
    <div className={`bg-white ${isMobile ? "px-6 py-6" : isTablet ? "px-10 py-8" : "px-16 py-10"}`}>
      <Header title="Pre Registation for Trekking Mantra Camping" />
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

export default Camp;

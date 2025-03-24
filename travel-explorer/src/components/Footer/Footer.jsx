import React from "react";
import { Link } from "react-router-dom";

const FooterLinkList = ({ title, links }) => (
  <div className="mt-6 sm:mt-0">
    <strong className="text-white block mb-2">{title}</strong>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to} className="text-white hover:text-black">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const socialMediaIcons = [
    { src: "/Assets/ytube.png", alt: "YouTube" },
    { src: "/Assets/github.png", alt: "GitHub" },
    { src: "/Assets/ig.png", alt: "Instagram" },
    { src: "/Assets/linkedin.png", alt: "LinkedIn" },
    { src: "/Assets/fb.png", alt: "Facebook" },
  ];

  const quickLinks = [
    { label: "Trekking", to: "" },
    { label: "Camping", to: "" },
  ];

  const actionLinks = [
    { label: "Submit Feedback", to: "" },
    { label: "Terms and Conditions", to: "" },
    { label: "Privacy Policy", to: "" },
    { label: "Pricing", to: "" },
    { label: "Refund and Cancellation Policy", to: "" },
    { label: "Return Policy", to: "" },
    { label: "Shipping Policy", to: "" },
  ];

  

  return (
    <footer className="bg-green-600 py-8 px-6 sm:px-16 text-base text-white">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:justify-between">
        {/* Left Section */}
        <div className="flex flex-col items-start sm:items-start mb-6 sm:mb-0">
          <img src="" alt="Logo" className="w-40 h-16 border" />
          <p className="mt-2 text-white">&copy; Trekking Mantra</p>
          <div className="flex space-x-4 mt-4">
            {socialMediaIcons.map((icon, index) => (
              <button key={index} className="p-2">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-5 h-5 cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FooterLinkList title="Adventures" links={quickLinks} />
          <FooterLinkList title="Quick Links" links={actionLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

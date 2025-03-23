import React from "react";
import { Link } from "react-router-dom";

const FooterLinkList = ({ title, links }) => (
  <div className="mt-6 sm:mt-0">
    <strong className="text-gray-800 block mb-2">{title}</strong>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to} className="text-gray-600 hover:text-teal-600">
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
    { label: "Home", to: "/work" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Reveiws", to: "/reviews"},
  ];

  const actionLinks = [
    { label: "Find a Therapist", to: "/therapist" },
    { label: "Request an Appointment", to: "/appointment" },
    { label: "Find My Location", to: "/location" },
    { label: "For Therapist", to: "/forTherapist" },
  ];

  const supportLinks = [
    { label: "Donate Us", to: "/donate" },
    { label: "Terms and Conditions", to: "/termsConditions" },
    { label: "Privacy Policy", to: "/privacyPolicy" },
    { label: "Refund Policy", to: "/refundPolicy" },
  ];

  return (
    <footer className="bg-teal-50 py-8 px-6 sm:px-16 text-base">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:justify-between">
        {/* Left Section */}
        <div className="flex flex-col items-start sm:items-start mb-6 sm:mb-0">
          <img src="/Assets/logo5.png" alt="Logo" className="w-40 h-16" />
          <p className="mt-2 text-gray-600">&copy; 2024 Freudia India Pvt. Ltd.</p>
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
          <FooterLinkList title="Quick Links" links={quickLinks} />
          <FooterLinkList title="I Want to:" links={actionLinks} />
          <FooterLinkList title="Support" links={supportLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

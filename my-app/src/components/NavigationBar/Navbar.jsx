import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Find a Therapist", to: "/therapist" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Groups", to: "/groups" },
  { label: "Premium", to: "/premium" },
  { label: "Business", to: "/business" },
  { label: "Programs", to: "/programs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-gradient-to-r from-cyan-200 via-gray-100 to-yellow-100 w-full z-50 shadow-md text-base">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Section */}
        <Link to="/work">
          <img
            src="/Assets/logo5.png"
            alt="Freudia Logo"
            className="w-36 h-auto"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="block lg:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-cyan-200 via-gray-100 to-yellow-100 lg:bg-transparent shadow-md lg:shadow-none lg:py-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 p-4 lg:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="block py-2 px-4 text-gray-800 hover:text-teal-700"
                  onClick={handleLinkClick} // Close menu when a link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition"
                onClick={handleLinkClick} // Close menu when login is clicked
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

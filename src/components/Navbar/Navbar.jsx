import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section logic
      const scrollPosition = window.scrollY + 200; // adjust offset if needed
      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll when clicking
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[999] transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#102aef]">&lt;</span>
          <span className="text-white">Shruti</span>
          <span className="text-[#102aef]">/</span>
          <span className="text-white">Mohanty</span>
          <span className="text-[#102aef]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#102aef] ${
                activeSection === item.id ? "text-[#102aef]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/shruti-mohanty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#102aef]"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shrutim-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#102aef]"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              aria-label="Close menu"
              className="text-3xl text-[#102aef] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              aria-label="Open menu"
              className="text-3xl text-[#102aef] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-[999] rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#102aef]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/shruti-mohanty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shrutim-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

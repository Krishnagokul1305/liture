"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "../assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "About Us", href: "about" },
    { id: 3, name: "Opportunities", href: "opportunities" },
    { id: 4, name: "Memberships", href: "membership" },
    { id: 5, name: "Contact Us", href: "contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white border-b shadow-sm"
            : "bg-transparent border-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="EduTech Logo"
                  className={`h-14 w-auto transition-all duration-300`}
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.href)}
                  className={`relative font-medium cursor-pointer hover:text-primary transition-colors duration-300
                  ${scrolled ? "text-gray-900 " : "text-white"}
                  after:pointer-events-none after:absolute after:-bottom-[2px] after:left-1/2
                  after:h-[2px] after:w-0 after:bg-primary
                  after:transition-all after:duration-300
                  hover:after:w-full hover:after:left-0`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Button
                className={`rounded-full hidden md:block transition-all duration-300 bg-primary text-white`}
              >
                Contact Us
              </Button>

              {/* Mobile Toggle */}
              <button
                className={`md:hidden p-2 rounded-full transition-colors duration-200
                ${scrolled ? "text-gray-900" : "text-white"}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300
        ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl
          transform transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 p-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.href)}
                    className="w-full text-left px-4 py-4 text-lg font-medium
                    hover:bg-gray-100 transition-all duration-200 transform hover:translate-x-2"
                    style={{
                      animation: isMenuOpen
                        ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t">
              <Button className="w-full rounded-lg py-5">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;

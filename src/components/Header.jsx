"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "../assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Products", href: "#" },
    { id: 3, name: "Categories", href: "#" },
    { id: 4, name: "About", href: "#" },
    { id: 5, name: "Contact", href: "#" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed w-full border-b top-0 z-50 bg-white/80  backdrop-blur-md  transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="EduTech Logo"
                  className="h-14 w-auto object-contain"
                />
              </a>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  href="#"
                  class="relative text-sm font-medium hover:text-primary inline-block cursor-pointer  
         transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]
          focus:text-white
         after:pointer-events-none after:absolute after:-bottom-[2px] after:left-1/2
         after:h-[2px] after:w-0 after:bg-primary
         after:transition-all after:duration-[400ms]
         after:ease-[cubic-bezier(0.25,0.8,0.25,1)]
         hover:after:w-full hover:after:left-0
         focus:after:w-full focus:after:left-0"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="rounded-full hidden md:block">
                Contact Us
              </Button>

              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
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

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
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

        {/* Menu panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={toggleMenu}
                    className="block px-4 py-4 rounded-lg text-lg font-medium hover:bg-accent transition-all duration-200 transform hover:translate-x-2"
                    style={{
                      animation: isMenuOpen
                        ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t">
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
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

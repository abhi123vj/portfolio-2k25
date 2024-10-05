"use client";
import { RiCloseCircleFill, RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import { menu } from "framer-motion/client";
import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLintClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">Abhiram S</a>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { id: 1, href: "#work", label: "Work" },
            { id: 2, href: "#about", label: "About" },
            { id: 3, href: "#experience", label: "Experience" },
            { id: 4, href: "#testimonials", label: "Testimonials" },
            { id: 5, href: "#contact", label: "Contact" },
          ].map(({ href, label, id }) => (
            <a
              href={href}
              key={id}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          {[
            { id: 1, href: "#work", label: "Work" },
            { id: 2, href: "#about", label: "About" },
            { id: 3, href: "#experience", label: "Experience" },
            { id: 4, href: "#testimonials", label: "Testimonials" },
            { id: 5, href: "#contact", label: "Contact" },
          ].map(({ href, label, id }) => (
            <a
              href={href}
              key={id}
              className="text-white hover:text-stone-400 transition duration-300"
              onClick={handleLintClick}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

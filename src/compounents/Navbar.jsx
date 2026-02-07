import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ theme, setTheme }) => {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Media", path: "/media" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-40 flex justify-center mt-4">
      <div
        className="flex items-center p-2 bg-[#250843cc] rounded-full space-x-4 relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/SYVAIRO_logo.png"
            alt="Logo"
            className="w-24 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <AnimatePresence>
          {hovered && (
            <>
              <motion.ul
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center space-x-6 text-white font-medium overflow-hidden"
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-accent cursor-pointer">
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </motion.ul>
              
            </>
          )}
        </AnimatePresence>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white cursor-pointer relative"
          ref={menuRef}
        >
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <HiOutlineX size={30} />
            ) : (
              <HiOutlineMenu size={30} />
            )}
          </button>

          {/* Dropdown below the icon */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full -right-5 mt-2
bg-[#250843cc] rounded-xl overflow-hidden
flex flex-col items-center space-y-3 py-3
text-white font-medium min-w-[140px] shadow-lg"
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-accent">
                    <Link to={item.path} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Light/Dark Mode Button */}
      </div>
    </div>
  );
};

export default Navbar;

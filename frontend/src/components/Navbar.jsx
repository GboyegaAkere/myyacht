import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-3 left-0 w-full z-20"
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 
        bg-white/20 rounded-full shadow-sm h-12"
      >
        {/* Logo */}
        <h1 className="text-lg font-semibold text-white drop-shadow">
          EQUINOX YACHTS
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA button (desktop only) */}
        <button className="hidden md:block px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200">
          Book a Free Call
        </button>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-600 rounded-lg shadow-lg mx-4 mt-1 p-6 space-y-4 text-center"
          >
            <a
              href="#home"
              className="block text-white text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-white text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200">
              Book a Free Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

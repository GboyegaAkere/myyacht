import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-3 left-0 w-full z-50"
    >
      <div
        className={`max-w-7xl mx-4 md:mx-auto flex items-center justify-between px-6 py-3 
        rounded-full shadow-sm h-12 transition-all duration-300 
        ${
          scrolled
            ? "bg-white text-black backdrop-blur-md"
            : "bg-white/20 backdrop-blur-md text-white"
        }`}
      >
        {/* Logo */}
        <h1 className="text-lg font-semibold drop-shadow">
          EQUINOX YACHTS
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-gray-400">
            FAQ
            </a>
          </li>
        </ul>

        {/* CTA button (desktop only) */}
        <a
  href="tel:+16393804955"
  className="hidden md:block px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800"
>
  Book a Free Call
</a>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
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
            className="md:hidden bg-gray-800 rounded-lg shadow-lg mx-4 mt-2 p-6 space-y-4 text-center text-white"
          >
            <a
              href="#home"
              className="block text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

             <a
              href="#faq"
              className="block text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <button className="w-full px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800">
              Book a Free Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

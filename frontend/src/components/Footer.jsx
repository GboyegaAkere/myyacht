/** @format */
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        {/* About */}
        <div className="md:w-1/3">
          <h2 className="text-white text-xl font-semibold mb-4">Equinox Yachts</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experience luxury on the open sea. We provide bespoke yacht charters
            and unforgettable voyages across the Mediterranean, Caribbean, and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#fleet" className="hover:text-white transition">Our Fleet</a></li>
            <li><a href="#voyages" className="hover:text-white transition">Previous Voyages</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@equinox.com</li>
            <li>Phone: +1(639)380-4955</li>
            <li>Marina Bay, Miami, FL</li>
          </ul>
          {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Equinox Yachts. All Rights Reserved.
      </div>
    </footer>
  );
}

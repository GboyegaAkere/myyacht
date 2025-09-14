/** @format */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import look from "../images/in.jpg";
import inn from "../images/inn.jpg";
import inside from "../images/inside.jpg";
import innn from "../images/inse.jpg";

const works = [
  { id: 1, image: look, alt: "Luxury Yacht at Sea" },
  { id: 2, image: inn, alt: "Private Yacht Lounge" },
  { id: 3, image: innn, alt: "Exclusive Marina Experience" },
  { id: 4, image: inside, alt: "Exclusive Marina Experience" },
];

export default function PreviousWork() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval); // cleanup
  }, [current]);

  return (
    <section id="fleet" className="bg-white py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Our Current Fleet
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-3 gap-6 px-6">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            className="overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={work.image}
              alt={work.alt}
              className="w-full h-64 object-cover rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="relative md:hidden w-full max-w-md mx-auto px-6">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={works[current].image}
            alt={works[current].alt}
            className="w-full h-64 object-cover rounded-xl"
          />
        </motion.div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import a from "../images/fi (1).jpg"
import b from "../images/fi (2).jpg"
import c from "../images/fi (3).jpg"
import d from "../images/fi (4).jpg"
import e from "../images/fi (5).jpg"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const yachts = [
  {
    id: 1,
    name: "Luxury Yacht Model A",
    price: "$2,500,000",
    image: a,
    description: "A top-tier luxury yacht offering unmatched elegance, speed, and comfort on the seas."
  },
  {
    id: 2,
    name: "Sport Yacht Model B",
    price: "$1,200,000",
    image: b,
    description: "A sleek and modern sport yacht designed for adventure and style."
  },
  {
    id: 3,
    name: "Explorer Yacht Model C",
    price: "$3,800,000",
    image:e,
    description: "Built for long voyages, this explorer yacht combines durability with ultimate comfort."
  },
  {
    id: 4,
    name: "Classic Yacht Model D",
    price: "$950,000",
    image:d,
    description: "A timeless classic yacht with elegant interiors and sophisticated craftsmanship."
  },
];

const WhatWeSell = () => {
  const [selectedYacht, setSelectedYacht] = useState(null);
  const brokerNumber = "+12345678900"; // Replace with your actual number

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      {/* Heading and description */}
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Explore Yachts for Sale
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">Equinox Yachts</span>, we connect
          you with world-class vessels designed for elegance, performance, and
          comfort. Browse our collection of luxury yachts, each crafted to
          deliver unmatched experiences on the water.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
        {yachts.map((yacht, index) => (
          <motion.div
            key={yacht.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden h-[220px] md:h-[300px] w-full cursor-pointer"
            onClick={() => setSelectedYacht(yacht)}
          >
            <img
              src={yacht.image}
              alt={yacht.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/20 text-white text-sm md:text-base font-medium px-4 py-2 rounded-full backdrop-blur-md">
                {yacht.name} — {yacht.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedYacht && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedYacht(null)} // Close when backdrop is clicked
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg w-[90%] max-w-lg sm:w-full p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedYacht(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

              {/* Yacht Image */}
              <img
                src={selectedYacht.image}
                alt={selectedYacht.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              {/* Yacht Details */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedYacht.name}
              </h3>
              <p className="text-gray-600 mb-2">{selectedYacht.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Price: {selectedYacht.price}
              </p>

              {/* Contact Broker */}
              <a
                href={`tel:${brokerNumber}`}
                className="block w-full bg-gray-900 text-white text-center font-medium py-3 rounded-xl hover:bg-gray-700 transition"
              >
                Contact Our Broker
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatWeSell;

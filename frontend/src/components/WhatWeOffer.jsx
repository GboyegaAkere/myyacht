import { motion } from "framer-motion";




import look from "../images/in.jpg";
import inn from "../images/inn.jpg";
import inside from "../images/inside.jpg";
import innn from "../images/inse.jpg"

const WhatWeOffer = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      {/* Heading and description */}
    <div className="mb-8 max-w-3xl mx-auto text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
    What We Offer at Equinox Yachts
  </h2>
  <p className="text-gray-600 leading-relaxed">
    At <span className="font-semibold">Equinox Yachts</span>, we go
    beyond sailing — we deliver unforgettable journeys. From yacht
    management and custom charters to premium interiors and seamless
    docking, our services are designed to bring you peace of mind and
    world-class luxury on the water.
  </p>
</div>

      {/* Layout */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
        {/* Left large card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden h-[260px] md:h-[420px] w-full"
        >
          <img
            src={innn}
            alt="Luxury Yacht Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/20 text-white text-sm md:text-base font-medium px-4 py-2 rounded-full backdrop-blur-md">
              Luxury Yacht Management
            </span>
          </div>
        </motion.div>

        {/* Right side column */}
        <div className="flex flex-col gap-6">
          {/* Top medium card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden h-[200px] md:h-[220px] w-full"
          >
            <img
              src={look}
              alt="Custom Charter Experiences"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-md">
                Custom Charter Experiences
              </span>
            </div>
          </motion.div>

          {/* Bottom two cards explicitly */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            {/* First bottom card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden h-[180px] md:h-[190px] w-full"
            >
              <img
                src={inside}
                alt="On-Time Docking & Delivery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full backdrop-blur-md">
                  On-Time Docking & Delivery
                </span>
              </div>
            </motion.div>

            {/* Second bottom card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden h-[180px] md:h-[190px] w-full"
            >
              <img
                src={inn}
                alt="Premium Interiors & Comfort"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full backdrop-blur-md">
                  Premium Interiors & Comfort
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

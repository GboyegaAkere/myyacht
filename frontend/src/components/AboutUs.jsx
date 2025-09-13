import { motion } from "framer-motion";
import aboutImg from "../images/yatt.jpg"; // replace with your yacht image

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={aboutImg}
            alt="Equinox Yachts"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
  About Us
</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold">Equinox Yachts</span>, we
            redefine luxury at sea. From world-class yacht management and
            tailored charters to premium interiors and seamless docking, we
            craft experiences that blend innovation, comfort, and elegance.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our mission is simple: to transform your vision of yachting into
            reality — delivering unforgettable journeys across the world’s most
            stunning waters.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-700 text-white rounded-full font-medium shadow-md hover:bg-blue-800 transition"
          >
            Book a Free Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

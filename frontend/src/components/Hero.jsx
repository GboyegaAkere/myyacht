import { motion } from "framer-motion";
import Navbar from "./Navbar";



import yatch from "../images/yatt.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={yatch}
          alt="Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navbar on top of Hero */}
      <Navbar />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl text-white mt-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
         Where Luxury Meets Nautical Perfection
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          From concept to open waters, luxury yachting tailored to your journey.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-lg shadow-lg hover:bg-gray-200">
           Get in touch with us
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

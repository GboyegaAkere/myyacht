import { motion } from "framer-motion";
import aboutImg from "../images/yatt.jpg"; // replace with your yacht image

const AboutUs = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-16">
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
  At <span className="font-semibold">Equinox Yachts</span>, we redefine luxury
  at sea. Since <span className="font-semibold">2010</span>, we have been at
  the forefront of delivering exceptional yachting experiences, combining
  world-class yacht management, tailored charters, premium interiors, and
  seamless docking solutions. Every detail is designed to blend innovation,
  comfort, and elegance.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
  Beyond unforgettable voyages, we also specialize in the buying and selling
  of yachts. Whether you’re a first-time buyer, an experienced owner upgrading
  to a new class of vessel, or an investor seeking opportunities in the global
  market, our team provides expert advice and trusted brokerage services. We
  connect clients to an exclusive portfolio of yachts, ensuring every purchase
  or sale is handled with precision, discretion, and transparency.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
  From assisting with valuations, negotiations, and documentation to offering
  insights on the latest industry trends, we are committed to making yacht
  ownership seamless and rewarding. Our extensive network of shipbuilders,
  designers, and international partners allows us to source and deliver the
  most distinguished vessels, tailored to your exact preferences.
</p>

<p className="text-gray-600 leading-relaxed mb-8">
  Our mission is simple: to transform your vision of yachting into reality —
  whether through luxury charters, exclusive ownership, or strategic resale —
  delivering unforgettable journeys and investment opportunities across the
  world’s most stunning waters.
</p>

          <motion.a
          id="contact"
            href="tel:+16393804955"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-700 text-white text-center rounded-full font-medium shadow-md hover:bg-blue-800 transition"
          >
            Book a Free Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

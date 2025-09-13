import { motion } from "framer-motion";

const SocialBar = () => {
  const partners = [
    { name: "Rolex", color: "#005B2E" },
    { name: "Louis Vuitton", color: "#4E3629" },
    { name: "Ritz-Carlton", color: "#002147" },
    { name: "Bentley", color: "#2C2C2C" },
    { name: "NetJets", color: "#6D6E71" },
    { name: "Moët & Chandon", color: "#D4AF37" },
    { name: "Emirates Airlines", color: "#D71920" },
    { name: "Cartier", color: "#B31B1B" },
    { name: "Montblanc", color: "#000000" },
    { name: "Sunseeker", color: "#003B5C" },
    { name: "Four Seasons", color: "#556B2F" },
    { name: "BMW", color: "#0066B1" },
    { name: "Omega", color: "#C8102E" },
    { name: "Patek Philippe", color: "#704214" },
    { name: "Virgin Voyages", color: "#E60026" },
  ];

  // Duplicate list so it loops seamlessly
  const loopPartners = [...partners, ...partners];

  return (
    <section className="w-full bg-white px-5 md:px-15 py-6">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-wide">
        OUR PARTNERS
      </h2>

      {/* Scrolling bar */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25, // adjust speed
            ease: "linear",
          }}
        >
          {loopPartners.map((partner, index) => (
            <span
              key={index}
              style={{ color: partner.color }}
              className="text-lg font-semibold"
            >
              {partner.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialBar;

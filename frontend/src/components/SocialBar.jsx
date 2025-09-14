import { motion } from "framer-motion";

// Example logos — update paths to match your assets
import rolex from "../images/rolex.png";
import louisVuitton from "../images/luiz.jpg";
import ritz from "../images/ritz.png";
import bentley from "../images/bet.png";
import netjets from "../images/net.png";
import moet from "../images/moet.png";
import emirates from "../images/emirate.png";
import cartier from "../images/cat.jpg";
// import montblanc from "../assets/logos/montblanc.png";
// import sunseeker from "../assets/logos/sunseeker.png";
// import fourSeasons from "../assets/logos/fourseasons.png";
// import bmw from "../assets/logos/bmw.png";
// import omega from "../assets/logos/omega.png";
// import patek from "../assets/logos/patek.png";
// import virgin from "../assets/logos/virgin.png";

const SocialBar = () => {
  const partners = [
    { name: "Rolex", logo: rolex },
    { name: "Louis Vuitton", logo: louisVuitton },
    { name: "Ritz-Carlton", logo: ritz },
    { name: "Bentley", logo: bentley },
    { name: "NetJets", logo: netjets },
    { name: "Moët & Chandon", logo: moet },
    { name: "Emirates Airlines", logo: emirates },
    { name: "Cartier", logo: cartier },
    // { name: "Montblanc", logo: montblanc },
    // { name: "Sunseeker", logo: sunseeker },
    // { name: "Four Seasons", logo: fourSeasons },
    // { name: "BMW", logo: bmw },
    // { name: "Omega", logo: omega },
    // { name: "Patek Philippe", logo: patek },
    // { name: "Virgin Voyages", logo: virgin },
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
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-10 md:h-14 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialBar;

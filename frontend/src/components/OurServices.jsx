import { FaShip, FaWater, FaCompass } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaShip className="text-2xl text-white" />,
      title: "Luxury Yacht Management",
      desc: "Comprehensive management solutions to keep your yacht in pristine condition, hassle-free.",
    },
    {
      icon: <FaWater className="text-2xl text-white" />,
      title: "Custom Charter Experiences",
      desc: "Tailored voyages that blend comfort, adventure, and world-class luxury on the open sea.",
    },
    {
      icon: <FaCompass className="text-2xl text-white" />,
      title: "Yacht Styling & Upgrades",
      desc: "Premium refurbishments and styling to ensure your yacht is always modern, elegant, and unique.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      {/* Section Heading */}
    {/* Section Heading */}
<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10 bg-gray-100 px-5 py-2 rounded-full shadow-sm mx-auto text-center w-fit">
  Our Services
</h2>


      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            {/* Icon with circle background */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 shadow-md">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;

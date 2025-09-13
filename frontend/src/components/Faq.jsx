/** @format */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How much do your yacht charter services cost?",
    answer:
      "Our pricing depends on the type of yacht, duration, and destination. We offer both day charters and extended voyages tailored to your needs.",
  },
  {
    question: "Do you provide catering and onboard staff?",
    answer:
      "Yes! Our charters come with professional crew and we can arrange fine dining, private chefs, and personalized services upon request.",
  },
  {
    question: "What’s the first step to booking a yacht?",
    answer:
      "The first step is to schedule a consultation with our team. We’ll discuss your preferences, itinerary, and help you choose the perfect yacht.",
  },
  {
    question: "Can I customize my yacht itinerary?",
    answer:
      "Absolutely! We specialize in creating personalized routes whether you want to explore hidden islands, vibrant nightlife, or serene coastlines.",
  },
  {
    question: "Are your yachts safe and insured?",
    answer:
      "Yes, all of our yachts are fully licensed, maintained to the highest standards, and come with comprehensive insurance coverage.",
  },
  {
    question: "Do you offer international yacht charters?",
    answer:
      "Yes, we provide charters across popular destinations worldwide including the Mediterranean, Caribbean, and beyond.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              {activeIndex === index ? (
                <FaMinus className="text-gray-600" />
              ) : (
                <FaPlus className="text-gray-600" />
              )}
            </div>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="mt-3 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

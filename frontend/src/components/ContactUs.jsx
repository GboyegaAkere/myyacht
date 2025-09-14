import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let’s Build Something Together
          </h2>
          <p className="text-gray-600 mb-8">
            Got a project in mind? Or just want to say hello? Fill out the form 
            and we’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>📍 123 Ocean Drive, Marina City</li>
            <li>📞 +234 800 123 4567</li>
            <li>✉️EQUINOXYACHTS@outlook.com</li>
          </ul>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;

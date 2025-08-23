import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-gray-900 text-white overflow-hidden">

      {/* Left Section - Contact Form */}
      <div className="lg:w-1/2 w-full p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-56 h-56 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />

        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="mb-10 text-lg lg:text-xl max-w-lg text-gray-300">
          Got a question or want to work together? Send us a message, and we’ll get back to you shortly.
        </p>

        <form className="space-y-6 bg-gray-800/30 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-700">
          {["Your Name", "Email Address", "Your Message"].map((placeholder, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              whileFocus={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              {placeholder === "Your Message" ? (
                <textarea
                  placeholder={placeholder}
                  className="w-full bg-gray-900/20 border-b border-gray-600 placeholder-gray-300 text-white py-3 px-4 rounded-lg h-40 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300 resize-none"
                />
              ) : (
                <input
                  type={placeholder === "Email Address" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full bg-gray-900/20 border-b border-gray-600 placeholder-gray-300 text-white py-3 px-4 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 shadow-xl shadow-pink-500/50"
          >
            Send Message
          </motion.button>
        </form>
      </div>

      {/* Right Section - Illustration */}
      <div className="lg:w-1/2 w-full flex items-center justify-center relative mt-10 lg:mt-0">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.07 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
            alt="Contact Illustration"
            className="max-w-md lg:max-w-lg h-auto drop-shadow-2xl rounded-3xl border-4 border-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500"
          />
        </motion.div>
      </div>
    </div>
  );
}

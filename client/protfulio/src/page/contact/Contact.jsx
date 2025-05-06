import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="mx-7">
      <div className="contact-form mt-16 flex flex-wrap justify-between items-center">
        {/* Form Section */}
        <motion.form
          className="w-full md:w-1/2 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get In Touch</h2>

          <motion.div
            className="flex flex-wrap -mx-2 space-y-4 md:space-y-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Last Name"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap -mx-2 space-y-4 md:space-y-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full md:w-1/2 px-2">
              <input
                type="email"
                className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="E-mail"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Phone"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <textarea
              rows="5"
              placeholder="Message"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <input
              type="submit"
              className="send-btn w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer"
              value="Send Message"
            />
          </motion.div>
        </motion.form>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <img
            src="/contact-png.png"
            alt="Contact"
            className="w-full md:w-4/5 max-w-xs rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

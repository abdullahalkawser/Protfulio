import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: '20-08-2019',
    icon: 'lni-cake',
    title: 'Birthday',
    description: 'Celebrated with friends and family, had an amazing time!',
    type: 'type1',
  },
  {
    date: '21-08-2019',
    icon: 'lni-burger',
    title: 'Lunch',
    description: 'Tried a new burger place downtown, it was delicious!',
    type: 'type2',
  },
  {
    date: '22-08-2019',
    icon: 'lni-slim',
    title: 'Exercise',
    description: 'Morning workout session with yoga and strength training.',
    type: 'type3',
  },
  {
    date: '23-08-2019',
    icon: 'lni-cake',
    title: 'Birthday Again!',
    description: 'Another cake, another celebration — lucky me!',
    type: 'type1',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Timeline of Events</h2>
        <p className="text-gray-500">A journey through memorable moments!</p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 z-0"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative z-10 flex flex-col md:flex-row items-center my-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Icon */}
            <div className="bg-yellow-400 text-white rounded-full p-4 shadow-md">
              <i className={`text-2xl ${item.icon}`}></i>
            </div>

            {/* Content Card */}
            <div
              className={`bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 mt-4 md:mt-0 ${
                index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
              }`}
            >
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

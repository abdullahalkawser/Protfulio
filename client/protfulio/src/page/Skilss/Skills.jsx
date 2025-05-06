import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    location: 'React, Tailwind, Firebase',
    description: 'A fully functional e-commerce app with cart, authentication, and payment integration.',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    location: 'Next.js, Framer Motion',
    description: 'Personal portfolio with dynamic sections, animations, and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593'
  },
  {
    id: 3,
    title: 'Food Delivery App',
    location: 'Flutter, Firebase',
    description: 'Cross-platform app for food ordering and real-time order tracking.',
    image: 'https://images.unsplash.com/photo-1574158622687-2ccfa32d3202'
  },
  {
    id: 4,
    title: 'Chat Application',
    location: 'Socket.io, Node.js, React',
    description: 'Real-time group chat with emojis, typing indicators and secure messaging.',
    image: 'https://images.unsplash.com/photo-1574158622687-2ccfa32d3202'
  }
];

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-b from-[#1f1f1f] to-[#121212] min-h-screen py-14 px-6 sm:px-20 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-96 h-50 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-300">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.location}</p>
              <p className="mt-3 text-gray-200">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

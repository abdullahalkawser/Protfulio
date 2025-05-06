import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCameraRetro, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const data = [
    {
      id: 1,
      name: 'Web Design',
      des: 'High-quality modern designs at a professional level.',
      img: <FaPaintBrush className="text-4xl text-indigo-400" />
    },
    {
      id: 2,
      name: 'Web Development',
      des: 'Building efficient websites with modern technologies.',
      img: <FaLaptopCode className="text-4xl text-indigo-400" />
    },
    {
      id: 3,
      name: 'Mobile Apps',
      des: 'Modern and responsive mobile applications.',
      img: <FaMobileAlt className="text-4xl text-indigo-400" />
    },
    {
      id: 4,
      name: 'Photography Apps',
      des: 'Creative and smart photography tools.',
      img: <FaCameraRetro className="text-4xl text-indigo-400" />
    }
  ];

  return (
    <div className="sm:px-20 px-5 py-14 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl min-h-screen">
      {/* About Section */}
      <motion.div
        className="mb-14 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-indigo-500 inline-block">About Me</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-200">
          Hi! I'm a software engineer passionate about solving complex problems through elegant code. I love turning ideas into reality.
        </p>
        <p className="mt-4 text-gray-300">
          My journey blends deep technical knowledge with creative problem-solving to deliver user-centric software.
        </p>
      </motion.div>

      {/* What I Do Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-center border-b-2 border-indigo-400 inline-block">What I'm Doing</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-indigo-500/50 hover:bg-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="mb-4">{item.img}</div>
              <h3 className="text-xl font-bold text-indigo-100">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-200">{item.des}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center border-b-2 border-indigo-400 inline-block">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <TestimonialCard
            name="Emily Evans"
            message="Richard was hired to create a corporate identity. We were very pleased with the work."
          />
          <TestimonialCard
            name="John Doe"
            message="Richard's development skills are top-notch. He delivered our project on time and exceeded expectations."
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, message }) => (
  <motion.div
    className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 transition"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-bold text-indigo-200">{name}</h3>
    <p className="mt-3 text-gray-300 text-sm">{message}</p>
  </motion.div>
);

export default About;

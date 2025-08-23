import React from 'react';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'University School Of The Arts',
    degree: 'Bachelor of Arts in Visual Design',
    location: 'Los Angeles, CA',
    period: '2007 — 2008',
    description: 'Studied visual design and applied arts with a focus on modern techniques and creative storytelling.',
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />
  },
  {
    school: 'New York Academy Of Art',
    degree: 'Diploma in Digital Illustration',
    location: 'New York, NY',
    period: '2006 — 2007',
    description: 'Specialized in digital illustration and creative communication, combining aesthetics with functionality.',
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />
  },
  {
    school: 'High School Of Art And Design',
    degree: 'High School Diploma',
    location: 'New York, NY',
    period: '2002 — 2004',
    description: 'Built foundational knowledge in graphic design, fine art, and portfolio development.',
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />
  }
];

const Resume = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-12 text-white min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 flex items-center gap-3 text-yellow-400 glow-text text-center sm:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MdOutlineCastForEducation className="text-3xl sm:text-4xl" />
        Education
      </motion.h2>

      <div className="relative border-l-4 border-yellow-400 pl-6 sm:pl-10">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 relative sm:mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-7 sm:-left-9 top-2 sm:top-4 w-10 h-10 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Content Card */}
            <motion.div
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-3xl p-4 sm:p-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300">{item.school}</h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-1 italic">
                {item.degree} | {item.location}
              </p>
              <span className="block mt-1 text-xs sm:text-sm text-gray-300">{item.period}</span>
              <p className="mt-2 sm:mt-3 text-gray-100 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Glowing text animation */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700; }
          to { text-shadow: 0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px #FFD700; }
        }
      `}</style>
    </div>
  );
};

export default Resume;

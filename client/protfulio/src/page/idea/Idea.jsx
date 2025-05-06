import React from 'react';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'University School Of The Arts',
    period: '2007 — 2008',
    description: 'Studied visual design and applied arts with a focus on modern techniques and creative storytelling.',
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />
  },
  {
    school: 'New York Academy Of Art',
    period: '2006 — 2007',
    description: 'Specialized in digital illustration and creative communication, combining aesthetics with functionality.',
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />
  },
  {
    school: 'High School Of Art And Design',
    period: '2002 — 2004',
    description: 'Built foundational knowledge in graphic design, fine art, and portfolio development.',
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />
  }
];

const Resume = () => {
  return (
    <div className="px-6 sm:px-20 py-14 bg-gradient-to-b from-[#1f2937] to-[#111827] text-white min-h-screen">
      <motion.h2
        className="text-4xl font-bold mb-10 flex items-center gap-3 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MdOutlineCastForEducation className="text-4xl" />
        Education
      </motion.h2>

      <div className="relative border-l-4 border-yellow-400 pl-8">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[1.65rem] top-2 w-6 h-6 rounded-full bg-yellow-400 shadow-md shadow-yellow-500 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Content */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-yellow-300">{item.school}</h3>
              <span className="block mt-1 text-sm text-gray-300">{item.period}</span>
              <p className="mt-3 text-gray-200">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resume;

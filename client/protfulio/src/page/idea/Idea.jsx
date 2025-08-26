import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaBriefcase, FaAward, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

// Education Data
const educationData = [
  {
    school: "University School Of The Arts",
    degree: "Bachelor of Arts in Visual Design",
    location: "Los Angeles, CA",
    period: "2007 — 2008",
    description:
      "Studied visual design and applied arts with a focus on modern techniques and creative storytelling.",
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />,
  },
  {
    school: "New York Academy Of Art",
    degree: "Diploma in Digital Illustration",
    location: "New York, NY",
    period: "2006 — 2007",
    description:
      "Specialized in digital illustration and creative communication, combining aesthetics with functionality.",
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />,
  },
  {
    school: "High School Of Art And Design",
    degree: "High School Diploma",
    location: "New York, NY",
    period: "2002 — 2004",
    description:
      "Built foundational knowledge in graphic design, fine art, and portfolio development.",
    icon: <MdOutlineCastForEducation className="text-2xl text-yellow-400" />,
  },
];

// Experience Data
const experienceData = [
  {
    role: "UI/UX Designer",
    company: "Creative Studio",
    period: "2012 — 2015",
    description:
      "Worked on branding, web design, and product UI/UX for startups and businesses.",
    icon: <FaBriefcase className="text-xl text-blue-400" />,
  },
  {
    role: "Senior Visual Designer",
    company: "DesignPro Agency",
    period: "2015 — 2020",
    description:
      "Led a design team, managed client projects, and improved design workflows.",
    icon: <FaBriefcase className="text-xl text-blue-400" />,
  },
];

// Skills Data
const skills = [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "Figma",
  "Photoshop",
  "Illustrator",
  "Framer Motion",
];

// Certifications / Achievements
const achievements = [
  {
    title: "Best Designer Award",
    issuer: "NY Design Conference",
    year: "2018",
    icon: <FaAward className="text-xl text-green-400" />,
  },
  {
    title: "Certified UX Professional",
    issuer: "Interaction Design Foundation",
    year: "2019",
    icon: <FaAward className="text-xl text-green-400" />,
  },
];

const SectionTitle = ({ icon, title }) => (
  <motion.h2
    className="text-3xl sm:text-4xl font-bold mb-8 flex items-center gap-3 text-yellow-400 glow-text"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {icon}
    {title}
  </motion.h2>
);

const Resume = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20 py-12 text-white min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Education */}
      <SectionTitle icon={<MdOutlineCastForEducation />} title="Education" />
      <div className="relative border-l-4 border-yellow-400 pl-8 sm:pl-12 mb-16">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-8 top-3 w-10 h-10 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500 flex items-center justify-center">
              {item.icon}
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-5 hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl font-bold text-yellow-300">{item.school}</h3>
              <p className="text-sm text-gray-300 italic">
                {item.degree} | {item.location}
              </p>
              <span className="block mt-1 text-xs text-gray-400">{item.period}</span>
              <p className="mt-2 text-gray-200 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience */}
      <SectionTitle icon={<FaBriefcase />} title="Experience" />
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {experienceData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-5 hover:scale-105 hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2 text-blue-300">
              {item.icon}
              <h3 className="font-semibold text-lg">{item.role}</h3>
            </div>
            <p className="text-gray-300 text-sm">{item.company}</p>
            <p className="text-xs text-gray-400">{item.period}</p>
            <p className="mt-2 text-gray-200 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <SectionTitle icon={<FaCode />} title="Skills" />
      <div className="flex flex-wrap gap-3 mb-16">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Achievements */}
      <SectionTitle icon={<FaAward />} title="Achievements & Certifications" />
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-5 hover:scale-105 hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2 text-green-300">
              {a.icon}
              <h3 className="font-semibold text-lg">{a.title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{a.issuer}</p>
            <p className="text-xs text-gray-400">{a.year}</p>
          </motion.div>
        ))}
      </div>

      {/* Glow Animation */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 5px #FFD700, 0 0 15px #FFD700, 0 0 30px #FFD700;
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700; }
          to { text-shadow: 0 0 20px #FFD700, 0 0 40px #FFD700; }
        }
      `}</style>
    </div>
  );
};

export default Resume;

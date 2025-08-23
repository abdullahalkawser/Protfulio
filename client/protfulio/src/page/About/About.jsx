import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaEnvelope />, link: "mailto:your.email@example.com", color: "bg-red-500" },
  { icon: <FaFacebookF />, link: "https://facebook.com", color: "bg-blue-600" },
  { icon: <FaGithub />, link: "https://github.com", color: "bg-gray-800" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com", color: "bg-blue-700" },
  { icon: <FaTwitter />, link: "https://twitter.com", color: "bg-sky-400" },
];

const stats = [
  { number: "+700h", label: "Work tracked on Upwork only" },
  { number: "+30", label: "Projects Delivered since 2021" },
  { number: "~98%", label: "Successful Jobs Completion Rate" },
  { number: "4.5", label: "Stars Average Rated Work" },
];

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 relative overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-500 opacity-50 rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Left Section */}
      <motion.div
        className="flex-1 text-left p-6 max-w-xl relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hey, I am <span className="text-green-500 glow-text">Abdullah AL Kawser</span> 🙌
        </h1>
        <p className="text-lg mb-6">
          Software Engineer | 🤖 Machine Learning | AI | Deep Learning | Computer Vision | Bangladesh / USA
        </p>

        <div className="space-x-4 mb-10">
          <motion.button
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
          <motion.button
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check Portfolio
          </motion.button>
        </div>

        {/* Stats with 3D hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-4 rounded-xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.1, rotateX: 5, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links with 3D hover */}
        <div className="flex flex-wrap gap-4">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} w-12 h-12 flex items-center justify-center rounded-lg shadow-lg cursor-pointer`}
              whileHover={{ scale: 1.2, rotateX: 5, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        className="flex-1 flex justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="w-80 md:w-96 h-80 md:h-96 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl"
          whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-1/489085217_1225632368983132_9073890756416247574_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEp2EjF5dKG6maYNVO3zPq8_QmJvGbojLn9CYm8ZuiMuVPdNWJoVaZmN0H-BcjyM-f2wgIxKfnYtQc00DxgLKhn&_nc_ohc=V3LHMz-aTfMQ7kNvwGyzeso&_nc_oc=Adlc02cs4HvISu_m4k1lWXAVwaw-rGu87m6O0O5no58-CsajxpovIYwMQA497dPV-uc&_nc_zt=24&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=TejcXi_-CgAJt9btyelM-g&oh=00_AfWN5uCBh8LZYOLcVL7wRQK-PsnvLeMsTWOYta67kDoYPg&oe=68AEE8E3"
            alt="Abdullah AL Kawser"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
          100% { transform: translateY(0) }
        }
        .glow-text {
          text-shadow: 0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 20px #00ff80;
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 20px #00ff80; }
          to { text-shadow: 0 0 20px #00ff80, 0 0 40px #00ff80, 0 0 60px #00ff80; }
        }
      `}</style>
    </div>
  );
};

export default About;

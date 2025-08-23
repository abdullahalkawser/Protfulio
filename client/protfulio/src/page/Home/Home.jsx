import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 p-5 flex flex-col items-center shadow-xl transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-50`}
      >
        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold mb-6 text-green-400 glow-text text-center">
          Abdullah AL Kawser
        </h2>

        {/* Navigation */}
        <ul className="list-none p-0 space-y-3 w-full">
          {[
            { name: "Home", link: "/home" },
            { name: "Projects", link: "/portfolio" },
            { name: "Education", link: "/Resume" },
            { name: "Blog", link: "/Blog" },
            { name: "Contact", link: "/contact" },
            { name: "Logout", link: "#" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-green-500 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-md flex justify-center"
              onClick={() => setOpen(false)} // close sidebar on mobile click
            >
              <Link to={item.link} className="w-full text-center font-medium">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex mt-auto gap-4 text-gray-400 text-xl">
          <SocialIcon icon={<FaFacebook />} link="https://facebook.com" />
          <SocialIcon icon={<FaInstagram />} link="https://instagram.com" />
          <SocialIcon icon={<FaGithub />} link="https://github.com" />
        </div>
      </div>

      {/* Top Navbar (mobile) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg z-40">
        <h2 className="text-lg font-bold text-green-400">Kawser</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto mt-12 md:mt-0">
        <Outlet />
      </div>

      {/* Glow Effect */}
      <style>{`
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

// Social Icon Component
const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 transition-transform transform hover:scale-125"
  >
    {icon}
  </a>
);

export default Home;

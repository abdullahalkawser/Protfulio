import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  GraduationCap,
  Folder,
  PenTool,
  PhoneCall,
  Info,
  Sun,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { to: "/about", label: "About", icon: <Info size={18} /> },
    { to: "/Resume", label: "Education", icon: <GraduationCap size={18} /> },
    { to: "/Portfolio", label: "Portfolio", icon: <Folder size={18} /> },
    { to: "/Blog", label: "Blog", icon: <PenTool size={18} /> },
    { to: "/contact", label: "Contact", icon: <PhoneCall size={18} /> },
  ];

  const nav = (
    <>
      {navLinks.map((item, i) => (
        <motion.li
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            to={item.to}
            className={`flex items-center gap-2 relative group ${
              location.pathname === item.to
                ? "text-blue-400 font-semibold"
                : "text-indigo-300 hover:text-blue-400"
            }`}
          >
            {item.icon}
            {item.label}
            {/* Underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                location.pathname === item.to
                  ? "w-full bg-blue-400"
                  : "w-0 group-hover:w-full bg-blue-400"
              }`}
            ></span>
          </Link>
        </motion.li>
      ))}
    </>
  );

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${
        darkMode
          ? "bg-gradient-to-r from-purple-600/80 via-pink-500/70 to-purple-700/80 text-white"
          : "bg-gradient-to-r from-blue-200 via-pink-100 to-purple-200 text-gray-900"
      } backdrop-blur-lg shadow-lg rounded-2xl px-4 sticky top-3 z-50`}
    >
      {/* Left Section */}
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-indigo-300 lg:hidden"
          >
            <Menu size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow-xl bg-[#1e1e2e]/95 rounded-2xl z-[1] animate-slide-in"
          >
            {nav}
          </ul>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <Link
            to="/about"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent ml-2 tracking-wide"
          >
            ABDULLAH
          </Link>
        </motion.div>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">{nav}</ul>
      </div>

      {/* Right Section: Theme Toggle */}
      <div className="navbar-end">
        <motion.button
          whileTap={{ rotate: 180, scale: 0.8 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md hover:shadow-lg"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>

      {/* Extra Animations */}
      <style>{`
        @keyframes slide-in {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </motion.div>
  );
}

export default Navbar;

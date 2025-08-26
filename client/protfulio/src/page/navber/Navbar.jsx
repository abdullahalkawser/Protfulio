import { Link } from "react-router-dom";
import { Menu, GraduationCap, Folder, PenTool, PhoneCall, Info } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const nav = (
    <>
      {[
        { to: "/about", label: "About", icon: <Info size={18} /> },
        { to: "/Resume", label: "Education", icon: <GraduationCap size={18} /> },
        { to: "/Portfolio", label: "Portfolio", icon: <Folder size={18} /> },
        { to: "/Blog", label: "Blog", icon: <PenTool size={18} /> },
        { to: "/contact", label: "Contact", icon: <PhoneCall size={18} /> },
      ].map((item, i) => (
        <motion.li
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            to={item.to}
            className="flex items-center gap-2 text-indigo-300 hover:text-blue-400 relative group"
          >
            {item.icon}
            {item.label}
            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
      className="navbar bg-gradient-to-r from-purple-600/80 via-pink-500/70 to-purple-700/80 
        backdrop-blur-lg shadow-lg rounded-2xl px-4 sticky top-3 z-50"
    >
      {/* Left Section */}
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow-xl bg-[#1e1e2e]/90 rounded-2xl z-[1] animate-fade-in"
          >
            {nav}
          </ul>
        </div>
        <Link
          to="/about"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent ml-2 tracking-wide"
        >
          ABDULLAH
        </Link>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">{nav}</ul>
      </div>
    </motion.div>
  );
}

export default Navbar;

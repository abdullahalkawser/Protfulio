import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaRocket } from "react-icons/fa";
import { 
  HiOutlineHome, HiOutlineBriefcase, HiOutlineAcademicCap, 
  HiOutlineBookOpen, HiOutlineMail, HiMenuAlt3, HiX 
} from "react-icons/hi";

// --- Loading Component (The Space Spinner) ---
const PreLoader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Space Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Galactic Spinner */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Orbital Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-purple-500/20 rounded-full"
        />
        
        {/* Core Content */}
        <motion.div 
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="z-10 text-center"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <FaRocket className="text-white text-3xl animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Branding Text */}
      <div className="mt-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black tracking-[0.3em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          ABDULLAH AL KAWSER
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5 }}
          className="h-[1px] bg-cyan-500/50 mt-2 mx-auto"
        />
        <p className="text-[15px] text-gray-800 font-mono mt-2 tracking-widest uppercase italic">
             Software Engineer | Machine Learning | Artificial Intelligence | AI Researcher
        </p>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 5 Second Loader Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: "Home", link: "/home", icon: <HiOutlineHome /> },
    { name: "Projects", link: "/portfolio", icon: <HiOutlineBriefcase /> },
    { name: "Education", link: "/Resume", icon: <HiOutlineAcademicCap /> },
    { name: "Blog", link: "/Blog", icon: <HiOutlineBookOpen /> },
    { name: "Contact", link: "/contact", icon: <HiOutlineMail /> },
  ];

  return (
    <>
      <AnimatePresence>
        {loading && <PreLoader />}
      </AnimatePresence>

      <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans relative">
        
        {/* --- Global Background Particles (Subtle) --- */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            />
          ))}
        </div>

        {/* --- Sidebar --- */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-[#0a0f1b]/60 backdrop-blur-3xl border-r border-white/5 p-5 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.5)] transform 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-all duration-500 ease-in-out z-50`}
        >
          {/* Profile Section with Glow */}
          <div className="flex flex-col items-center mb-10 pt-4 relative group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 p-[2px] mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-cyan-500/40 transition-all duration-500"
            >
                <div className="w-full h-full bg-[#0a0f1b] rounded-2xl flex items-center justify-center text-xl font-bold text-white border border-white/5">
                  AK
                </div>
            </motion.div>
            <h2 className="text-lg font-bold tracking-tight text-white text-center">
              Abdullah AL Kawser
            </h2>
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-[15px] text-cyan-400 font-mono mt-1 uppercase tracking-[0.2em] font-semibold"
            >
              Software Engineer
            </motion.p>
          </div>

          {/* Navigation with Animated Links */}
          <nav className="flex-1 overflow-y-auto no-scrollbar pt-2">
            <ul className="space-y-2">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.link;
                return (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      onClick={() => setOpen(false)}
                      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden ${
                        isActive 
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/10" 
                        : "hover:bg-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 z-0"
                        />
                      )}
                      
                      <span className={`text-xl relative z-10 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-cyan-400" : "group-hover:text-cyan-400"}`}>
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium relative z-10">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="pt-6 border-t border-white/5 flex justify-center gap-6 text-gray-500 pb-2">
            <SocialIcon icon={<FaFacebook />} link="https://facebook.com" color="hover:text-blue-500" />
            <SocialIcon icon={<FaInstagram />} link="https://instagram.com" color="hover:text-pink-500" />
            <SocialIcon icon={<FaGithub />} link="https://github.com" color="hover:text-white" />
          </div>
        </aside>

        {/* --- Mobile Header --- */}
        <header className="md:hidden fixed top-0 left-0 w-full bg-[#020617]/80 backdrop-blur-md border-b border-white/5 p-4 flex justify-between items-center z-40">
          <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Abdullah
          </h2>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-white/5 text-cyan-400"
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </motion.button>
        </header>

        {/* --- Main Content Area --- */}
        <main className="flex-1 relative overflow-y-auto custom-scrollbar">
          <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
          <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
          
          <div className="w-full px-4 md:px-8 lg:px-10 py-8 mt-16 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[1500px] mx-auto"
            >
              <Outlet />
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

const SocialIcon = ({ icon, link, color }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className={`text-xl transition-all duration-300 ${color}`}
  >
    {icon}
  
  </motion.a>
);

export default Home;
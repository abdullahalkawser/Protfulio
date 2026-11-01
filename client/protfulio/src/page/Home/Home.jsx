import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";
import { 
  HiOutlineHome, HiOutlineBriefcase, HiOutlineAcademicCap, 
  HiOutlineBookOpen, HiOutlineMail, HiMenuAlt3, HiX 
} from "react-icons/hi";

// --- Dynamic Particle Background ---
const InteractiveParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
};

// --- Modern Space Preloader ---
const PreLoader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-52 h-52 flex items-center justify-center">
        {/* Orbital Animations */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-cyan-500/20 rounded-full border-t-cyan-400 border-r-transparent"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 border border-purple-500/20 rounded-full border-b-purple-500 border-l-transparent"
        />

        {/* Central Glowing Orb */}
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)] rotate-12">
            <FaRocket className="text-white text-3xl -rotate-12 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Brand Title */}
      <div className="mt-8 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-black tracking-[0.25em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-500"
        >
          Abdullah Al Kawser
        </motion.h1>
        
        <div className="w-48 h-[2px] bg-slate-800 rounded-full mx-auto mt-3 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs md:text-sm text-slate-400 font-mono mt-3 tracking-widest uppercase"
        >
          Software Engineer | AI Researcher
        </motion.p>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
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

      <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
        <InteractiveParticles />

        {/* --- Background Radial Glows --- */}
        <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* --- Mobile Backdrop --- */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
          )}
        </AnimatePresence>

        {/* --- Sidebar --- */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-[#070c1e]/70 backdrop-blur-2xl border-r border-slate-800/60 p-6 flex flex-col shadow-2xl z-50 transform 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-300 ease-out`}
        >
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8 pt-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 mb-3 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
            >
              <div className="w-16 h-16 bg-[#070c1e] rounded-[14px] flex items-center justify-center text-xl font-black text-white tracking-widest border border-white/10">
                AK
              </div>
            </motion.div>
            
            <h2 className="text-base font-bold tracking-tight text-slate-100 text-center">
              Abdullah Al Kawser
            </h2>
            <span className="mt-1 px-3 py-0.5 rounded-full text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 tracking-wider">
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto no-scrollbar space-y-1.5">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={idx}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group ${
                    isActive 
                      ? "text-cyan-400 font-semibold" 
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`text-xl transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
                  }`}>
                    {item.icon}
                  </span>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="pt-5 border-t border-slate-800/80 flex items-center justify-around text-slate-400">
            <SocialIcon icon={<FaGithub />} link="https://github.com" title="GitHub" />
            <SocialIcon icon={<FaLinkedinIn />} link="https://linkedin.com" title="LinkedIn" />
            <SocialIcon icon={<FaFacebookF />} link="https://facebook.com" title="Facebook" />
            <SocialIcon icon={<FaInstagram />} link="https://instagram.com" title="Instagram" />
          </div>
        </aside>

        {/* --- Mobile Top Navigation --- */}
        <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/80 px-4 flex justify-between items-center z-40">
          <span className="text-base font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent uppercase">
            Abdullah
          </span>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation"
            className="p-2 rounded-xl bg-slate-800/60 text-cyan-400 border border-slate-700/50 active:scale-95 transition-transform"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </header>

        {/* --- Main Viewport & Route Content --- */}
        <main className="flex-1 relative overflow-y-auto no-scrollbar">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-8 mt-16 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
};

const SocialIcon = ({ icon, link, title }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Home;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaLinkedin, FaTerminal, FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] text-white relative overflow-hidden font-sans">
      
      {/* 1. Animated Background Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 100, Math.random() * 500, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 800, Math.random() * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
            className="absolute w-[200px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Section: Creative Text & Info --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">System Status: Ready to Build</span>
          </motion.div>

          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">
            HAVE A <br />
            <motion.span 
              animate={{ color: ["#fff", "#22d3ee", "#a855f7", "#fff"] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="italic"
            >
              VISION?
            </motion.span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl mb-12 max-w-lg leading-relaxed">
            "আপনার কল্পনাকে আমি <span className="text-white font-bold">Algorithms</span>-এ রূপান্তর করি। চলুন এক সাথে ডিজিটাল ভবিষ্যৎ লিখে ফেলি।"
          </p>

          <div className="space-y-6">
            {[
              { icon: <FaEnvelope />, label: "Email", value: "dev.bubt@engineer.com", color: "from-cyan-500 to-blue-500" },
              { icon: <FaLinkedin />, label: "Network", value: "linkedin.com/in/yourname", color: "from-blue-500 to-purple-600" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-3xl group"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:rotate-12 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">{item.label}</p>
                  <p className="text-white font-mono text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Right Section: Interactive Form --- */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                className="bg-[#0a0f1b]/80 border border-white/10 p-10 lg:p-14 rounded-[3.5rem] shadow-2xl backdrop-blur-2xl relative overflow-hidden"
              >
                {/* 2. Success/Error Scanning Line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0"
                />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                  <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-gray-500 italic">
                    <FaTerminal /> $ ./initialize_contact.sh
                  </div>

                  {["Name", "Email", "Message"].map((field, i) => (
                    <div key={i} className="relative group">
                      {field === "Message" ? (
                        <textarea required className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-700 text-lg resize-none h-32" placeholder={field} />
                      ) : (
                        <input required type={field === "Email" ? "email" : "text"} className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-700 text-lg" placeholder={field} />
                      )}
                      <motion.div className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl font-black text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-4 group"
                  >
                    DEPLOY MESSAGE 
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </motion.span>
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              /* 3. Post-Submission Success Animation */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0f1b]/80 border border-cyan-500/50 p-20 rounded-[3.5rem] flex flex-col items-center justify-center text-center backdrop-blur-2xl h-[600px]"
              >
                <motion.div 
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-5xl mb-8 shadow-[0_0_50px_rgba(6,182,212,0.5)]"
                >
                  <FaCheckCircle />
                </motion.div>
                <h2 className="text-3xl font-black mb-4 tracking-tighter uppercase">Signal Received!</h2>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  আপনার মেসেজটি সাফল্যের সাথে আমার সার্ভারে এনক্রিপ্ট হয়ে পৌঁছেছে। <br /> খুব দ্রুত আমি আপনার সাথে যোগাযোগ করছি।
                </p>
                <motion.button 
                  onClick={() => setIsSent(false)}
                  className="mt-10 text-xs font-mono text-cyan-400 hover:underline tracking-widest uppercase"
                >
                  [ Send Another _ ]
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Decorative Floating Tech Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 border border-dashed border-cyan-500/20 rounded-full pointer-events-none"
      />

    </div>
  );
}
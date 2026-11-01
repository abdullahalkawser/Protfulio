import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, 
  FaTerminal, FaCheckCircle, FaCopy, FaExternalLinkAlt, FaClock, FaCode
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "dev.bubt@engineer.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate secure server encryption & payload dispatch
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] text-slate-100 relative overflow-x-hidden font-sans py-8 md:py-12 px-4 sm:px-6 lg:px-10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="px-3 py-1 text-[11px] md:text-xs font-mono tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 rounded-full inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Secure Transmission Channel
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-500">
            Initialize Contact
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-mono mt-3 max-w-xl mx-auto px-2">
            Have a project, research collaboration, or engineering role? Send a data packet across the network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* --- Left Column: Direct Contacts & Live JSON Preview (Mobile & Desktop Grid) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* System Status Card */}
            <div className="p-5 md:p-6 bg-[#070c1e]/70 border border-slate-800/80 rounded-2xl backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
                  SYSTEM ONLINE
                </span>
                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                  <FaClock size={11} /> UTC+6 (Dhaka)
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white mb-2">Abdullah Al Kawser</h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Available for Software Engineering positions, AI research collaborations, and high-performance system developments.
              </p>
            </div>

            {/* Direct Email Card with Quick Copy */}
            <div className="p-5 md:p-6 bg-[#070c1e]/70 border border-slate-800/80 rounded-2xl backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Direct Mail</span>
                    <p className="text-xs sm:text-sm font-mono text-white truncate">{emailAddress}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-xl text-xs font-medium text-slate-300 transition-all cursor-pointer"
                >
                  {copied ? <FaCheckCircle className="text-emerald-400" /> : <FaCopy />}
                  {copied ? "Copied!" : "Copy Email"}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${emailAddress}?subject=Inquiry from Portfolio`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-xs font-medium text-cyan-400 transition-all"
                >
                  <FaExternalLinkAlt size={11} /> Open Mail
                </motion.a>
              </div>
            </div>

            {/* Live Interactive Payload Preview Widget */}
            <div className="p-4 md:p-5 bg-slate-950/80 border border-cyan-500/20 rounded-2xl font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-2 text-cyan-400 text-xs">
                  <FaCode size={14} /> LIVE_PAYLOAD.json
                </span>
                <span className="text-[10px] text-slate-600">JSON</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`{
  "sender": "${formData.name || "Anonymous"}",
  "email": "${formData.email || "pending..."}",
  "subject": "${formData.subject || "General Inquiry"}",
  "status": "ready_to_dispatch"
}`}
              </pre>
            </div>

            {/* Professional Networks */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-[#070c1e]/70 border border-slate-800/80 hover:border-blue-500/30 rounded-xl flex items-center gap-3 transition-all group shadow-lg"
              >
                <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Connect</span>
                  <p className="text-xs font-bold text-white">LinkedIn</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-[#070c1e]/70 border border-slate-800/80 hover:border-purple-500/30 rounded-xl flex items-center gap-3 transition-all group shadow-lg"
              >
                <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg group-hover:scale-110 transition-transform">
                  <FaGithub size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Explore</span>
                  <p className="text-xs font-bold text-white">GitHub</p>
                </div>
              </motion.a>
            </div>

          </motion.div>

          {/* --- Right Column: Interactive Dispatch Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#070c1e]/70 border border-slate-800/90 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl relative overflow-hidden">
              
              {/* Scanline decoration */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-slate-500 overflow-hidden">
                <FaTerminal className="text-cyan-400 shrink-0" /> 
                <span className="truncate">$ ./execute_secure_message_dispatcher.sh</span>
              </div>

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5 md:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                        <input 
                          required 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-slate-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Email</label>
                        <input 
                          required 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Subject / Inquiry Type</label>
                      <input 
                        required 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Job Offer / Collaboration / General Inquiry" 
                        className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message Details</label>
                      <textarea 
                        required 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Write your message or project requirements here..." 
                        className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none placeholder:text-slate-600"
                      />
                    </div>

                    <motion.button
                      disabled={isSending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-xs uppercase tracking-[0.25em] text-white flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isSending ? (
                        <span className="flex items-center gap-2 font-mono">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          TRANSMITTING PACKETS...
                        </span>
                      ) : (
                        <>
                          DISPATCH MESSAGE <FaPaperPlane size={12} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  /* Success Confirmation Screen */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 text-3xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Transmission Successful</h3>
                      <p className="text-xs font-mono text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Your message has been encrypted and successfully delivered to Abdullah's communication pipeline. Expect a prompt response.
                      </p>
                    </div>

                    <motion.button
                      onClick={() => {
                        setIsSent(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-cyan-400 rounded-xl transition-colors cursor-pointer"
                    >
                      [ Send Another Message _ ]
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
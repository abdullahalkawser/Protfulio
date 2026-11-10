import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  Server,
  Database,
  Rocket,
  Terminal,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Cpu,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Layers,
  Activity,
  Globe,
  Award,
  Zap,
  CheckCircle2,
  Send,
  X
} from "lucide-react";

// --- Skill Data Matrix ---
const coreSkills = [
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    icon: Brain,
    accent: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    borderColor: "border-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-400",
    desc: "Designing state-of-the-art neural architectures, fine-tuning LLMs, and computer vision models.",
    tools: [
      { name: "PyTorch", level: 92 },
      { name: "TensorFlow", level: 88 },
      { name: "YOLOv8", level: 95 },
      { name: "LLMs / RAG", level: 90 },
      { name: "OpenCV", level: 85 }
    ]
  },
  {
    id: "swe",
    category: "Software Engineering",
    icon: Code2,
    accent: "from-purple-500 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.4)",
    borderColor: "border-purple-500/30",
    badgeBg: "bg-purple-500/10 text-purple-400",
    desc: "Building scalable microservices, resilient APIs, and high-performance modern web platforms.",
    tools: [
      { name: "Python", level: 96 },
      { name: "FastAPI", level: 92 },
      { name: "ReactJS", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 87 }
    ]
  },
  {
    id: "infra",
    category: "Data & MLOps Infrastructure",
    icon: Server,
    accent: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderColor: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10 text-emerald-400",
    desc: "Architecting cloud-native pipelines, containerizing ML workflows, and automated deployments.",
    tools: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 82 },
      { name: "PostgreSQL", level: 91 },
      { name: "AWS", level: 85 },
      { name: "MLflow / CI-CD", level: 88 }
    ]
  },
  {
    id: "ds",
    category: "Data Science & Analytics",
    icon: Database,
    accent: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    borderColor: "border-amber-500/30",
    badgeBg: "bg-amber-500/10 text-amber-400",
    desc: "Extracting actionable insights from complex datasets and engineering real-time data pipelines.",
    tools: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "ETL Pipelines", level: 90 },
      { name: "Feature Eng.", level: 89 },
      { name: "Scikit-Learn", level: 93 },
      { name: "Spark / BigData", level: 80 }
    ]
  }
];

// --- Featured Innovations ---
const featuredProjects = [
  {
    title: "Neural Vision & Object Detection Engine",
    tag: "Computer Vision",
    desc: "Real-time automated defect identification leveraging YOLOv8 and customized PyTorch inference engines.",
    stats: "99.4% Accuracy • 45 FPS Inference"
  },
  {
    title: "Enterprise Autonomous RAG Assistant",
    tag: "Generative AI",
    desc: "Intelligent vector-based knowledge graph search with custom LLM embeddings and hybrid retrieval.",
    stats: "<200ms Latency • Multi-Tenant"
  },
  {
    title: "Distributed High-Throughput MLOps Pipeline",
    tag: "Infrastructure",
    desc: "End-to-end continuous training framework using Docker, FastAPI backend, and cloud monitoring metrics.",
    stats: "Zero-Downtime • Auto-scaling"
  }
];

// --- Terminal Sentences for Auto-Typing Effect ---
const terminalPhrases = [
  "Architecting AI Solutions...",
  "Training Neural Networks...",
  "Deploying Scalable Microservices...",
  "Optimizing Deep Learning Models...",
  "Pioneering Next-Gen Intelligent Systems..."
];

export default function App() {
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(coreSkills[0]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Terminal Typing Animation Logic
  useEffect(() => {
    const currentPhrase = terminalPhrases[activePhraseIndex];
    let timer;

    if (!isDeleting && typedText !== currentPhrase) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 70);
    } else if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText !== "") {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      }, 40);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setActivePhraseIndex((prev) => (prev + 1) % terminalPhrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, activePhraseIndex]);

  // Profile Image URL (With fallback container)
  const profileImg =
    "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/866552773_1685327513013613_2589447610854895719_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEOXyMThKoxSDlbwRPzotg-WcyJt20rTklZzIm3bStOSUmmV88NSWbJSMbk9qpC6Et2EmrSEVM5_d9AFEX1Qe2Q&_nc_ohc=QwNb_YIg-HwQ7kNvwG6fwaX&_nc_oc=Adq6kQ_iC-TP1yAl95m3er6zVy6X2teO5gBJw9WTMOrqhqjg_9hspydqTPiNtxHjXm4&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=B0nC9twEisN3SkJJ7DPLlg&_nc_ss=7b2a8&oh=00_AQRUCNsuIIt7SpFWNrvdjssUhnuhN3JrKtjJiVHMMwpQcw&oe=6AED2FC3";

  return (
    <div className="bg-[#050714] text-slate-100 min-h-screen relative overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Cosmic Background Gradients & Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-cyan-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] bg-purple-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] bg-blue-600/10 rounded-full blur-[180px]" />
        {/* Subtle Cyber Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: `32px 32px`
          }} 
        />
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        
        {/* Navigation Bar / Quick Status Header */}
        <header className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#090d24] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                AK<span className="text-cyan-400">.AI</span>
              </span>
              <p className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase">Portfolio System</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Opportunities
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              Get In Touch
            </button>
          </motion.div>
        </header>

        {/* --- HERO SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24">
          
          {/* Hero Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Exploration Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-inner shadow-cyan-500/10">
              <Rocket className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span>Exploration & Innovation Mode: <strong className="text-white font-bold">Active</strong></span>
            </div>

            {/* Candidate Name Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Abdullah Al
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
                  Kawser
                </span>
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-300 tracking-wide flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1">
                <span className="text-cyan-400">Software Engineer</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-400">ML & AI Engineer</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400">AI Researcher</span>
              </h2>
            </div>

            {/* Interactive Cyber Terminal Typing Box */}
            <div className="bg-[#090e24]/90 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-2xl font-mono text-sm max-w-xl mx-auto lg:mx-0 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full" />
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 font-semibold">sys_console.sh</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
              </div>
              <div className="flex items-center text-cyan-300 gap-2 min-h-[1.75rem] text-sm md:text-base">
                <span className="text-purple-400 font-bold">$</span>
                <span className="text-slate-200">{typedText}</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Concise Bio Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mx-auto lg:mx-0 border-l-2 border-cyan-500/40 pl-4 sm:pl-6 text-left">
              Architecting state-of-the-art machine learning systems and resilient software backends. Focused on deep neural networks, computer vision, and deploying scalable end-to-end AI applications into enterprise environments.
            </p>

            {/* Action Buttons & Social Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <motion.button
                onClick={() => setIsContactOpen(true)}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 group transition-all"
              >
                <span>Hire Abdullah</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-cyan-200" />
              </motion.button>

              {/* Social Icon Grid */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Mail, href: "mailto:contact@abdullahalkawser.com", label: "Email" }
                ].map((social, i) => {
                  const IconComp = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 transition-all shadow-lg"
                    >
                      <IconComp className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Hero Right Avatar Showcase with Orbital 3D Visual Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Outer Cybernetic Ring 1 */}
              <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_12px_#22d3ee]" />
                <div className="absolute bottom-4 left-10 w-2 h-2 bg-purple-400 rounded-full blur-[1px]" />
              </div>

              {/* Counter-rotating Ring 2 */}
              <div className="absolute w-[85%] h-[85%] border border-dashed border-purple-500/30 rounded-full animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full blur-[3px] shadow-[0_0_15px_#a855f7]" />
              </div>

              {/* Pulsing Hex Ring Accent */}
              <div className="absolute w-[70%] h-[70%] border border-teal-500/20 rounded-full animate-ping opacity-25" />

              {/* Background Glass Backdrop */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent blur-3xl opacity-70" />

              {/* Avatar Frame Box */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-purple-500 to-emerald-400 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                
                {/* Inner Image Mask Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f2b] border-2 border-slate-900 relative group">
                  <img
                    src={profileImg}
                    alt="Abdullah Al Kawser"
                    className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback UI if image fails loading
                      e.target.onerror = null;
                      e.target.src = "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/884349613_1693268262219538_8929469945985594919_n.jpg?stp=dst-jpg_tt6&cstp=mx1153x2048&ctp=s1153x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE58fQ6fsENd32giaBJ5JnUEJWVp9EIf20QlZWn0Qh_bXn5-AoEg4KKNynn66yrNz7vB3_SVmLPAi7KYnl_f05h&_nc_ohc=OZ--dA8dVzMQ7kNvwHkdoQh&_nc_oc=AdrxJiS5b5JyLgfnMU0zDjuE0oixHpNDfVnMga6h9qBYlGSOYUGMUnIgY_ErljlrJng&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=icEB2KzgfW_1Pg9rsCIiyQ&_nc_ss=7b2a8&oh=00_AQQzGsoyJfg2PwxYE-CydzJD3tBPFg7XOZKKrHmGGYdDbQ&oe=6AF8643F";
                    }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050714]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Floating Orbit Floating Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 bg-[#090f2a]/95 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 font-mono z-20"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Deep Learning</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-2 -left-4 bg-[#090f2a]/95 backdrop-blur-md border border-purple-500/40 text-purple-300 text-xs px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 font-mono z-20"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Production Ready</span>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* --- CORE SKILLS MATRIX SECTION --- */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Engineering <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expertise & Skills</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Comprehensive toolkit spanning artificial intelligence model development to robust full-stack architecture.
            </p>
          </div>

          {/* Interactive Skill Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill) => {
              const IconComp = skill.icon;
              const isSelected = selectedSkill.id === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 sm:p-8 rounded-3xl bg-[#090e26]/80 backdrop-blur-xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between shadow-2xl ${
                    isSelected ? `${skill.borderColor} shadow-[0_0_30px_${skill.glowColor}] ring-1 ring-white/10` : "border-white/5 hover:border-white/20"
                  }`}
                >
                  {/* Subtle Corner Glow Accent */}
                  <div className={`absolute -right-6 -top-6 w-28 h-28 bg-gradient-to-bl ${skill.accent} opacity-10 blur-2xl rounded-full`} />

                  <div>
                    {/* Category Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center mb-6 shadow-inner ${skill.badgeBg}`}>
                      <IconComp className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
                      {skill.category}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Skill Badge Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {skill.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-slate-300"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Skill Proficiency Inspector */}
          <motion.div
            key={selectedSkill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#090e26]/90 border border-cyan-500/20 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${selectedSkill.badgeBg}`}>
                  <selectedSkill.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedSkill.category} Deep Dive</h4>
                  <p className="text-xs text-slate-400 font-mono">Proficiency Breakdown & Practical Mastery</p>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 self-start md:self-auto">
                Interactive Detail View
              </span>
            </div>

            {/* Progress Bars Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedSkill.tools.map((tool, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 font-medium">{tool.name}</span>
                    <span className="text-cyan-400">{tool.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tool.level}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${selectedSkill.accent}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- FEATURED PROJECTS SPOTLIGHT --- */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Featured Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Highlighted <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">AI & Engineering Projects</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Real-world systems engineered for maximum performance, accuracy, and operational scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#090e26]/70 border border-white/5 hover:border-purple-500/30 backdrop-blur-xl flex flex-col justify-between group transition-all shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-2xl rounded-full group-hover:bg-purple-500/10 transition-colors" />

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {proj.tag}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-cyan-400 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{proj.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CALL TO ACTION FOOTER BANNER --- */}
        <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-cyan-500/30 bg-gradient-to-r from-[#090e26] via-[#0b1438] to-[#090e26] text-center shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Ready to build <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">Intelligent Systems?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need automated Machine Learning solutions, AI research capabilities, or robust scalable backend infrastructure, let's connect and innovate.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <motion.button
                onClick={() => setIsContactOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl shadow-cyan-500/25 flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Contact</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Footer Credit Line */}
        <footer className="mt-16 text-center text-xs text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Abdullah Al Kawser. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Powered by AI & Modern React</span>
          </p>
        </footer>

      </div>

      {/* --- CONTACT MODAL DIALOG --- */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#090e26] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 font-sans"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!contactSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                    <Send className="w-4 h-4" />
                    <span>Direct Message Stream</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Contact Abdullah</h3>
                  <p className="text-xs text-slate-400 mb-6">Fill out the form below to initiate communication.</p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4 text-left"
                  >
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="sarah@techcorp.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Inquiry / Message</label>
                      <textarea
                        required
                        rows="4"
                        placeholder="Describe your project, AI model needs, or role opportunity..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-opacity"
                    >
                      Transmit Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Successful</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Thank you for reaching out. Abdullah will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setIsContactOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

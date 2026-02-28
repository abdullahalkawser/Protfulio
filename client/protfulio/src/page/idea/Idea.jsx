import React from "react";
import { motion } from "framer-motion";
import { 
  FaBrain, FaMicrochip, FaRobot, FaCode, FaAward, 
  FaDatabase, FaNetworkWired, FaServer, FaCogs, FaProjectDiagram 
} from "react-icons/fa";
import { 
  SiPython, SiTensorflow, SiPytorch, SiKeras, SiNumpy, SiPandas, SiJupyter 
} from "react-icons/si";

// 1. Data Sections
const educationData = [
  {
    school: "Bangladesh University of Business and Technology (BUBT)",
    degree: "B.Sc. in CSE (Major in AI & Robotics)",
    location: "Dhaka, BD",
    period: "2022 — Present",
    desc: "Researching on Neural Networks and Machine Learning Optimization.",
    icon: <FaMicrochip className="text-cyan-400" />
  }
];

const projectsData = [
  {
    title: "Neuro-Vision Bot",
    tech: "Python, PyTorch",
    desc: "Real-time object detection and pathfinding using CNN architecture.",
    status: "98% Accuracy",
    icon: <FaRobot />
  },
  {
    title: "Eco-Predict AI",
    tech: "TensorFlow, Pandas",
    desc: "Predicting environmental changes using Time-Series Analysis.",
    status: "Deploying",
    icon: <FaProjectDiagram />
  }
];

const skills = [
  { name: "Deep Learning", level: "85%", icon: <FaBrain className="text-pink-500" /> },
  { name: "ML Algorithms", level: "90%", icon: <FaNetworkWired className="text-blue-400" /> },
  { name: "Data Analysis", level: "80%", icon: <SiPandas className="text-yellow-500" /> },
  { name: "Backend Eng.", level: "75%", icon: <FaServer className="text-emerald-400" /> }
];

// 2. Main Component
const Resume = () => {
  return (
    <div className="min-h-screen  text-white px-6 md:px-20 py-16 relative overflow-hidden">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity }}
            className="absolute bg-cyan-500/10 rounded-full"
            style={{
              width: Math.random() * 10,
              height: Math.random() * 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24 relative z-10"
      >
        <h1 className="text-6xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 uppercase tracking-tighter">
          Engineering Resume
        </h1>
        <div className="flex justify-center gap-4 text-xs font-mono text-cyan-500 tracking-[0.5em]">
          <span>DATA SCIENCE</span> • <span>AI ENGINEERING</span> • <span>FULL STACK</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column (8 units) */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-bold flex items-center gap-4 mb-10">
              <span className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/30 shadow-neon-blue"><FaMicrochip /></span>
              Educational Core
            </h2>
            {educationData.map((edu, idx) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 rounded-3xl relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-10 text-8xl text-white/[0.02] group-hover:text-cyan-500/10 transition-all"></div>
                <h3 className="text-2xl font-black text-white">{edu.school}</h3>
                <p className="text-cyan-400 font-mono mb-4">{edu.degree}</p>
                <p className="text-gray-400 max-w-xl italic">"{edu.desc}"</p>
              </motion.div>
            ))}
          </section>

          {/* AI/ML Projects Section */}
          <section>
            <h2 className="text-3xl font-bold flex items-center gap-4 mb-10 uppercase">
              <span className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30 shadow-neon-purple"><FaProjectDiagram /></span>
              ML Repositories
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectsData.map((p, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-[#0a0a0a] border border-white/10 rounded-[2rem] hover:border-purple-500/50 transition-all"
                >
                  <div className="text-3xl text-purple-500 mb-4">{p.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-cyan-400 font-mono mb-4 uppercase">{p.tech}</p>
                  <p className="text-gray-500 text-sm mb-6">{p.desc}</p>
                  <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-gray-400 border-t border-white/5 pt-4">
                    <span>ACCURACY: {p.status}</span>
                    <span className="cursor-pointer hover:text-white uppercase">Source Code →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (4 units) */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* Dashboard Style Skills */}
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-md">
            <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-center">Neural Skills</h3>
            <div className="space-y-8">
              {skills.map((s, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center px-2">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
                      {s.icon} {s.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-500">{s.level}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: s.level }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-2 gap-4">
             {[SiPython, SiTensorflow, SiPytorch, SiKeras, SiNumpy, SiJupyter].map((Icon, i) => (
               <motion.div 
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center text-3xl hover:bg-white/[0.05] transition-all"
               >
                 <Icon className="text-gray-500 hover:text-cyan-400 transition-colors" />
               </motion.div>
             ))}
          </div>

          {/* Achievement Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-[2rem] text-center"
          >
            <FaAward className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h4 className="font-bold text-white mb-2">BUBT CSE CARNIVAL</h4>
            <p className="text-xs text-gray-500 italic">"Winner - Algorithm Challenge 2024"</p>
          </motion.div>

        </div>
      </div>

      {/* Global CSS for Glows */}
      <style>{`
        .shadow-neon-blue { box-shadow: 0 0 20px rgba(6, 182, 212, 0.2); }
        .shadow-neon-purple { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1e1e1e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #22d3ee; }

        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Grotesk:wght@300;700&display=swap');
        
        body { font-family: 'Space Grotesk', sans-serif; }
        h1, h2, h3 { font-family: 'Syncopate', sans-serif; }
      `}</style>

    </div>
  );
};

export default Resume;
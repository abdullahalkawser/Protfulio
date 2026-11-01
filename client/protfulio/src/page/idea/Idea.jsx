import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBrain, FaRobot, FaAward, FaNetworkWired, FaServer, 
  FaProjectDiagram, FaBriefcase, FaGraduationCap, FaExternalLinkAlt, 
  FaTerminal, FaCodeBranch, FaCloud, FaShieldAlt, FaDownload, FaCheckCircle
} from "react-icons/fa";
import { 
  SiPython, SiPytorch, SiTensorflow, SiKeras, 
  SiNumpy, SiPandas, SiJupyter, SiScikitlearn, SiDocker, 
  SiGit, SiFastapi, SiReact, SiPostgresql 
} from "react-icons/si";

// --- Data Definitions ---
const experienceData = [
  {
    role: "AI & ML Research Intern",
    company: "Neural Lab & Research Center",
    period: "2024 — Present",
    desc: "Optimizing Deep Neural Networks, working on real-time computer vision models, and benchmarking transformer architectures for edge devices.",
    skills: ["PyTorch", "OpenCV", "TensorRT", "Python"]
  },
  {
    role: "Junior Software Engineer",
    company: "TechVerse Solutions",
    period: "2023 — 2024",
    desc: "Developed scalable REST APIs, automated data ingestion pipelines, and integrated machine learning endpoints into React web platforms.",
    skills: ["Python", "FastAPI", "Docker", "PostgreSQL"]
  }
];

const educationData = [
  {
    school: "Bangladesh University of Business and Technology (BUBT)",
    degree: "B.Sc. in Computer Science & Engineering",
    major: "Major in AI & Robotics",
    location: "Dhaka, Bangladesh",
    period: "2022 — Present",
    desc: "Focusing on Neural Networks, Computer Vision, Machine Learning Optimization, and Advanced Data Structures.",
    icon: <FaGraduationCap className="text-cyan-400" />
  }
];

const projectsData = [
  {
    title: "Neuro-Vision Bot",
    tech: "Python • PyTorch • YOLO",
    desc: "Real-time object detection, segmentation, and autonomous pathfinding leveraging custom CNN architectures.",
    metric: "98% Accuracy",
    icon: <FaRobot />
  },
  {
    title: "Eco-Predict AI",
    tech: "TensorFlow • Pandas • Prophet",
    desc: "Predicting micro-climate changes using time-series analysis and ensemble gradient boosting.",
    metric: "Deployment Ready",
    icon: <FaProjectDiagram />
  }
];

const engineeringCore = [
  { title: "System Architecture", desc: "Designing microservices & high-throughput RESTful pipelines.", icon: <FaServer className="text-cyan-400" /> },
  { title: "Version Control & CI/CD", desc: "Automated testing, GitHub Actions, and Git workflow mastery.", icon: <FaCodeBranch className="text-purple-400" /> },
  { title: "Cloud & Containerization", desc: "Dockerized deployments and cloud model serving.", icon: <FaCloud className="text-blue-400" /> },
  { title: "Clean Code & Testing", desc: "Writing maintainable, modular code with robust debugging.", icon: <FaShieldAlt className="text-emerald-400" /> },
];

const neuralSkills = [
  { name: "Deep Learning & Neural Nets", level: "88%", icon: <FaBrain className="text-pink-400" /> },
  { name: "Machine Learning Algorithms", level: "92%", icon: <FaNetworkWired className="text-cyan-400" /> },
  { name: "Data Science & Analysis", level: "85%", icon: <SiPandas className="text-yellow-400" /> },
  { name: "Backend & API Engineering", level: "80%", icon: <SiFastapi className="text-teal-400" /> }
];

const techIcons = [
  { Icon: SiPython, name: "Python", color: "hover:text-yellow-400" },
  { Icon: SiPytorch, name: "PyTorch", color: "hover:text-orange-500" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "hover:text-orange-400" },
  { Icon: SiFastapi, name: "FastAPI", color: "hover:text-teal-400" },
  { Icon: SiReact, name: "React", color: "hover:text-cyan-400" },
  { Icon: SiDocker, name: "Docker", color: "hover:text-blue-500" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "hover:text-sky-400" },
  { Icon: SiGit, name: "Git", color: "hover:text-red-400" },
  { Icon: SiJupyter, name: "Jupyter", color: "hover:text-orange-500" },
];

const Resume = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    // Add real resume PDF link handling here if available
  };

  return (
    <div className="min-h-screen text-slate-100 py-6 relative overflow-hidden font-sans">
      
      {/* Header Section with Quick Recruiters Action */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10 flex flex-col items-center"
      >
        <span className="px-3 py-1 text-xs font-mono tracking-widest uppercase text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 rounded-full inline-block mb-3">
          Curriculum Vitae & Software Profile
        </span>
        <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-500 uppercase tracking-tight">
          Engineering Resume
        </h1>
        <p className="text-xs md:text-sm font-mono text-slate-400 mt-3 tracking-widest uppercase mb-6">
          Software Engineer &bull; AI/ML Researcher &bull; Full-Stack Architect
        </p>

        {/* Recruiter Quick Action Button */}
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
        >
          {downloaded ? (
            <>
              <FaCheckCircle className="text-white text-base" /> Resume Ready / Downloaded
            </>
          ) : (
            <>
              <FaDownload className="text-white" /> Download Full CV (PDF)
            </>
          )}
        </motion.button>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 relative z-10">
        
        {/* Left Main Content Column (8 Units) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Software Engineering Competencies (New for Engineers) */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/30 text-blue-400">
                <FaTerminal size={18} />
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
                Software Engineering Core
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {engineeringCore.map((core, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="p-5 bg-[#070c1e]/60 border border-slate-800/80 hover:border-blue-500/30 rounded-2xl transition-all backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xl p-2 bg-slate-900 rounded-xl border border-slate-800">
                      {core.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white">{core.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{core.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
                <FaBriefcase size={18} />
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 bg-[#070c1e]/60 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl transition-all duration-300 backdrop-blur-md"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="text-[11px] font-mono text-slate-400 bg-slate-800/50 px-2.5 py-0.5 rounded-md border border-slate-700/40">
                        #{s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Educational Core */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/30 text-purple-400">
                <FaGraduationCap size={20} />
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
                Educational Background
              </h2>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-[#070c1e]/60 border border-slate-800/80 hover:border-purple-500/30 rounded-2xl transition-all duration-300 backdrop-blur-md"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                    <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-500/20 px-2.5 py-1 rounded-md w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-400 font-medium mb-1">{edu.degree}</p>
                  <p className="text-xs text-slate-400 font-mono mb-3">{edu.major} &bull; {edu.location}</p>
                  <p className="text-sm text-slate-300 leading-relaxed italic">"{edu.desc}"</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* AI/ML Repositories */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-emerald-400">
                <FaProjectDiagram size={18} />
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
                Featured Repositories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {projectsData.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-5 bg-[#070c1e]/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-2xl text-emerald-400 p-2 bg-emerald-950/50 rounded-xl border border-emerald-500/20">
                        {p.icon}
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                        {p.metric}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-cyan-400 font-mono mb-2">{p.tech}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>Repository</span>
                    <button className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors">
                      Source <FaExternalLinkAlt size={10} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar Column (4 Units) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* AI/ML Neural Skills */}
          <div className="p-6 bg-[#070c1e]/60 border border-slate-800/80 rounded-2xl backdrop-blur-md">
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <FaBrain className="text-pink-400" /> Technical Proficiency
            </h3>
            <div className="space-y-5">
              {neuralSkills.map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 font-medium text-slate-200">
                      {s.icon} {s.name}
                    </span>
                    <span className="font-mono text-cyan-400">{s.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: s.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software & AI Toolstack Grid */}
          <div className="p-6 bg-[#070c1e]/60 border border-slate-800/80 rounded-2xl backdrop-blur-md">
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <FaTerminal className="text-cyan-400" /> Stack & Tools
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {techIcons.map(({ Icon, name, color }, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-1.5 group cursor-default"
                >
                  <Icon className={`text-2xl text-slate-400 transition-colors duration-200 ${color}`} />
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Honors & Achievements */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 bg-gradient-to-br from-cyan-950/30 via-purple-950/20 to-transparent border border-cyan-500/20 rounded-2xl text-center"
          >
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-amber-400">
              <FaAward size={22} />
            </div>
            <h4 className="font-bold text-white text-sm">BUBT CSE CARNIVAL</h4>
            <p className="text-xs text-cyan-400 font-mono mt-1">Winner — Algorithm Challenge</p>
            <p className="text-xs text-slate-400 italic mt-2">Recognized for computational efficiency and problem solving.</p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Resume;
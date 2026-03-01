import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaTwitter, FaBrain, FaCode, FaServer, FaTerminal, FaDatabase, FaRocket } from "react-icons/fa";

const coreSkills = [
  { 
    category: "AI & Machine Learning", 
    icon: <FaBrain className="text-cyan-400" />, 
    tools: ["PyTorch", "TensorFlow", "YOLOv8", "LLMs"],
    desc: "Neural network architecture and deep learning solutions."
  },
  { 
    category: "Software Engineering", 
    icon: <FaCode className="text-purple-400" />, 
    tools: ["Python", "FastAPI", "React", "Node.js"],
    desc: "Building scalable, high-performance web applications."
  },
  { 
    category: "Data Infrastructure", 
    icon: <FaServer className="text-emerald-400" />, 
    tools: ["PostgreSQL", "Docker", "AWS", "MLOps"],
    desc: "Managing data pipelines and cloud infrastructure."
  },
  {
    category: "Data Science",
    icon: <FaDatabase className="text-orange-400" />,
    tools: ["Pandas", "ETL", "CI/CD", "Data Pipelines"],
    desc: "Production-ready ML systems and scalable pipelines."
  }
];

const About = () => {
  return (
    <div className="text-white min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-x-hidden font-sans ">
      
      {/* --- Cosmic Background Elements --- */}
      <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 blur-[150px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 blur-[150px] animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center mb-20 md:mb-32">
          
          {/* --- Text Content (Order 2 on Mobile) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8">
              <FaRocket className="animate-bounce" /> Exploration Mode: Active
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
               Abdullah Al Kawser
            </h1>
            
            <h2 className="text-xl sm:text-xl md:text-2xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
               Software Engineer | Machine Learning | Artificial Intelligence | AI Researcher
              </span>
            </h2>

            <div className="text-lg md:text-2xl font-mono text-gray-400 mb-8 flex items-center justify-center lg:justify-start gap-3">
              <FaTerminal className="text-cyan-500" />
              <TypeAnimation
                sequence={["AI Solutions Architect", 2000, "Full Stack Software Engineer", 2000, "ML Research Engineer", 2000, "Artificial Intelligence ", 2000]}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-sm md:text-lg max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0 border-l-2 border-cyan-500/30 pl-6">
              🚀 I'm building intelligent systems that learn from data and solve real-world problems. My ML/AI journey includes:

 Supervised & Unsupervised Learning
 Deep Learning with TensorFlow & PyTorch
 Image Processing with OpenCV
Model Deployment using FastAPI
real-time applications like Face Detection, NLP Bots, and more
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
              >
                Hire Me
              </motion.button>
              <div className="flex gap-4 items-center">
                {[<FaGithub />, <FaLinkedinIn />, <FaTwitter />].map((icon, i) => (
                  <motion.a key={i} whileHover={{ y: -5, color: "#22d3ee" }} className="text-2xl text-gray-500 cursor-pointer">
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- The Space-Image (Order 1 on Mobile) --- */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center py-10">
            {/* Spinning Space Orbits */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-sm"></div>
            </div>
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] border border-purple-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse]">
              <div className="absolute bottom-0 right-1/2 w-4 h-4 bg-purple-500 rounded-full blur-sm"></div>
            </div>

            {/* Image Container with 3D Pop-out */}
            <div className="relative group">
              {/* Glowing Background behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
                {/* Back part of the ring (behind the head) */}
                <div className="absolute inset-0 border-[12px] md:border-[16px] border-cyan-500/30 rounded-full animate-[spin_8s_linear_infinite] z-0"></div>
                
                {/* The Image - Slightly shifted up and out */}
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 z-10 flex items-center justify-center translate-y-[-20px] md:translate-y-[-40px]"
                >
                  <img 
                    src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/484543805_1211124537100582_5765697895517237165_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeH5mcVS3JJ_gOmvmCDaYkVzWWKTXGg3aT1ZYpNcaDdpPd1wUcJvH4xOY8yesehUiM2P5huqcvc0RML1ZKhdceNO&_nc_ohc=7nSfoH42hE0Q7kNvwGnYmpd&_nc_oc=Adl4FLS3VJFOXhM_aY2hKRScNy5T7MeypP2lF97h-l7dndeLoovWOMLacx5QazAZFcQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=1lcvtk9SnlR0zaB--gySfQ&_nc_ss=8&oh=00_AfuG27hdYHEKCR4tcXB4QP1OMzdCTP3A7-K26TStnRmAmA&oe=69AA494D" 
                    alt="Abdullah" 
                    className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>

                {/* Front part of the ring (looks like it's in front of chest) */}
                <div className="absolute inset-0 border-t-[12px] md:border-t-[16px] border-l-[12px] md:border-l-[16px] border-cyan-400 rounded-full animate-[spin_8s_linear_infinite] z-20 opacity-80 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Expertise Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coreSkills.map((skill, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15, scale: 1.02 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full"></div>
              <div className="text-5xl mb-8 group-hover:animate-bounce transition-all">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed italic">{skill.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, j) => (
                  <span key={j} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/5 border border-white/10 group-hover:border-cyan-500/30 text-gray-400 group-hover:text-cyan-300 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
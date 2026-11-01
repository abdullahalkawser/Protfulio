import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, FaExternalLinkAlt, FaRocket, FaTimes, 
  FaBrain, FaCode, FaDatabase, FaMobileAlt, FaServer, 
  FaCogs, FaLayerGroup, FaSearch 
} from "react-icons/fa";

// প্রজেক্টের লিস্ট
const projects = [
  {
    id: 1,
    title: "NeuroScan AI",
    category: "AI & ML",
    desc: "Brain tumor detection system using Deep Learning.",
    why: "রেডিওলজিস্টদের কাজের নির্ভুলতা বাড়াতে এবং এমআরআই রিপোর্ট দ্রুত বিশ্লেষণ করে জীবন বাঁচাতে এই এআই সিস্টেমটি তৈরি করা হয়েছে।",
    logic: "এটি CNN (Convolutional Neural Network) ব্যবহার করে মস্তিষ্কের এমআরআই স্ক্যান থেকে টিউমারের অস্তিত্ব শনাক্ত করে।",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
      "https://images.unsplash.com/photo-1532187875605-1ef1d7215239?w=800",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800"
    ],
    tech: [
      { name: "PyTorch", icon: <FaBrain /> },
      { name: "React", icon: <FaCode /> },
      { name: "FastAPI", icon: <FaServer /> }
    ]
  },
  {
    id: 2,
    title: "CryptoVault",
    category: "Blockchain",
    desc: "Secure Blockchain Wallet & Smart Contracts.",
    why: "নিরাপদ ডিজিটাল ট্রানজেকশন নিশ্চিত করতে এটি তৈরি।",
    logic: "স্মার্ট কন্ট্রাক্ট এবং এন্ড-টু-এন্ড এনক্রিপশন লজিক ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1639710339857-79730594892c?w=800",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800"
    ],
    tech: [
      { name: "Solidity", icon: <FaDatabase /> },
      { name: "Next.js", icon: <FaLayerGroup /> },
      { name: "Web3", icon: <FaRocket /> }
    ]
  },
  {
    id: 3,
    title: "SkyDrone",
    category: "IoT & Robotics",
    desc: "Autonomous delivery bot and aerial surveillance.",
    why: "দ্রুত পণ্য ডেলিভারি নিশ্চিত করতে এই ড্রোন সিস্টেম তৈরি করা হয়েছে।",
    logic: "জিপিএস এবং অবজেক্ট ডিটেকশন অ্যালগরিদম ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1473960104312-d2e11b5362f9?w=800",
      "https://images.unsplash.com/photo-1524143924403-162ec0e9e422?w=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
    ],
    tech: [
      { name: "Python", icon: <FaCode /> },
      { name: "ROS2", icon: <FaCogs /> },
      { name: "OpenCV", icon: <FaBrain /> }
    ]
  },
  {
    id: 4,
    title: "HoloEdu",
    category: "Full Stack",
    desc: "AR learning platform for immersive education.",
    why: "শিক্ষার্থীদের জন্য জটিল বিষয়গুলো সহজভাবে উপস্থাপনের জন্য।",
    logic: "Augmented Reality এবং 3D মডেলিং টেকনোলজি ব্যবহৃত হয়েছে।",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800",
      "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
    ],
    tech: [
      { name: "Unity", icon: <FaLayerGroup /> },
      { name: "ARCore", icon: <FaMobileAlt /> },
      { name: "C#", icon: <FaCode /> }
    ]
  },
  {
    id: 5,
    title: "FinPredict",
    category: "AI & ML",
    desc: "Market analytics AI & financial forecasting.",
    why: "শেয়ার বাজারের সঠিক ভবিষ্যৎবাণী করার জন্য।",
    logic: "Time-series forecasting এবং LSTM মডেল ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1611974714024-462775bb3459?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      "https://images.unsplash.com/photo-1535320485706-44d43b91d500?w=800"
    ],
    tech: [
      { name: "TensorFlow", icon: <FaBrain /> },
      { name: "Python", icon: <FaCode /> },
      { name: "AWS", icon: <FaServer /> }
    ]
  },
  {
    id: 6,
    title: "CyberFort",
    category: "Security",
    desc: "Advanced network security & threat intelligence tool.",
    why: "সাইবার হামলা থেকে সার্ভারকে রক্ষা করতে।",
    logic: "Firewall এবং প্যাকেট ফিল্টারিং মেকানিজম।",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800"
    ],
    tech: [
      { name: "Linux", icon: <FaServer /> },
      { name: "Python", icon: <FaCode /> },
      { name: "Docker", icon: <FaCogs /> }
    ]
  },
  {
    id: 7,
    title: "UrbanIoT",
    category: "IoT & Robotics",
    desc: "Smart City Solution for resource management.",
    why: "শহরের বিদ্যুৎ ও পানির অপচয় রোধ করতে।",
    logic: "স্মার্ট সেন্সর এবং রিয়েল-টাইম মনিটরিং ড্যাশবোর্ড।",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800"
    ],
    tech: [
      { name: "Arduino", icon: <FaCogs /> },
      { name: "IoT", icon: <FaDatabase /> },
      { name: "Grafana", icon: <FaLayerGroup /> }
    ]
  },
  {
    id: 8,
    title: "EcoTrack",
    category: "Full Stack",
    desc: "Environment monitor and carbon footprint tracker.",
    why: "বায়ু দূষণ এবং জলবায়ু পরিবর্তন ট্র্যাক করতে।",
    logic: "ডেটা এনালিটিক্স এবং রিমোট সেন্সিং।",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
    ],
    tech: [
      { name: "Flutter", icon: <FaMobileAlt /> },
      { name: "Firebase", icon: <FaServer /> },
      { name: "Maps API", icon: <FaRocket /> }
    ]
  }
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleOpenModal = (project) => {
    setSelected(project);
    setActiveImage(project.image);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  const categories = ["All", "AI & ML", "Blockchain", "IoT & Robotics", "Security", "Full Stack"];

  return (
    <section className="bg-[#020617] text-white py-4 px-4 md:px-12 min-h-screen relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase"
          >
            <FaRocket className="animate-pulse" /> Project Galaxy Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            EXPLORE MY WORKS
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Discover cutting-edge AI architectures, secure blockchain apps, and full-stack engineering builds.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/25"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all backdrop-blur-md"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {currentProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="cursor-pointer group relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-bold uppercase rounded-full tracking-wider">
                      {project.category}
                    </span>

                    <div className="absolute top-4 right-4 flex gap-1">
                      {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="p-2 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs rounded-xl border border-white/10">
                          {t.icon}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60 mt-auto">
                  <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Explore Core <FaRocket className="text-xs" />
                  </span>
                  <span className="text-slate-500 text-xs font-mono">#{project.id < 10 ? `0${project.id}` : project.id}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No matching projects found!</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${
                  currentPage === page
                    ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row my-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-3 bg-slate-800/80 hover:bg-red-500/20 text-slate-300 hover:text-red-400 rounded-full z-30 transition-all border border-white/5 backdrop-blur-sm"
              >
                <FaTimes size={16} />
              </button>

              <div className="w-full md:w-1/2 bg-slate-950 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
                <div>
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-800 mb-4 bg-slate-900">
                    <img
                      src={activeImage || selected.image}
                      alt="Active Snapshot"
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaLayerGroup className="text-cyan-400" /> Snapshots Gallery
                  </h4>
                  
                  <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    {selected.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(img)}
                        className={`relative min-w-[70px] h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                          activeImage === img ? "border-cyan-400 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/25">
                      {selected.category}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white mt-3 mb-2">{selected.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{selected.desc}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                      <h5 className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">
                        Why this Project?
                      </h5>
                      <p className="text-slate-300 text-xs leading-relaxed">{selected.why}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                      <h5 className="text-purple-400 font-bold text-xs uppercase tracking-wider mb-1">
                        Core Logic
                      </h5>
                      <p className="text-slate-300 text-xs leading-relaxed">{selected.logic}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                      Build Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((t, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-xl border border-slate-700/50 text-slate-200"
                        >
                          <span className="text-cyan-400 text-sm">{t.icon}</span>
                          <span className="text-xs font-medium">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  <button className="flex-1 py-3.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-bold text-xs tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-white">
                    <FaExternalLinkAlt /> LIVE DEMO
                  </button>
                  <button className="p-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 transition-all flex items-center justify-center">
                    <FaGithub size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
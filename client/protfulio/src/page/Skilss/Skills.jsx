import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaTimes,
  FaBrain,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaCogs,
  FaLayerGroup
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "NeuroScan AI",
    desc: "Brain tumor detection system using Deep Learning.",
    why: "রেডিওলজিস্টদের কাজের নির্ভুলতা বাড়াতে এবং এমআরআই রিপোর্ট দ্রুত বিশ্লেষণ করে জীবন বাঁচাতে এই এআই সিস্টেমটি তৈরি করা হয়েছে।",
    logic: "এটি CNN (Convolutional Neural Network) ব্যবহার করে মস্তিষ্কের এমআরআই স্ক্যান থেকে টিউমারের অস্তিত্ব শনাক্ত করে।",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
      "https://images.unsplash.com/photo-1532187875605-1ef1d7215239?w=800",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800"
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
    desc: "Secure Blockchain Wallet.",
    why: "নিরাপদ ডিজিটাল ট্রানজেকশন নিশ্চিত করতে এটি তৈরি।",
    logic: "স্মার্ট কন্ট্রাক্ট এবং এন্ড-টু-এন্ড এনক্রিপশন লজিক ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1639710339857-79730594892c?w=800",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800",
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"
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
    desc: "Autonomous delivery bot.",
    why: "দ্রুত পণ্য ডেলিভারি নিশ্চিত করতে এই ড্রোন সিস্টেম তৈরি করা হয়েছে।",
    logic: "জিপিএস এবং অবজেক্ট ডিটেকশন অ্যালগরিদম ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1473960104312-d2e11b5362f9?w=800",
      "https://images.unsplash.com/photo-1524143924403-162ec0e9e422?w=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      "https://images.unsplash.com/photo-1506941433345-6e4ac70d4b8a?w=800",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800"
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
    desc: "AR learning platform.",
    why: "শিক্ষার্থীদের জন্য জটিল বিষয়গুলো সহজভাবে উপস্থাপনের জন্য।",
    logic: "Augmented Reality এবং 3D মডেলিং টেকনোলজি ব্যবহৃত হয়েছে।",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800",
      "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800"
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
    desc: "Market analytics AI.",
    why: "শেয়ার বাজারের সঠিক ভবিষ্যৎবাণী করার জন্য।",
    logic: "Time-series forecasting এবং LSTM মডেল ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1611974714024-462775bb3459?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      "https://images.unsplash.com/photo-1611974714024-462775bb3459?w=800",
      "https://images.unsplash.com/photo-1535320485706-44d43b91d500?w=800",
      "https://images.unsplash.com/photo-1526303328194-725532917518?w=800",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800"
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
    desc: "Network security tool.",
    why: "সাইবার হামলা থেকে সার্ভারকে রক্ষা করতে।",
    logic: "Firewall এবং প্যাকেট ফিল্টারিং মেকানিজম।",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800",
      "https://images.unsplash.com/photo-1510511459019-5dee995d3ff4?w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800"
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
    desc: "Smart City Solution.",
    why: "শহরের বিদ্যুৎ ও পানির অপচয় রোধ করতে।",
    logic: "স্মার্ট সেন্সর এবং রিয়েল-টাইম মনিটরিং ড্যাশবোর্ড।",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
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
    desc: "Environment monitor.",
    why: "বায়ু দূষণ এবং জলবায়ু পরিবর্তন ট্র্যাক করতে।",
    logic: "ডেটা এনালিটিক্স এবং রিমোট সেন্সিং।",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800"
    ],
    tech: [
      { name: "Flutter", icon: <FaMobileAlt /> },
      { name: "Firebase", icon: <FaServer /> },
      { name: "Maps API", icon: <FaRocket /> }
    ]
  },
  {
    id: 9,
    title: "Voyager UI",
    desc: "Space Dashboard.",
    why: "স্পেস রিসার্চ ডেটা সুন্দরভাবে উপস্থাপনের জন্য।",
    logic: "Three.js ব্যবহার করে থ্রি-ডি ভিজ্যুয়ালাইজেশন।",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800",
      "https://images.unsplash.com/photo-1446776851078-14c20672e71a?w=800",
      "https://images.unsplash.com/photo-1506701935661-76bc3f223f00?w=800",
      "https://images.unsplash.com/photo-1484589065579-248adc0152fd?w=800"
    ],
    tech: [
      { name: "Three.js", icon: <FaLayerGroup /> },
      { name: "React", icon: <FaCode /> },
      { name: "Tailwind", icon: <FaLayerGroup /> }
    ]
  },
  {
    id: 10,
    title: "DeepVocal",
    desc: "Voice AI System.",
    why: "ভয়েস কমান্ডের মাধ্যমে কাজ সহজ করতে।",
    logic: "Natural Language Processing এবং স্পিচ সিনথেসিস।",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=800",
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800",
      "https://images.unsplash.com/photo-1550741111-c80715d5ddbe?w=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      "https://images.unsplash.com/photo-1527430253228-e903a48eaad4?w=800"
    ],
    tech: [
      { name: "NLP", icon: <FaBrain /> },
      { name: "Node.js", icon: <FaServer /> },
      { name: "Python", icon: <FaCode /> }
    ]
  }
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpenModal = (project) => {
    setSelected(project);
    setActiveImage(project.image);
  };

  return (
    <section className="bg-[#030712] text-white py-24 px-4 md:px-12 min-h-screen relative overflow-hidden font-sans">
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2"
          >
            <FaRocket className="animate-pulse" /> Portfolio Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500"
          >
            PROJECT GALAXY
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Explore cutting-edge digital solutions, AI architecture, and full-stack engineering builds.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => handleOpenModal(project)}
              className="cursor-pointer group relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Badges */}
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
                  Explore Project <FaRocket className="text-xs" />
                </span>
                <span className="text-slate-500 text-xs font-mono">#{project.id < 10 ? `0${project.id}` : project.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row my-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-3 bg-slate-800/80 hover:bg-red-500/20 text-slate-300 hover:text-red-400 rounded-full z-30 transition-all border border-white/5 backdrop-blur-sm"
              >
                <FaTimes size={16} />
              </button>

              {/* Left Column: Image Preview & Gallery */}
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

              {/* Right Column: Project Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      Project Details
                    </span>
                    <h3 className="text-3xl font-extrabold text-white mt-3 mb-2">{selected.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{selected.desc}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                      <h5 className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">
                        Purpose & Vision
                      </h5>
                      <p className="text-slate-300 text-xs leading-relaxed">{selected.why}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                      <h5 className="text-purple-400 font-bold text-xs uppercase tracking-wider mb-1">
                        Architecture & Logic
                      </h5>
                      <p className="text-slate-300 text-xs leading-relaxed">{selected.logic}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h5 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                      Built With
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

                {/* Actions */}
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
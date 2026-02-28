import React, { useState } from "react";
// motion এবং AnimatePresence ইমপোর্ট করা হয়েছে
import { motion, AnimatePresence } from "framer-motion"; 
import { 
  FaGithub, FaExternalLinkAlt, FaRocket, FaTimes, 
  FaCheckCircle, FaLightbulb, FaTools, FaBrain, 
  FaCode, FaDatabase, FaMobileAlt, FaServer, FaCogs, FaLayerGroup 
} from "react-icons/fa";

const projects = [

  { id: 2, title: "CryptoVault", desc: "Secure Blockchain Wallet.", why: "নিরাপদ ডিজিটাল ট্রানজেকশন নিশ্চিত করতে এটি তৈরি।", logic: "স্মার্ট কন্ট্রাক্ট এবং এন্ড-টু-এন্ড এনক্রিপশন লজিক ব্যবহার করা হয়েছে।", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800", gallery: ["https://images.unsplash.com/photo-1639710339857-79730594892c?w=500","https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500","https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500","https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500","https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500"], tech: [{name: "Solidity", icon: <FaDatabase/>}] },

  {
    id: 1,
    title: "NeuroScan AI",
    desc: "Brain tumor detection system using Deep Learning.",
    why: "রেডিওলজিস্টদের কাজের নির্ভুলতা বাড়াতে এবং এমআরআই রিপোর্ট দ্রুত বিশ্লেষণ করে জীবন বাঁচাতে এই এআই সিস্টেমটি তৈরি করা হয়েছে।",
    logic: "এটি CNN (Convolutional Neural Network) ব্যবহার করে মস্তিষ্কের এমআরআই স্ক্যান থেকে টিউমারের অস্তিত্ব শনাক্ত করে।",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500",
      "https://images.unsplash.com/photo-1532187875605-1ef1d7215239?w=500",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500"
    ],
    tech: [{name: "PyTorch", icon: <FaBrain/>}, {name: "React", icon: <FaCode/>}, {name: "FastAPI", icon: <FaServer/>}]
  },
  {
    id: 2,
    title: "CryptoVault",
    desc: "Secure Blockchain Wallet.",
    why: "নিরাপদ ডিজিটাল ট্রানজেকশন নিশ্চিত করতে এটি তৈরি।",
    logic: "স্মার্ট কন্ট্রাক্ট এবং এন্ড-টু-এন্ড এনক্রিপশন লজিক ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1639710339857-79730594892c?w=500",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500",
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500"
    ],
    tech: [{name: "Solidity", icon: <FaDatabase/>}, {name: "Next.js", icon: <FaLayerGroup/>}, {name: "Web3", icon: <FaRocket/>}]
  },
  {
    id: 3,
    title: "SkyDrone",
    desc: "Autonomous delivery bot.",
    why: "দ্রুত পণ্য ডেলিভারি নিশ্চিত করতে এই ড্রোন সিস্টেম তৈরি করা হয়েছে।",
    logic: "জিপিএস এবং অবজেক্ট ডিটেকশন অ্যালগরিদম ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1473960104312-d2e11b5362f9?w=500",
      "https://images.unsplash.com/photo-1524143924403-162ec0e9e422?w=500",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      "https://images.unsplash.com/photo-1506941433345-6e4ac70d4b8a?w=500",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500"
    ],
    tech: [{name: "Python", icon: <FaCode/>}, {name: "ROS2", icon: <FaCogs/>}, {name: "OpenCV", icon: <FaBrain/>}]
  },
  {
    id: 4,
    title: "HoloEdu",
    desc: "AR learning platform.",
    why: "শিক্ষার্থীদের জন্য জটিল বিষয়গুলো সহজভাবে উপস্থাপনের জন্য।",
    logic: "Augmented Reality এবং 3D মডেলিং টেকনোলজি ব্যবহৃত হয়েছে।",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500",
      "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=500",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500"
    ],
    tech: [{name: "Unity", icon: <FaLayerGroup/>}, {name: "ARCore", icon: <FaMobileAlt/>}, {name: "C#", icon: <FaCode/>}]
  },
  {
    id: 5,
    title: "FinPredict",
    desc: "Market analytics AI.",
    why: "শেয়ার বাজারের সঠিক ভবিষ্যৎবাণী করার জন্য।",
    logic: "Time-series forecasting এবং LSTM মডেল ব্যবহার করা হয়েছে।",
    image: "https://images.unsplash.com/photo-1611974714024-462775bb3459?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500",
      "https://images.unsplash.com/photo-1611974714024-462775bb3459?w=500",
      "https://images.unsplash.com/photo-1535320485706-44d43b91d500?w=500",
      "https://images.unsplash.com/photo-1526303328194-725532917518?w=500",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=500"
    ],
    tech: [{name: "TensorFlow", icon: <FaBrain/>}, {name: "Python", icon: <FaCode/>}, {name: "AWS", icon: <FaServer/>}]
  },
  {
    id: 6,
    title: "CyberFort",
    desc: "Network security tool.",
    why: "সাইবার হামলা থেকে সার্ভারকে রক্ষা করতে।",
    logic: "Firewall এবং প্যাকেট ফিল্টারিং মেকানিজম।",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=500",
      "https://images.unsplash.com/photo-1510511459019-5dee995d3ff4?w=500",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500"
    ],
    tech: [{name: "Linux", icon: <FaServer/>}, {name: "Python", icon: <FaCode/>}, {name: "Docker", icon: <FaCogs/>}]
  },
  {
    id: 7,
    title: "UrbanIoT",
    desc: "Smart City Solution.",
    why: "শহরের বিদ্যুৎ ও পানির অপচয় রোধ করতে।",
    logic: "স্মার্ট সেন্সর এবং রিয়েল-টাইম মনিটরিং ড্যাশবোর্ড।",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500"
    ],
    tech: [{name: "Arduino", icon: <FaCogs/>}, {name: "IoT", icon: <FaDatabase/>}, {name: "Grafana", icon: <FaLayerGroup/>}]
  },
  {
    id: 8,
    title: "EcoTrack",
    desc: "Environment monitor.",
    why: "বায়ু দূষণ এবং জলবায়ু পরিবর্তন ট্র্যাক করতে।",
    logic: "ডেটা এনালিটিক্স এবং রিমোট সেন্সিং।",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500"
    ],
    tech: [{name: "Flutter", icon: <FaMobileAlt/>}, {name: "Firebase", icon: <FaServer/>}, {name: "Maps API", icon: <FaRocket/>}]
  },
  {
    id: 9,
    title: "Voyager UI",
    desc: "Space Dashboard.",
    why: "স্পেস রিসার্চ ডেটা সুন্দরভাবে উপস্থাপনের জন্য।",
    logic: "Three.js ব্যবহার করে থ্রি-ডি ভিজ্যুয়ালাইজেশন।",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500",
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500",
      "https://images.unsplash.com/photo-1446776851078-14c20672e71a?w=500",
      "https://images.unsplash.com/photo-1506701935661-76bc3f223f00?w=500",
      "https://images.unsplash.com/photo-1484589065579-248adc0152fd?w=500"
    ],
    tech: [{name: "Three.js", icon: <FaLayerGroup/>}, {name: "React", icon: <FaCode/>}, {name: "Tailwind", icon: <FaLayerGroup/>}]
  },
  {
    id: 10,
    title: "DeepVocal",
    desc: "Voice AI System.",
    why: "ভয়েস কমান্ডের মাধ্যমে কাজ সহজ করতে।",
    logic: "Natural Language Processing এবং স্পিচ সিনথেসিস।",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=500",
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500",
      "https://images.unsplash.com/photo-1550741111-c80715d5ddbe?w=500",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      "https://images.unsplash.com/photo-1527430253228-e903a48eaad4?w=500"
    ],
    tech: [{name: "NLP", icon: <FaBrain/>}, {name: "Node.js", icon: <FaServer/>}, {name: "Python", icon: <FaCode/>}]
  }
];


const PortfolioSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#020617] text-white py-20 px-4 md:px-10 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header - m সরিয়ে motion ব্যবহার করা হয়েছে */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            PROJECT GALAXY
          </motion.h2>
          <p className="text-gray-500 mt-4 tracking-widest font-mono italic">// Click any card to explore deep details //</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(project)}
              className="cursor-pointer group relative bg-white/[0.03] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">{project.desc}</p>
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                   View Core <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - AnimatePresence ঠিক করা হয়েছে */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-6xl bg-[#0a0f1b] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh] z-10"
            >
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 p-4 bg-white/5 hover:bg-red-500/20 rounded-full z-20 transition-all">
                <FaTimes size={20} />
              </button>

              {/* Modal Left Content */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-y-auto p-6 bg-black/40 space-y-4 custom-scrollbar">
                <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <FaLayerGroup /> Project Snapshots
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {selected.gallery.map((img, i) => (
                    <img key={i} src={img} alt="Snapshot" className="w-full rounded-2xl border border-white/5" />
                  ))}
                </div>
              </div>

              {/* Modal Right Content */}
              <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto custom-scrollbar">
                <h3 className="text-4xl font-black mb-6 text-white">{selected.title}</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="p-5 bg-cyan-500/5 rounded-2xl border border-cyan-500/10">
                    <h5 className="text-cyan-400 font-bold text-xs uppercase mb-2">Why this Project?</h5>
                    <p className="text-gray-400 text-sm italic">{selected.why}</p>
                  </div>
                  <div className="p-5 bg-purple-500/5 rounded-2xl border border-purple-500/10">
                    <h5 className="text-purple-400 font-bold text-xs uppercase mb-2">Core Logic</h5>
                    <p className="text-gray-400 text-sm italic">{selected.logic}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-gray-500 text-[10px] font-bold uppercase mb-4 tracking-widest">Build Stack</h5>
                  <div className="flex flex-wrap gap-4">
                    {selected.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-cyan-400">{t.icon}</span>
                        <span className="text-xs font-bold">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-2xl font-black text-xs transition-all">LIVE DEMO</button>
                  <button className="px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"><FaGithub size={20}/></button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
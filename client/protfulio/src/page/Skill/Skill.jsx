import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaArrowRight, 
  FaSearch, 
  FaBrain, 
  FaTimes, 
  FaUser, 
  FaClock, 
  FaTag 
} from "react-icons/fa";

// বিষয়বস্তু অনুযায়ী ক্যাটাগরি-ভিত্তিক আলাদা আলাদা ইউনিক ইমেজ পুল
const categoryImages = {
  "AI & ML": [
    "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80"
  ],
  "Software Eng": [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80"
  ],
  "Networking": [
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1510511459019-5dee995d3ff4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80"
  ],
  "Job Prep": [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
  ]
};

// বাস্তবসম্মত AI, ML, Software, Networking ও Job Prep সম্পর্কিত ৩০টি ব্লগ ডেটা
const blogs = Array.from({ length: 30 }, (_, i) => {
  const categories = ["AI & ML", "Software Eng", "Networking", "Job Prep"];
  const category = categories[i % categories.length];
  
  const titles = {
    "AI & ML": [
      "Demystifying Transformers & Large Language Models",
      "Building Custom Computer Vision Models with PyTorch",
      "The Future of Generative AI in Enterprise Architecture",
      "Optimizing Neural Networks for Edge Devices",
      "Reinforcement Learning: From Theory to Real-World Bots",
      "Unlocking Multimodal AI: Vision, Text, and Audio Combined",
      "Ethical AI: Mitigating Bias in Deep Learning Models"
    ],
    "Software Eng": [
      "Clean Architecture Principles Every Developer Should Know",
      "Microservices vs Monoliths: Making the Right Call in 2026",
      "Mastering Asynchronous Programming in Modern JavaScript",
      "Scaling Node.js Backends to Handle Millions of Requests",
      "Writing Maintainable Code with Design Patterns",
      "CI/CD Pipelines: Automating Testing and Deployment",
      "State Management Battle: Redux Toolkit vs Zustand"
    ],
    "Networking": [
      "Zero Trust Security Architecture: A Deep Dive",
      "Understanding WebSockets for Real-Time Applications",
      "Optimizing Network Latency in Distributed Cloud Systems",
      "DNS Security Extensions (DNSSEC) Explained",
      "Advanced TCP/IP Troubleshooting for Engineers",
      "Kubernetes Networking & Service Mesh Implementation",
      "Securing APIs with OAuth 2.0 and JWT Tokens"
    ],
    "Job Prep": [
      "Cracking the FAANG Coding Interview: Ultimate Guide",
      "System Design Interviews: Scalability & Load Balancing",
      "Top 15 Behavioral Interview Questions and Star Method",
      "Building a Standout Tech Portfolio That Gets You Hired",
      "Negotiating Your Tech Salary Like a Pro",
      "Mastering Data Structures & Algorithms for Beginners",
      "Resume Tips for Software Engineers in Competitive Markets"
    ]
  };

  const currentCategoryList = titles[category];
  const titleIndex = i % currentCategoryList.length;
  const title = currentCategoryList[titleIndex];
  const imgList = categoryImages[category];

  return {
    id: i + 1,
    title: title,
    description: "Explore in-depth engineering insights, modern paradigms, and actionable strategies to accelerate your technical career.",
    content: `In this article, we dive deep into ${title}. Modern engineering requirements demand robust understanding of core concepts, system scalability, and continuous innovation. Whether you are optimizing existing workflows or architecting high-frequency platforms from scratch, mastering these foundational practices will significantly elevate your productivity and technical impact.`,
    image: imgList[titleIndex % imgList.length],
    date: `2026-06-${String((i % 28) + 1).padStart(2, "0")}`,
    author: i % 2 === 0 ? "Dr. Alex Vance" : "Sarah Jenkins",
    category: category,
    readTime: `${(i % 5) + 3} min read`
  };
});

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const itemsPerPage = 6;

  // ক্যাটাগরি ও সার্চ অনুযায়ী ফিল্টার করা
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // পেজিনেশন হিসাব
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

  const categories = ["All", "AI & ML", "Software Eng", "Networking", "Job Prep"];

  return (
    <section className="bg-[#020617] text-white py-4 px-4 md:px-12 min-h-screen relative overflow-hidden font-sans">
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-wider uppercase"
          >
            <FaBrain /> Tech Insights & Career Hub
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-6xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500"
          >
            EXPERT BLOGS & ARTICLES
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Deep dive into Artificial Intelligence, Software Engineering, System Architecture, and Interview Prep.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 border-transparent text-white shadow-lg shadow-pink-500/25"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-all backdrop-blur-md"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div 
          layout
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {currentBlogs.map((blog) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={blog.id}
                className="group bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="overflow-hidden relative h-52 bg-slate-950">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 text-pink-400 text-[10px] font-bold uppercase rounded-full tracking-wider">
                      {blog.category}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300 text-[10px] font-medium rounded-full">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-slate-400 text-xs mt-auto">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px]">
                      <FaCalendarAlt className="text-pink-500" /> {blog.date}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedBlog(blog)}
                    className="text-pink-400 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Read More <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Result Found State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No matching blogs found!</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${
                  currentPage === page
                    ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/30"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 p-3 bg-slate-950/80 hover:bg-red-500/20 text-slate-300 hover:text-red-400 rounded-full z-30 transition-all border border-white/10 backdrop-blur-sm"
              >
                <FaTimes size={16} />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-pink-500 text-white text-[10px] font-bold uppercase rounded-full tracking-wider mb-2 inline-block">
                    {selectedBlog.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {selectedBlog.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-6 text-slate-300">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-800">
                  <span className="flex items-center gap-1.5"><FaUser className="text-pink-400" /> {selectedBlog.author}</span>
                  <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-pink-400" /> {selectedBlog.date}</span>
                  <span className="flex items-center gap-1.5"><FaClock className="text-pink-400" /> {selectedBlog.readTime}</span>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-slate-200 font-medium">
                  {selectedBlog.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-xs md:text-sm leading-relaxed space-y-3">
                  <p>{selectedBlog.content}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
};

export default BlogSection;
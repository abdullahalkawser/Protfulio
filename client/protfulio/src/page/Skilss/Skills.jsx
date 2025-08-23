import React from "react";

const projects = [
  {
    title: "NFT Website",
    image:
      "https://market-resized.envatousercontent.com/previews/files/289987813/01_preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=d319c8eb9a10e036b08844090b82d1f481cf204d1818b791cb1def4ef2bfe709",
    tools: ["HTML", "CSS", "Tailwind ", "JavaScript", "React"],
  },
  {
    title: "SolidWorks",
    image:
      "https://mdevelopers.com/storage/0_success-projects-ujj_d3a50aee.webp",
    tools: ["UI-UX", "Prototype"],
  },
  {
    title: "Restaurant",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/8d566b188314017.Y3JvcCwyNjE4LDIwNDgsMTI5LDA.png",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Mobile App",
    image:
      "https://cdn.uistore.design/assets/images/marvie-ios-ui-kit-for-sketch-and-figma-thumb.webp",
    tools: ["Flutter", "Figma", "UI/UX"],
  },
  {
    title: "AI Chatbot",
    image:
      "https://www.slidescarnival.com/wp-content/uploads/Futuristic-Ethics-of-Artificial-Intelligence-1.jpg",
    tools: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Machine Learning Model",
    image:
      "https://www.slideteam.net/media/catalog/product/cache/560x315/g/u/guide_for_leveraging_ai_capabilities_and_machine_learning_to_transform_industries_ppt_slide_slide01.jpg",
    tools: ["Python", "Scikit-learn", "Jupyter"],
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">
          My Projects 🚀
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white/10 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500"
            >
              {/* Image with hover zoom */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-44">
                <h4 className="text-2xl font-semibold mb-3 group-hover:text-pink-400 transition">
                  {project.title}
                </h4>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-black font-semibold px-3 py-1 rounded-full shadow-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow border effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-pink-500/50 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

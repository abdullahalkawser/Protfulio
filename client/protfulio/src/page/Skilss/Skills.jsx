import React from "react";

const projects = [
  {
    title: "NFT Website",
    image: "https://market-resized.envatousercontent.com/previews/files/289987813/01_preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=d319c8eb9a10e036b08844090b82d1f481cf204d1818b791cb1def4ef2bfe709",
    tools: ["HTML", "CSS", "Tailwind ", "JavaScript",'React'],
  },
  {
    title: "SolidWorks",
    image: "https://mdevelopers.com/storage/0_success-projects-ujj_d3a50aee.webp",
    tools: ["UI-UX", "Prototype"],
  },
  {
    title: "Restaurant",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/8d566b188314017.Y3JvcCwyNjE4LDIwNDgsMTI5LDA.png",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Mobile App",
    image: "https://cdn.uistore.design/assets/images/marvie-ios-ui-kit-for-sketch-and-figma-thumb.webp",
    tools: ["Flutter", "Figma", "UI/UX"],
  },
  {
    title: "AI Chatbot",
    image: "https://www.slidescarnival.com/wp-content/uploads/Futuristic-Ethics-of-Artificial-Intelligence-1.jpg",
    tools: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Machine Learning Model",
    image: "https://www.slideteam.net/media/catalog/product/cache/560x315/g/u/guide_for_leveraging_ai_capabilities_and_machine_learning_to_transform_industries_ppt_slide_slide01.jpg",
    tools: ["Python", "Scikit-learn", "Jupyter"],
  }
];

const PortfolioSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1f2937] to-[#111827] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e1e2f] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover max-h-60"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
